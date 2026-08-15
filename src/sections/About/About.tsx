import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cloud,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "3rd",
    label: "Year IT Student",
    icon: GraduationCap,
  },
  {
    value: "Full-Stack Developer",
   
    icon: Code2,
  },
  
   {
  value: "Founding Team Member & Technical Team Co-Lead",
  label: "at Apex Coding & Development Club",
  icon: Users,

  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-28 dark:bg-zinc-950 sm:py-36 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-20 -z-0 h-80 w-80 rounded-full bg-sky-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 -z-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sky-500" />

            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-500">
              About me
            </p>
          </div>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
            Building practical solutions.
            <br />
            <span className="text-zinc-400">
              Exploring what&apos;s next.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            A developer who enjoys turning ideas into useful products while
            continuously learning and growing.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm transition-all duration-300 hover:border-sky-300/70 hover:shadow-[0_20px_70px_-30px_rgba(14,165,233,0.4)] dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-sky-500/30 sm:p-10"
          >
            {/* Hover Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-600 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    B.Tech in Information Technology
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                    Hi, I&apos;m Yash Birari.
                  </h3>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.05,
                  }}
                  className="hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 sm:block"
                >
                  <Sparkles size={21} className="text-sky-500" />
                </motion.div>
              </div>

              {/* About Text */}
              <div className="mt-7 space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
                <p>
                  I&apos;m Yash Birari, a third-year Information Technology
                  student at SVKM Institute of Technology, Dhule, with a
                  strong interest in software development and emerging
                  technologies. I enjoy building practical, user-focused
                  applications and turning ideas into working solutions
                  through code.
                </p>

                <p>
                  My primary focus is on full-stack development, where I enjoy building practical and user-focused applications. I work with technologies such as Java, Python, React, and JavaScript, while continuously exploring AI and cloud technologies to expand my development capabilities. I enjoy turning ideas into working solutions and applying what I learn through personal projects, hackathons, and hands-on development experiences.
                </p>

                <p>
                  Beyond development, I&apos;m a{" "}
                  <span className="font-semibold text-zinc-950 dark:text-white">
                    Founding Team Member &amp; Technical Team Co-Lead at Apex
                    Coding &amp; Development Club
                  </span>
                  , where I contribute to technical initiatives, collaborate
                  with the core team, and help organize and support
                  development-focused activities. I enjoy working with people,
                  sharing knowledge, and taking on challenges that help me grow
                  both as a developer and a leader.
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="#projects"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 dark:text-white"
              >
                Explore my work

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors duration-200 group-hover:bg-sky-500 dark:bg-white dark:text-zinc-950 dark:group-hover:bg-sky-500 dark:group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-300/70 hover:shadow-[0_18px_60px_-30px_rgba(14,165,233,0.45)] dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-sky-500/30"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-800">
                      <Icon size={20} className="text-sky-500" />
                    </div>

                    <span className="text-xs font-medium text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <p className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm leading-5 text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400"
        >
          <Cloud size={16} className="text-sky-500" />
          <span>Learning continuously. Building consistently.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;