import { useState, type ElementType } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Brain,
  Code2,
  Crown,
  Database,
  Lightbulb,
  Network,
  Sparkles,
  Users,
} from "lucide-react";

import {
  SiCplusplus,
  SiDjango,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiGooglecloud,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaJava,
} from "react-icons/fa6";

type Category =
  | "All"
  | "Programming"
  | "Web Development"
  | "Data & Problem Solving"
  | "Development"
  | "Emerging Technologies"
  | "Core Strengths";

type Skill = {
  name: string;
  icon: ElementType;
  color?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  icon: ElementType;
  skills: Skill[];
};

const categories: Category[] = [
  "All",
  "Programming",
  "Web Development",
  "Data & Problem Solving",
  "Development",
  "Emerging Technologies",
  "Core Strengths",
];

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    description:
      "Languages I use to build logic and solve problems.",
    category: "Programming",
    icon: Code2,
    skills: [
      {
        name: "C",
        icon: Code2,
        color: "#A8B9CC",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#F89820",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],
  },

  {
    title: "Web Development",
    description:
      "Technologies for creating modern web experiences.",
    category: "Web Development",
    icon: Network,
    skills: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "#44B78B",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
    ],
  },

  {
    title: "Data & Problem Solving",
    description:
      "Core technical foundations behind effective solutions.",
    category: "Data & Problem Solving",
    icon: Database,
    skills: [
      {
        name: "Data Structures",
        icon: Database,
        color: "#60A5FA",
      },
      {
        name: "Algorithms",
        icon: Brain,
        color: "#A78BFA",
      },
      {
        name: "Problem Solving",
        icon: Lightbulb,
        color: "#FACC15",
      },
    ],
  },

  {
    title: "Development",
    description:
      "Building complete and user-focused software solutions.",
    category: "Development",
    icon: SiGit,
    skills: [
      {
        name: "Full-Stack Development",
        icon: Code2,
        color: "#38BDF8",
      },
      {
        name: "Web Development",
        icon: Network,
        color: "#22D3EE",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
    ],
  },

  {
    title: "Emerging Technologies",
    description:
      "Exploring modern technologies and intelligent systems.",
    category: "Emerging Technologies",
    icon: Sparkles,
    skills: [
      {
        name: "Generative AI",
        icon: Brain,
        color: "#10A37F",
      },
      {
        name: "AI",
        icon: Brain,
        color: "#8B5CF6",
      },
      {
        name: "Cloud Technologies",
        icon: SiGooglecloud,
        color: "#4285F4",
      },
      {
        name: "Emerging Technologies",
        icon: Sparkles,
        color: "#38BDF8",
      },
    ],
  },

  {
    title: "Core Strengths",
    description:
      "The qualities I bring to projects and teams.",
    category: "Core Strengths",
    icon: Crown,
    skills: [
      {
        name: "Problem Solving",
        icon: Lightbulb,
        color: "#FACC15",
      },
      {
        name: "Collaboration",
        icon: Users,
        color: "#60A5FA",
      },
      {
        name: "Leadership",
        icon: Crown,
        color: "#A78BFA",
      },
    ],
  },
];

function SkillChip({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -4,
        scale: 1.04,
      }}
      className="group/skill relative flex cursor-default items-center gap-2.5 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/70 px-3.5 py-2.5 transition-all duration-300 hover:border-sky-500/50 hover:bg-zinc-800 hover:shadow-[0_8px_25px_-12px_rgba(14,165,233,0.7)]"
    >
      {/* Icon */}
      <motion.span
        whileHover={{
          rotate: 8,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-900 shadow-sm"
      >
        <Icon
          size={17}
          style={{
            color: skill.color,
          }}
        />
      </motion.span>

      {/* Skill name */}
      <span className="text-xs font-medium text-zinc-300 transition-colors duration-300 group-hover/skill:text-white sm:text-sm">
        {skill.name}
      </span>

      {/* Small hover glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100"
        style={{
          background: `radial-gradient(
            80px circle at 20% 50%,
            ${skill.color ?? "#38BDF8"}18,
            transparent 70%
          )`,
        }}
      />
    </motion.div>
  );
}

function SkillGroupCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const GroupIcon = group.icon;

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x:
        ((event.clientX - rect.left) / rect.width) *
        100,
      y:
        ((event.clientY - rect.top) / rect.height) *
        100,
    });
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 30,
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
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[1.8rem] border border-zinc-800/80 bg-zinc-950/80 p-6 shadow-sm transition-all duration-500 hover:border-sky-500/40 hover:shadow-[0_25px_80px_-35px_rgba(14,165,233,0.55)] sm:p-7"
    >
      {/* Mouse-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            260px circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(56,189,248,0.12),
            transparent 70%
          )`,
        }}
      />

      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-violet-500/0 opacity-0 transition-opacity duration-500 group-hover:from-sky-500/10 group-hover:via-blue-500/5 group-hover:to-violet-500/10 group-hover:opacity-100" />

      {/* Corner glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Card header */}
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 text-zinc-300 transition-all duration-300 group-hover:border-sky-500/40 group-hover:bg-sky-500/10 group-hover:text-sky-400"
          >
            <GroupIcon size={21} />
          </motion.div>

          <span className="text-xs font-medium tracking-wider text-sky-400/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
          {group.title}
        </h3>

        {/* Description */}
        <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
          {group.description}
        </p>

        {/* Skills */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {group.skills.map(
            (skill, skillIndex) => (
              <SkillChip
                key={`${group.title}-${skill.name}`}
                skill={skill}
                index={skillIndex}
              />
            )
          )}
        </div>

        {/* Bottom category */}
        <div className="mt-7 flex items-center justify-between border-t border-zinc-800 pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-400 transition-all duration-300 group-hover:text-sky-300 group-hover:[text-shadow:0_0_12px_rgba(56,189,248,0.45)]">
            {group.category}
          </span>

          <ArrowUpRight
            size={16}
            className="text-sky-400 opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredGroups =
    activeCategory === "All"
      ? skillGroups
      : skillGroups.filter(
          (group) =>
            group.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-zinc-950 px-6 py-28 sm:py-36 lg:px-8"
    >
      {/* Animated blue background */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-sky-500/8 blur-[140px]"
      />

      {/* Animated violet background */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-500/8 blur-[150px]"
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
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
            <span className="h-px w-8 bg-sky-500" />

            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-400">
              Skills
            </p>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tools I use to
                <br />

                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  build what matters.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                A growing technical toolkit shaped
                through academics, projects, hackathons,
                and hands-on development.
              </p>
            </div>

            <div className="hidden items-center gap-3 text-sm text-zinc-500 lg:flex">
              <Sparkles
                size={17}
                className="text-sky-400"
              />

              <span>
                Always learning. Always building.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
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
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-12 flex gap-2 overflow-x-auto pb-3 scrollbar-none"
        >
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`relative whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-sky-400/40 bg-sky-400 text-zinc-950 shadow-[0_0_25px_rgba(56,189,248,0.25)]"
                    : "border-zinc-800 bg-zinc-900/70 text-zinc-400 hover:border-sky-500/40 hover:text-sky-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Skill cards */}
        <motion.div
          layout
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredGroups.map(
            (group, index) => (
              <SkillGroupCard
                key={group.title}
                group={group}
                index={index}
              />
            )
          )}
        </motion.div>

        {/* Bottom statement */}
        
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-12 flex flex-col items-center justify-center text-center"
>
  <p className="text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
    Learning continuously. Building consistently.
  </p>

  <p className="mt-2 bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl">
    Growing every day
  </p>

  <div className="mt-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
    <span className="h-px w-8 bg-sky-500/50" />
    <span>Learn • Build • Lead</span>
    <span className="h-px w-8 bg-violet-500/50" />
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default Skills;