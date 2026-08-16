import { motion } from "framer-motion";
import type { ElementType } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Code2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

type ExperienceItem = {
  role: string;
  organization: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  icon: ElementType;
  current?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    role: "Founding Team Member & Technical Team Co-Lead",
    organization: "Apex Coding & Development Club",
    duration: "2026 — Present",
    location: "SVKM Institute of Technology, Dhule",
    description:
      "Contributing to the technical direction of a student-driven coding and development community while collaborating with the core team on technical initiatives and development-focused activities.",
    highlights: [
      "Technical leadership and team collaboration",
      "Supporting coding and development initiatives",
      "Contributing to workshops, events, and technical activities",
    ],
    icon: Code2,
    current: true,
  },
  {
    role: "Python Full Stack Developer",
    organization: "Passion Software Solution",
    duration: "Jun 2024 — Jul 2024",
    location: "Jalgaon, Maharashtra, India · On-site",
    description:
      "Completed a hands-on internship focused on Python and full-stack development, gaining practical experience in building and working with web applications.",
    highlights: [
      "Worked with Python and Django",
      "Gained practical full-stack development experience",
      "Worked on real-world software development tasks",
    ],
    icon: Code2,
  },
  {
    role: "Data Analyst",
    organization: "CSRBOX",
    duration: "Nov 2023",
    location: "Remote",
    description:
      "Completed a data analytics micro-internship with practical exposure to data analysis concepts, tools, and problem-solving workflows.",
    highlights: [
      "Worked on data analysis concepts and tasks",
      "Developed practical analytical and problem-solving skills",
      "Completed an IBM and CSRBOX micro-internship",
    ],
    icon: Sparkles,
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const Icon = experience.icon;

  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border bg-zinc-950/90 p-4 backdrop-blur-xl transition-all duration-500 sm:p-5 ${
          experience.current
            ? "border-sky-500/30 shadow-[0_20px_60px_-35px_rgba(14,165,233,0.5)]"
            : "border-zinc-800/80 hover:border-sky-500/40 hover:shadow-[0_20px_60px_-35px_rgba(14,165,233,0.35)]"
        }`}
      >
        {/* =========================================
            ALWAYS-ON RUNNING BORDER LIGHT
        ========================================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-sky-400/90 to-transparent"
          />

          <motion.div
            animate={{
              x: ["120%", "-120%"],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.2,
            }}
            className="absolute bottom-0 right-0 h-px w-1/4 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent"
          />
        </div>

        {/* Subtle animated corner glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl"
        />

        {/* Existing hover glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-500/10 blur-3xl transition-all duration-500 group-hover:bg-sky-500/20" />

        <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

        {/* Hover top line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          {/* Top row */}
          <div className="flex items-start justify-between gap-3">
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/90 text-sky-400 shadow-lg transition-all duration-300 group-hover:border-sky-500/50 group-hover:bg-sky-500/10"
            >
              <Icon size={18} />
            </motion.div>

            {experience.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>

                Current
              </span>
            )}
          </div>

          {/* Role */}
          <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-sky-300 sm:text-xl">
            {experience.role}
          </h3>

          {/* Organization */}
          <div className="mt-2 flex items-center gap-2">
            <Users
              size={14}
              className="shrink-0 text-sky-400"
            />

            <span className="text-xs font-medium text-zinc-300 sm:text-sm">
              {experience.organization}
            </span>
          </div>

          {/* Meta */}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 border-b border-zinc-800/80 pb-4">
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 sm:text-xs">
              <CalendarDays size={13} />
              {experience.duration}
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 sm:text-xs">
              <MapPin size={13} />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-xs leading-6 text-zinc-400 sm:text-sm">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="mt-4 space-y-2">
            {experience.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-2.5"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" />

                <span className="text-xs leading-5 text-zinc-400">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-zinc-800/80 pt-3">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-300 group-hover:text-sky-400">
              <Code2 size={12} />
              Experience
            </div>

            <ArrowUpRight
              size={15}
              className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 sm:py-28 lg:px-8"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[130px]"
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-sky-400" />

            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-400">
              Experience
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Growing through
                <span className="ml-2 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  building & leadership.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                A timeline of the roles, responsibilities, and
                experiences shaping my journey as a developer
                and technical leader.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs font-semibold tracking-wide text-zinc-300 lg:flex">
              <Code2
                size={14}
                className="text-sky-400"
              />

              <span>
                Learn{" "}
                <span className="text-zinc-500">•</span>{" "}
                Build{" "}
                <span className="text-zinc-500">•</span>{" "}
                Lead
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Desktop timeline */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-400/60 to-transparent" />

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-sky-400 via-cyan-400 to-violet-500 shadow-[0_0_10px_rgba(56,189,248,0.4)]"
            />
          </div>

          {/* Mobile timeline */}
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-transparent via-sky-400/60 to-transparent md:hidden" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.organization}-${experience.role}`}
                className={`relative flex w-full items-start md:justify-between ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop node */}
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                  }}
                  className="absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 md:block"
                >
                  <div className="absolute -inset-2.5 rounded-full bg-sky-400/10 blur-md" />

                  <div className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-sky-400 bg-zinc-950 shadow-[0_0_18px_rgba(56,189,248,0.5)]">
                    <div className="h-1 w-1 rounded-full bg-sky-400" />
                  </div>
                </motion.div>

                {/* Mobile node */}
                <div className="absolute left-3 top-8 z-20 -translate-x-1/2 md:hidden">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-sky-400 bg-zinc-950 shadow-[0_0_16px_rgba(56,189,248,0.5)]">
                    <div className="h-1 w-1 rounded-full bg-sky-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="w-full pl-10 md:w-[calc(50%-38px)] md:pl-0">
                  <ExperienceCard
                    experience={experience}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
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
            duration: 0.55,
          }}
          className="mt-12 border-t border-zinc-800/80 pt-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <Code2
                size={15}
                className="text-sky-400"
              />

              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 bg-clip-text font-medium text-transparent">
                Learning through every experience.
              </span>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-sky-400">
              Developer • Leader • Learner
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;