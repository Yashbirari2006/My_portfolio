import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Code2,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";
import type { ElementType, MouseEvent } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  icon: ElementType;
  featured?: boolean;
  technologies: string[];
  highlights: string[];
  gradient: string;
  github?: string;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "LegalEase",
    subtitle: "AI-Powered Legal Assistance Platform",
    description:
      "An AI-powered legal assistance platform currently in development, designed to make legal information and document interaction more accessible through intelligent workflows.",
    category: "AI • Full Stack",
    icon: ShieldCheck,
    featured: true,
    technologies: [
      "React",
      "JavaScript",
      "AI",
      "Python",
      "APIs",
    ],
    highlights: [
      "AI-assisted legal document interaction",
      "User-focused intelligent workflows",
      "Additional features currently in development",
    ],
    gradient:
      "from-sky-500/20 via-blue-500/10 to-violet-500/20",
    github:
      "https://github.com/Yashbirari2006/hack-devngers-1.0",
    live: "#",
    image: "/projects/legalease.png",
  },

  {
    title: "Gasless Pioneer",
    subtitle: "Team-Built Gasless Web3 dApp",
    description:
      "A team-built gasless decentralized application developed during Hack With Mumbai 3.0, focused on simplifying blockchain interactions.",
    category: "Web3 • Team Project",
    icon: Wallet,
    technologies: [
      "React",
      "JavaScript",
      "Base Sepolia",
      "UGF",
      "MetaMask",
    ],
    highlights: [
      "Built as a team during Hack With Mumbai 3.0",
      "Gasless blockchain transactions",
      "Wallet-based authentication",
      "Universal Gas Framework integration",
    ],
    gradient:
      "from-violet-500/20 via-fuchsia-500/10 to-sky-500/20",
    github: "#",
    live: "#",
    image: "/projects/gasless-pioneer.png",
  },
];

/* ------------------------------------------------ */
/* GitHub SVG Logo                                  */
/* ------------------------------------------------ */

function GitHubLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ------------------------------------------------ */
/* Project Icon                                     */
/* ------------------------------------------------ */

function ProjectIcon({ icon: Icon }: { icon: ElementType }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/90 text-sky-400 shadow-lg">
      <Icon size={18} />
    </div>
  );
}

/* ------------------------------------------------ */
/* Project Card                                     */
/* ------------------------------------------------ */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const spotlightX = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const spotlightY = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
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
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Outer glow */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60`}
      />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/95 backdrop-blur-xl transition-all duration-500 group-hover:border-sky-400/40">
        {/* Cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute z-20 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"
          style={{
            left: spotlightX,
            top: spotlightY,
          }}
        />

        {/* Animated top line */}
        <div className="absolute left-0 right-0 top-0 z-30 h-px overflow-hidden">
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            animate={{
              x: ["-100%", "400%"],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 p-4 sm:p-5">
          {/* Project Image */}
          <div className="relative mb-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <div className="relative h-40 overflow-hidden sm:h-44">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={`${project.title} homepage preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent" />

                  {/* Image shine */}
                  <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[130%]" />
                </>
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-sky-500/10 via-zinc-900 to-violet-500/10">
                  <ProjectIcon icon={project.icon} />
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute right-3 top-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider backdrop-blur-xl ${
                    project.featured
                      ? "border-sky-400/30 bg-zinc-950/90 text-sky-300"
                      : "border-violet-400/30 bg-zinc-950/90 text-violet-300"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.featured
                        ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                        : "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.9)]"
                    }`}
                  />

                  {project.featured
                    ? "In Development"
                    : "Team Project"}
                </span>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-5 bg-sky-400 transition-all duration-300 group-hover:w-8" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-400">
              {project.category}
            </span>
          </div>

          {/* Title + Links */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-300">
                {project.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-zinc-500">
                {project.subtitle}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
              {/* GitHub */}
              {project.github &&
                project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    title="View GitHub repository"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    <GitHubLogo />
                  </a>
                )}

              {/* Live */}
              {project.live &&
                project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live project`}
                    title="View live project"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    <ExternalLink
                      size={15}
                      strokeWidth={2}
                    />
                  </a>
                )}

              <ArrowUpRight
                size={16}
                className="ml-0.5 text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
              />
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-xs leading-6 text-zinc-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500 transition-all duration-300 hover:border-sky-500/40 hover:bg-sky-500/5 hover:text-sky-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>

          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between border-t border-zinc-800/80 pt-4">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-300 group-hover:text-sky-400">
              <Code2 size={12} />
              Project
            </div>

            <Sparkles
              size={13}
              className="text-zinc-700 transition-all duration-500 group-hover:rotate-12 group-hover:text-sky-400"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------ */
/* Projects Section                                 */
/* ------------------------------------------------ */

function Projects() {
  return (
    <section
      id="projects"
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
              Projects
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Things I&apos;ve
                <span className="ml-2 bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  built.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                A selection of projects exploring software
                development, AI, Web3, and emerging
                technologies.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-zinc-600 lg:flex">
              <Zap
                size={14}
                className="text-sky-400"
              />

              Build • Experiment • Learn
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          style={{
            perspective: "1000px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub Profile */}
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
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://github.com/Yashbirari2006"
            target="_blank"
            rel="noopener noreferrer"
            className="group/github inline-flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5 hover:text-sky-300"
          >
            <span className="transition-transform duration-300 group-hover/github:rotate-12">
              <GitHubLogo />
            </span>

            <span>View more on GitHub</span>

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;