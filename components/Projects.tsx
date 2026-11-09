// Projects v1.2 — Motion Lab Showcase

"use client";

import { motion } from "framer-motion";

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  metric?: string;
  metricLabel?: string;
  focus?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Regression & Data Recovery",
    subtitle: "Statistical Analysis Project",
    description:
      "Applied regression analysis and data recovery techniques to improve dataset completeness using R and Excel.",
    technologies: ["R", "Excel", "Regression", "Statistics"],
    metric: "74.16% → 97.72%",
    metricLabel: "Dataset completeness",
  },
  {
    number: "02",
    title: "Finance Dashboard",
    subtitle: "Financial Data Interface",
    description:
      "Designed an interactive dashboard for accounts, transactions, subscriptions, and financial information.",
    technologies: [
      "React",
      "JavaScript",
      "Dashboard",
      "Visualization",
    ],
    focus: "Data × Finance",
  },
  {
    number: "03",
    title: "Motion Lab",
    subtitle: "Generative Art & 3D Web Experience",
    description:
      "An experimental digital gallery where code becomes motion. Built as a collection of interactive generative-art experiments using particles, procedural animation, and real-time 3D rendering in the browser.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
    ],
    focus: "3D × Motion × Web",
    liveUrl: "https://motion-lab-liard-eight.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        px-5
        py-24
        sm:px-8
        md:px-12
        md:py-32
        lg:px-24
      "
    >
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
        04 / Projects
      </p>

      <h2 className="mt-6 text-4xl font-semibold sm:text-5xl md:text-6xl">
        Selected work.
      </h2>

      <div className="mt-14 space-y-6 md:mt-20 md:space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{
              opacity: 0,
              y: 35,
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
              delay: index * 0.08,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              rounded-[1.75rem]
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-5
              transition
              duration-300
              hover:border-cyan-300/20
              hover:bg-white/[0.04]
              sm:p-7
              md:p-10
              lg:p-12
            "
          >
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              {/* Left side */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {project.number} / {project.subtitle}
                </p>

                <h3 className="mt-5 text-2xl font-medium sm:text-3xl md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        px-3
                        py-1.5
                        text-xs
                        text-white/45
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="mt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-black
                        transition
                        duration-300
                        hover:scale-[1.03]
                      "
                    >
                      Live experience
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right side */}
              <div
                className="
                  flex
                  min-h-[160px]
                  flex-col
                  justify-center
                  rounded-3xl
                  border
                  border-white/[0.06]
                  bg-black/20
                  p-5
                  sm:p-7
                "
              >
                {project.metric ? (
                  <>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      {project.metricLabel}
                    </p>

                    <p className="mt-4 text-3xl font-medium text-cyan-300 sm:text-4xl">
                      {project.metric}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Project focus
                    </p>

                    <p className="mt-4 text-xl text-white/70 sm:text-2xl">
                      {project.focus}
                    </p>
                  </>
                )}

                {project.liveUrl && (
                  <div className="mt-8 border-t border-white/[0.06] pt-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/20">
                      Live project
                    </p>

                    <p className="mt-2 text-sm text-cyan-300">
                      Available online ↗
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}