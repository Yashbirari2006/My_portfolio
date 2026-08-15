import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isNavigating) return;

      const position = window.scrollY + 140;
      let currentSection = "home";

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const sectionTop = (section as HTMLElement).offsetTop;

        if (position >= sectionTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavigating]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    const id = href.substring(1);

    setActiveSection(id);
    setIsNavigating(true);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(id);

      if (!section) {
        setIsNavigating(false);
        return;
      }

      const navbarOffset = 80;

      const targetPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    window.setTimeout(() => {
      setIsNavigating(false);
    }, 900);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <nav
        className={`mx-auto flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 ${
          isScrolled
            ? "mt-2 rounded-2xl border border-zinc-800/80 bg-zinc-950/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigation("#home")}
          className="group text-xl font-semibold tracking-tight text-white transition-transform duration-200 active:scale-95"
          aria-label="Go to home"
        >
          Yash
          <span className="text-sky-400 transition-colors duration-300 group-hover:text-cyan-300">
            .
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href.substring(1);

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 active:scale-95 ${
                  isActive
                    ? "text-zinc-950"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navbar-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 0.7,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((previous) => !previous)}
          className="rounded-full border border-zinc-800 bg-zinc-900/70 p-2 text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-90 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="mx-4 mt-3 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.substring(1);

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`relative rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-200 active:scale-[0.98] ${
                      isActive
                        ? "text-zinc-950"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-navbar-pill"
                        className="absolute inset-0 -z-10 rounded-xl bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          mass: 0.7,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;