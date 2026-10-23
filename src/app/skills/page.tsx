import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import AboutCursorGlow from "@/components/AboutCursorGlow";

const skillGroups = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Building application logic, handling data, and implementing server-side functionality.",
    icon: "material-symbols:terminal-rounded",
    featured: true,
    skills: [
      { name: "Python", icon: "material-symbols:code-rounded" },
      { name: "Flask", icon: "material-symbols:deployed-code-rounded" },
      { name: "PHP", icon: "material-symbols:code-blocks-rounded" },
      { name: "Laravel", icon: "material-symbols:layers-rounded" },
      // { name: "REST API", icon: "material-symbols:api-rounded" },
      { name: "Regex", icon: "material-symbols:find-replace-rounded" },
    ],
  },
  {
    number: "02",
    title: "Database & Data",
    description: "Working with relational databases and structured data.",
    icon: "material-symbols:database-rounded",
    featured: false,
    skills: [
      { name: "MySQL", icon: "material-symbols:database-rounded" },
      { name: "SQL", icon: "material-symbols:table-chart-rounded" },
      { name: "Database Design", icon: "material-symbols:schema-rounded" },
    ],
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Creating web interfaces and connecting them with application functionality.",
    icon: "material-symbols:web-rounded",
    featured: false,
    skills: [
      { name: "HTML", icon: "material-symbols:html-rounded" },
      { name: "CSS", icon: "material-symbols:css-rounded" },
      { name: "JavaScript", icon: "material-symbols:javascript-rounded" },
    ],
  },
];

const tools = [
  { name: "Git", icon: "mdi:git" },
  { name: "GitHub", icon: "mdi:github" },
  { name: "Microsoft Excel", icon: "vscode-icons:file-type-excel" },
  { name: "Microsoft Office", icon: "mdi:microsoft-office" },
];

const professionalSkills = [
  {
    name: "Problem Solving",
    icon: "material-symbols:psychology-outline-rounded",
  },
  {
    name: "Debugging",
    icon: "material-symbols:bug-report-outline-rounded",
  },
  {
    name: "Team Collaboration",
    icon: "material-symbols:groups-outline-rounded",
  },
  {
    name: "Communication",
    icon: "material-symbols:forum-outline-rounded",
  },
  {
    name: "Documentation",
    icon: "material-symbols:description-outline-rounded",
  },
  {
    name: "Customer Service",
    icon: "material-symbols:support-agent-rounded",
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollIndicator
        sections={[
          { id: "skills-overview", label: "Skills Overview" },
          { id: "technical-skills", label: "Technical Skills" },
          { id: "tools", label: "Tools" },
          { id: "professional-skills", label: "Professional Skills" },
        ]}
      />

      <main
        id="main-scroll"
        className="fixed inset-y-0 left-[78px] right-0 overflow-y-auto bg-black pt-4 pr-4 [scrollbar-gutter:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-[78px] right-0 top-0 z-30 h-4 bg-black"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 left-[78px] right-7 top-4 rounded-t-[16px] bg-linear-to-b from-[#8b3f42] to-[#150607]"
        />
        <AboutCursorGlow />

        <div className="relative z-10 mr-7 min-h-full px-8 py-10 sm:px-14 lg:px-20">
          {/* ==================== HERO ==================== */}

          <section id="skills-overview" className="mb-16 scroll-mt-10">
            <div className="w-full max-w-6xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff7d83]">
                Skills & Expertise
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                What I bring
                <br />
                <span className="text-[#ff7d83]">to the table.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#d9bfc1] sm:text-lg">
                Technologies and skills I use to build, maintain, and improve
                applications, with a growing focus on backend development and
                reliable software solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#technical-skills"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ff7d83] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#ff9ba0]"
                >
                  Explore Skills
                  <Icon
                    icon="material-symbols:arrow-downward-rounded"
                    width={18}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* ==================== TECHNICAL SKILLS ==================== */}

          <section id="technical-skills" className="mb-16 scroll-mt-12">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff7d83]">
                01 / Technical Skills
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Technologies I work with.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#d9bfc1]">
                A selection of programming languages, frameworks, and
                technologies I have used in academic and practical projects.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.number}
                  className={`rounded-2xl border p-6 sm:p-8 ${
                    group.featured
                      ? "border-white/10 bg-black/30 lg:col-span-2"
                      : "border-white/10 bg-black/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                      <Icon
                        icon={group.icon}
                        className="text-[#ff7d83]"
                        width={25}
                      />
                    </div>

                    <span className="text-sm font-medium text-white/30">
                      {group.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#d9bfc1]">
                    {group.description}
                  </p>

                  <div
                    className={`mt-6 grid grid-cols-2 gap-3 ${
                      group.featured ? "lg:grid-cols-6" : "sm:grid-cols-3"
                    }`}
                  >
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex min-h-[88px] flex-col items-start justify-center gap-3 rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-[#ff7d83]/40"
                      >
                        <Icon
                          icon={skill.icon}
                          className="text-[#ff7d83]"
                          width={24}
                        />
                        <span className="text-sm font-medium text-[#ffe4e5]">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== TOOLS ==================== */}

          <section id="tools" className="mb-16 scroll-mt-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff7d83]">
                02 / Tools & Technologies
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Tools behind the work.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#d9bfc1]">
                Tools that support my development workflow and day-to-day tasks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-4 transition hover:border-[#ff7d83]/40 sm:p-5"
                >
                  <Icon
                    icon={tool.icon}
                    className="shrink-0 text-[#ff7d83]"
                    width={26}
                  />
                  <span className="text-sm font-medium text-[#ffe4e5]">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== PROFESSIONAL SKILLS ==================== */}

          <section id="professional-skills" className="mb-16 scroll-mt-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff7d83]">
                03 / Professional Skills
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Beyond the code.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#d9bfc1]">
                Skills developed through software projects, internships, and
                customer-facing roles.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {professionalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-5 transition hover:border-[#ff7d83]/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff7d83]/10">
                    <Icon
                      icon={skill.icon}
                      className="text-[#ff7d83]"
                      width={23}
                    />
                  </div>

                  <span className="font-medium text-[#ffe4e5]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== CLOSING ==================== */}

          <section className="rounded-2xl border border-[#ff7d83]/20 bg-[#ff7d83]/[0.04] mb-16 p-8 sm:p-10">
            <Icon
              icon="material-symbols:trending-up-rounded"
              className="text-[#ff7d83]"
              width={30}
            />

            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Always learning, always building.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#d9bfc1]">
              I continue to strengthen my technical foundations and explore
              better ways to build useful, maintainable, and reliable
              applications.
            </p>
          </section>
          <footer className="pb-5 py-6 text-center text-[11px] text-white/25">
            SELENA · SKILLS
          </footer>
        </div>
      </main>
    </div>
  );
}
