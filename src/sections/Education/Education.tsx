
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  School,
  CalendarDays,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "SVKM's Institute of Technology, Dhule",
    duration: "2025 – 2028",
    status: "Currently in 3rd Year",
    description:
      "Pursuing a B.Tech in Information Technology with a strong interest in software development, AI, cloud technologies, and building practical applications.",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Diploma in Engineering",
    field: "Information Technology",
    institution: "Government Polytechnic, Jalgaon",
    duration: "2022 – 2025",
    status: "83.75% · First Class With Distinction",
    description:
      "Completed a Diploma in Information Technology with a strong foundation in programming, software development, and core computer science concepts.",
    icon: Award,
    current: false,
  },
  {
    degree: "Maharashtra SSC",
    field: "Secondary School Certificate",
    institution: "A.B. Boys High School, Chalisgaon",
    duration: "2021 – 2022",
    status: "92.60% · First Class With Distinction",
    description:
      "Completed secondary education with distinction and developed an early interest in technology and computer science.",
    icon: School,
    current: false,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-zinc-950 px-6 py-28 sm:py-36 lg:px-8"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-px bg-sky-500"
            />

            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-500">
              Education
            </p>
          </div>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learning that shaped
            <br />
            <span className="text-zinc-400">the way I build.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            My academic journey from secondary education to Information
            Technology, building the foundation behind my development journey.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mt-16">
          {/* Animated Timeline Line - Desktop */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-4rem)] w-px bg-zinc-800 md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="h-full w-full origin-top bg-gradient-to-b from-sky-500 via-sky-500/60 to-violet-500/30"
            />
          </div>

          <div className="space-y-6">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Dot / Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 220,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 shadow-[0_0_25px_rgba(14,165,233,0.08)] md:flex"
                  >
                    <Icon size={22} className="text-sky-500" />

                    {/* Small animated ring */}
                    <motion.span
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: index * 0.4,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-2xl border border-sky-500/40"
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-7 shadow-sm transition-all duration-300 hover:border-sky-500/30 hover:shadow-[0_20px_70px_-30px_rgba(14,165,233,0.35)] sm:p-9"
                  >
                    {/* Animated Hover Glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl"
                    />

                    {/* Top Shine Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.45 }}
                      className="absolute left-8 right-8 top-0 h-px origin-left bg-gradient-to-r from-transparent via-sky-500 to-transparent"
                    />

                    <div className="relative">
                      {/* Mobile Icon + Number */}
                      <div className="flex items-center justify-between md:hidden">
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800">
                          <Icon size={20} className="text-sky-500" />

                          <motion.span
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.4, 0, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.4,
                            }}
                            className="absolute inset-0 rounded-xl border border-sky-500/30"
                          />
                        </div>

                        <span className="text-xs font-medium text-zinc-500">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Top Row */}
                      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between md:mt-0">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-sky-900/50 bg-sky-950/40 px-3 py-1.5 text-xs font-medium text-sky-400">
                              {item.current ? (
                                <>
                                  <motion.span
                                    animate={{
                                      scale: [1, 1.4, 1],
                                      opacity: [1, 0.5, 1],
                                    }}
                                    transition={{
                                      duration: 1.8,
                                      repeat: Infinity,
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-sky-500"
                                  />
                                  Currently Studying
                                </>
                              ) : (
                                "Completed"
                              )}
                            </span>
                          </div>

                          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            {item.degree}
                          </h3>

                          <p className="mt-1 text-lg font-medium text-sky-400">
                            {item.field}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-400">
                          <CalendarDays
                            size={16}
                            className="text-sky-500"
                          />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="mt-6 flex items-start gap-2 text-sm text-zinc-400">
                        <MapPin
                          size={17}
                          className="mt-0.5 shrink-0 text-sky-500"
                        />

                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
                        {item.description}
                      </p>

                      {/* Result / Status */}
                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        className="mt-6 inline-flex rounded-xl border border-zinc-700 bg-zinc-800/70 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-300 group-hover:border-zinc-600"
                      >
                        {item.status}
                      </motion.div>
                    </div>
                  </motion.div>
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
          className="mt-10 flex items-center gap-3 text-sm text-zinc-400"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GraduationCap size={17} className="text-sky-500" />
          </motion.div>

          <span>
            Growing through learning, experience, and continuous exploration.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
