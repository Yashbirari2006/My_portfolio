import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  FileText,
  Code2,
  Sparkles,
  BriefcaseBusiness,
  Bot,
  Layers3,
} from "lucide-react";

type Opportunity = {
  title: string;
  description: string;
  icon: typeof Code2;
};

const opportunities: Opportunity[] = [
  {
    title: "Software Developer",
    description:
      "Building practical and scalable software solutions.",
    icon: Code2,
  },
  {
    title: "Full-Stack Developer",
    description:
      "Frontend, backend, APIs and complete web experiences.",
    icon: Layers3,
  },
  {
    title: "AI & Emerging Tech",
    description:
      "Exploring AI and modern technologies through projects.",
    icon: Bot,
  },
  {
    title: "Internships & Opportunities",
    description:
      "Open to relevant roles that match my skills and interests.",
    icon: BriefcaseBusiness,
  },
];

function Contact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 sm:py-28 lg:px-8"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      {/* Cursor-following spotlight */}
      <motion.div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Animated glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]"
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sky-400" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
              Contact
            </p>
          </div>

          <div className="mt-5 max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build
              <br />

              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                what&apos;s next.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Have an opportunity, a project idea, or simply
              want to connect? I&apos;d be happy to hear from you.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT CONTACT CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-7 backdrop-blur-xl sm:p-9"
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl transition-all duration-700 group-hover:bg-sky-500/20" />

            <div className="relative z-10">

              {/* Email icon */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-400"
              >
                <Mail size={21} />
              </motion.div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Best way to reach me
              </p>

              {/* Email */}
              <a
                href="mailto:yashbirari29@gmail.com"
                className="group/email mt-2 flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-sky-300 sm:text-xl"
              >
                yashbirari29@gmail.com

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/email:-translate-y-1 group-hover/email:translate-x-1"
                />
              </a>

              {/* Location */}
              <div className="mt-8 flex items-center gap-3">
                <MapPin
                  size={17}
                  className="text-sky-400"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                    Based in
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Email CTA */}
              <motion.a
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="mailto:yashbirari29@gmail.com?subject=Portfolio%20Opportunity"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition-all duration-300 hover:bg-sky-300 hover:shadow-sky-500/20"
              >
                <Mail size={16} />

                Start a conversation

                <ArrowUpRight size={15} />
              </motion.a>

              {/* Divider */}
              <div className="my-8 h-px bg-zinc-800" />

              {/* Social heading */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Find me online
              </p>

              {/* Social links */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                {/* =================================================
                    GITHUB
                ================================================== */}

                <a
                  href="https://github.com/Yashbirari2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="group/social flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5"
                >
                  <div className="flex items-center gap-3">

                    {/* GitHub badge - no Github icon import */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-[11px] font-bold tracking-tight text-zinc-300 transition-colors group-hover/social:text-sky-300">
                      GH
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-zinc-300">
                        GitHub
                      </p>

                      <p className="text-[10px] text-zinc-600">
                        Explore my projects
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="text-zinc-700 transition-all duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5 group-hover/social:text-sky-400"
                  />
                </a>

                {/* =================================================
                    LINKEDIN
                ================================================== */}

                <a
                  href="https://www.linkedin.com/in/yashbirari2006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="group/social flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5"
                >
                  <div className="flex items-center gap-3">

                    {/* LinkedIn badge - no icon import */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-zinc-300 transition-colors group-hover/social:text-sky-300">
                      in
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-zinc-300">
                        LinkedIn
                      </p>

                      <p className="text-[10px] text-zinc-600">
                        Connect professionally
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="text-zinc-700 transition-all duration-300 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5 group-hover/social:text-sky-400"
                  />
                </a>

              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT OPPORTUNITY CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-7 backdrop-blur-xl sm:p-9"
          >

            {/* Header */}
            <div className="flex items-start justify-between gap-5">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                  Opportunities
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  What I&apos;m open to
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                  Interested in opportunities where I can contribute,
                  learn, and build meaningful products.
                </p>
              </div>

              {/* Open badge */}
              <div className="hidden shrink-0 items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 sm:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-medium text-emerald-400">
                  Open
                </span>
              </div>
            </div>

            {/* Opportunity cards */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {opportunities.map(
                (opportunity, index) => {
                  const Icon = opportunity.icon;

                  return (
                    <motion.div
                      key={opportunity.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          0.15 + index * 0.08,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group/role relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 transition-all duration-300 hover:border-sky-500/30 hover:bg-zinc-950"
                    >
                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-500/0 blur-2xl transition-all duration-500 group-hover/role:bg-sky-500/10" />

                      <div className="relative z-10">

                        <div className="flex items-center justify-between">

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-400 transition-all duration-300 group-hover/role:border-sky-500/30 group-hover/role:bg-sky-500/10">
                            <Icon size={17} />
                          </div>

                          <ArrowUpRight
                            size={14}
                            className="text-zinc-700 transition-all duration-300 group-hover/role:-translate-y-0.5 group-hover/role:translate-x-0.5 group-hover/role:text-sky-400"
                          />
                        </div>

                        <h4 className="mt-4 text-sm font-semibold text-zinc-200 transition-colors group-hover/role:text-sky-300">
                          {opportunity.title}
                        </h4>

                        <p className="mt-1.5 text-xs leading-5 text-zinc-600">
                          {opportunity.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                }
              )}

            </div>

            {/* Availability */}
            <div className="mt-7 flex items-center gap-3 border-t border-zinc-800 pt-6">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-300">
                  Currently open to opportunities
                </p>

                <p className="mt-1 text-[10px] text-zinc-600">
                  Software Developer • Full-Stack • AI & Tech Roles
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            RESUME BAR
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-5 flex flex-col items-center justify-between gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-5 sm:flex-row"
        >
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-sky-400">
              <FileText size={17} />
            </div>

            <div>
              <p className="text-xs font-medium text-zinc-300">
                Want to know more about my work?
              </p>

              <p className="mt-1 text-[10px] text-zinc-600">
                Take a look at my resume and technical journey.
              </p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/resume inline-flex shrink-0 items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-300"
          >
            View Resume

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/resume:-translate-y-0.5 group-hover/resume:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <Sparkles
              size={13}
              className="text-sky-400"
            />

            <span>
              Let&apos;s create something meaningful.
            </span>
          </div>

          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Yash Birari
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;