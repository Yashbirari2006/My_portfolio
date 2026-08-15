import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

import yashPhoto from "../../assets/images/yashphoto.jpg";

const roles = [
  "I'm Yash.",
  "I'm a Developer.",
  "I'm a Builder.",
  "I'm a Learner.",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentText.substring(
          0,
          displayText.length + 1
        );

        setDisplayText(nextText);

        if (nextText === currentText) {
          window.setTimeout(() => {
            setIsDeleting(true);
          }, 1300);
        }
      } else {
        const nextText = currentText.substring(
          0,
          displayText.length - 1
        );

        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex(
            (previous) => (previous + 1) % roles.length
          );
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const projects = document.getElementById("projects");

    if (!projects) return;

    const navbarOffset = 80;

    const targetPosition =
      projects.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");

    if (!about) return;

    about.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[5%] top-[15%] h-80 w-80 rounded-full bg-sky-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]"
      />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Top ambient line */}
      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          
          {/* ================= PHOTO ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Outer glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-5 rounded-[2rem] bg-sky-500/20 blur-3xl"
              />

              {/* Rotating border */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-sky-400/50 via-transparent to-violet-500/50 opacity-70"
              />

              {/* Photo frame */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotateY: 4,
                  rotateX: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="group relative h-[350px] w-[270px] overflow-hidden rounded-[1.7rem] border border-zinc-700/80 bg-zinc-900 shadow-2xl shadow-black/40 sm:h-[400px] sm:w-[310px]"
                style={{
                  transformPerspective: 1000,
                }}
              >
                {/* Photo */}
                <img
                  src={yashPhoto}
                  alt="Yash Birari"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />

                {/* Cursor shine */}
                <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

                {/* Bottom label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                      <span className="text-xs font-medium text-zinc-300">
                        Available for opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <div className="order-2 max-w-4xl">
            {/* Intro */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-sky-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                Full Stack Developer
              </span>

              <Sparkles
                size={14}
                className="text-sky-400"
              />
            </motion.div>

            {/* Typewriter */}
            <div className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
              >
                {displayText}

                <motion.span
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] rounded-full bg-sky-400 align-middle shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                />
              </motion.h1>
            </div>

            {/* Main statement */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-1 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-zinc-300 sm:text-4xl lg:text-5xl"
            >
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                meaningful software.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              I build modern web experiences, explore AI and
              emerging technologies, and continuously learn by
              turning ideas into real-world projects.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_15px_40px_-15px_rgba(56,189,248,0.6)] active:translate-y-0"
              >
                Explore my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5 hover:text-sky-300"
              >
                Let's connect

                <Mail
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="mt-9 flex items-center gap-3"
            >
              <span className="mr-2 text-xs uppercase tracking-[0.16em] text-zinc-600">
                Find me
              </span>

              <a
                href="https://github.com/Yashbirari2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 text-xs font-bold text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5 hover:text-white"
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/yashbirari2006/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 text-xs font-bold text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5 hover:text-sky-300"
              >
                in
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          onClick={scrollToAbout}
          className="absolute bottom-[-30px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition-colors duration-300 hover:text-sky-400 sm:flex"
          aria-label="Scroll to About section"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}

export default Hero;