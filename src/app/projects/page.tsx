import Link from "next/link";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import AboutCursorGlow from "@/components/AboutCursorGlow";
import Image from "next/image";

const sections = [
  { id: "featured-project", label: "Featured Project" },
  { id: "other-projects", label: "Other Projects" },
  { id: "project-approach", label: "My Approach" },
];

const otherProjects = [
  {
    number: "02",
    category: "INTERNSHIP · WEB APPLICATION",
    title: "Internal Applications at PT KAI",
    image: "/images/projects/kai-website.png",
    description:
      "Contributed to internal applications for the IT division, focusing on interface improvements, backend fixes, and application maintenance.",
    role: [
      "Improved UI consistency and fixed backend issues",
      "Discussed requirements with stakeholders",
      "Prepared documentation and supported user training",
    ],
    challenge:
      "Working with existing application code and aligning changes with operational requirements.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    icon: "material-symbols:database-outline",
    accent: "from-rose-400/20 via-pink-500/5 to-transparent",
    type: "Internal application",
  },
  // {
  //   number: "03",
  //   category: "ACADEMIC · TEAM PROJECT",
  //   title: "Village Profile Website",
  //   image: null,
  //   description:
  //     "A group project to build a village profile website, with a Next.js frontend and a Laravel backend.",
  //   role: [
  //     "Participated in a collaborative web development project",
  //     "Worked within a frontend and backend architecture",
  //   ],
  //   challenge:
  //     "Understanding how separate frontend and backend applications work together. My contribution to this project was limited, so I present it as a team project rather than an individual achievement.",
  //   technologies: ["Next.js", "Laravel", "PHP"],
  //   icon: "material-symbols:location-city-outline",
  //   accent: "from-violet-400/20 via-fuchsia-500/5 to-transparent",
  //   type: "Team project",
  // },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7d83]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function TechTag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/65">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof otherProjects)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/30 transition duration-300 hover:-translate-y-1 hover:border-[#ff7d83]/40">
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_55%)]" />
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot ${project.title}`}
              width={1451}
              height={847}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
              <Icon icon={project.icon} className="text-[#ff9ba0]" width={38} />
            </div>
          )}

        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-white/60">
          {project.type}
        </span>

        <span className="absolute bottom-3 left-4 font-mono text-xs text-black/30">
          PROJECT_{project.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff7d83]">
          {project.category}
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/55">
          {project.description}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">
            My contribution
          </h4>
          <ul className="mt-3 space-y-2">
            {project.role.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-5 text-white/55"
              >
                <Icon
                  icon="material-symbols:arrow-right-alt-rounded"
                  className="mt-0.5 shrink-0 text-[#ff7d83]"
                  width={17}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.025] p-3">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/80">
            Technical challenge
          </p>
          <p className="text-xs leading-5 text-white/55">{project.challenge}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollIndicator sections={sections} />

      <main
        id="main-scroll"
        className="fixed inset-y-0 left-[78px] right-0 overflow-y-auto bg-black pt-4 pr-4 [scrollbar-gutter:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-[78px] right-0 top-0 z-10 h-4 bg-black"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 left-[78px] right-7 top-4 rounded-t-[16px] bg-linear-to-b from-[#8b3f42] to-[#150607]"
        />
        <AboutCursorGlow />

        <div className="relative mr-7 min-h-full px-8 py-10 sm:px-14 lg:px-20">
          {/* Page heading */}
          <header className="mb-14 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff7d83]">
              SELECTED WORK
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Projects<span className="text-[#ff7d83]">.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              A collection of projects and practical experiences that reflect my
              journey in software development, from backend logic and data
              processing to web applications.
            </p>
          </header>

          {/* Featured project */}
          <section id="featured-project" className="mb-20 scroll-mt-10">
            <SectionHeading
              eyebrow="01 / Featured Project"
              title="Built to solve a real problem."
              description="My final project combines rule-based text processing with natural language processing to detect and correct Indonesian punctuation errors."
            />

            <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Project screenshot */}
                <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 bg-[#0b0b0b] p-4 sm:p-7 lg:min-h-full lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,125,131,0.10),transparent_65%)]" />

                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#151515] shadow-2xl">
                    <Image
                      src="/images/projects/correction-result.png"
                      alt="Screenshot aplikasi koreksi tanda baca Bahasa Indonesia"
                      width={1332}
                      height={853}
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>

                  <p className="relative mt-4 text-center text-[10px] text-white/40">
                    Indonesian Punctuation Correction Web Application
                  </p>
                </div>

                {/* Project details */}
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[#ff7d83]/20 bg-[#ff7d83]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#ff9ba0]">
                      Final Project
                    </span>
                    <span className="text-xs text-white/35">
                      Python · NLP · Backend
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Indonesian Punctuation Detection & Correction
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    A web application that detects and corrects Indonesian
                    punctuation errors in academic DOCX documents based on EYD
                    V, using regular expressions, linguistic rules, and
                    part-of-speech tagging.
                  </p>

                  <div className="mt-7">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Key features
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {[
                        "DOCX text extraction and normalization",
                        "Rule-based punctuation error detection",
                        "POS tagging to support contextual analysis",
                        "Highlights of detected errors and correction results",
                        "Background document processing with job status tracking",
                      ].map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-5 text-white/60"
                        >
                          <Icon
                            icon="material-symbols:check-circle-outline-rounded"
                            className="mt-0.5 shrink-0 text-[#ff7d83]"
                            width={17}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Technical challenge
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Designing punctuation rules that distinguish actual errors
                      from valid writing patterns, while reducing false
                      positives through contextual POS information.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Tech stack
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Flask",
                        "Stanza",
                        "Regex",
                        "SQLAlchemy",
                        "MySQL",
                        "python-docx",
                      ].map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <a
                      href="https://github.com/selena2355/indonesian_punctuation_correction"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#ff7d83] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#ff9ba0]"
                    >
                      <Icon icon="mdi:github" width={18} />
                      View Repository
                      <Icon
                        icon="material-symbols:arrow-outward-rounded"
                        width={16}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Other projects */}
          <section id="other-projects" className="mb-20 scroll-mt-10">
            <SectionHeading
              eyebrow="02 / Other Projects"
              title="More experience, more perspective."
              description="Other development experiences that helped me understand existing systems, collaborative development, and practical software requirements."
            />

            <div className="grid gap-5 md:grid-cols-2 ">
              {otherProjects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </section>

          {/* Approach */}
          <section
            id="project-approach"
            className="mb-10 scroll-mt-10 rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff7d83]">
              03 / My Approach
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Beyond writing code.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
              I approach software development by understanding the problem,
              breaking it into manageable parts, and building solutions that are
              practical to maintain and improve.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: "material-symbols:target",
                  title: "Understand",
                  description:
                    "Identify requirements, user needs, and the problem a system should solve.",
                },
                {
                  icon: "material-symbols:account-tree-outline",
                  title: "Build",
                  description:
                    "Translate requirements into application logic, data structures, and maintainable code.",
                },
                {
                  icon: "material-symbols:sync-rounded",
                  title: "Improve",
                  description:
                    "Test behavior, investigate issues, and refine solutions based on results.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                    <Icon
                      icon={item.icon}
                      width={22}
                      className="text-[#ff7d83]"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff9ba0] transition hover:text-white"
              >
                Let&apos;s connect
                <Icon
                  icon="material-symbols:arrow-forward-rounded"
                  width={18}
                />
              </Link>
            </div>
          </section>

          <footer className="pb-5 pt-2 text-center text-[11px] text-white/25">
            SELENA · PROJECTS
          </footer>
        </div>
      </main>
    </div>
  );
}
