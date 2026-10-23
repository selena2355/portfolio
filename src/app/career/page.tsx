import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import AboutCursorGlow from "@/components/AboutCursorGlow";

const sections = [
  { id: "career-overview", label: "Overview" },
  { id: "professional-experience", label: "Professional Experience" },
];


const experiences = [
  {
    number: "01",
    role: "Administrative Assistant",
    company: "PT Cerdas Berpikir Indonesia (CABI)",
    period: "Aug 2026 – Present",
    type: "Full-time . Hybrid",
    category: "ADMINISTRATION & CUSTOMER SERVICE",
    icon: "material-symbols:calendar-month-outline-rounded",
    featured: true,
    description:
      "Support daily administrative operations for a swimming course by coordinating with customers and instructors, managing schedules, and maintaining payment records.",
    responsibilities: [
      "Communicate with customers and instructors about inquiries, schedules, and confirmations",
      "Handle customer inquiries, payment reminders, and complaints through online communication channels",
      "Record customer payment status and maintain administrative records",
      "Coordinate schedules and information to support daily operations",
    ],
    skills: [
      "Administration",
      "Customer Service",
      "Communication",
      "Scheduling",
      "Data Entry",
    ],
  },
  {
    number: "02",
    role: "Software Developer Intern",
    company: "PT Kereta Api Indonesia (Persero)",
    period: "Jan 2025 – Jun 2025",
    type: "Internship · Hybrid",
    category: "SOFTWARE DEVELOPMENT",
    icon: "material-symbols:terminal-rounded",
    featured: true,
    description:
      "Contributed to internal web applications for the IT division, particularly the Budget Plan (RAB) Management System built with Laravel.",
    responsibilities: [
      "Debugged and improved CRUD features and data presentation",
      "Worked on product catalog and master data modules supporting the RAB workflow",
      "Improved Excel and PDF document generation and output formatting",
      "Assisted with the IT division profile website and collaborated with team members to troubleshoot issues",
    ],
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "Debugging",
      "Web Development",
      "Team Collaboration",
    ],
  },
  {
    number: "03",
    role: "Live Stream Host",
    company: "Studio MDG Fashion",
    period: "Dec 2024 – Jun 2026",
    type: "Part-time · On-Site",
    category: "COMMUNICATION & SALES",
    icon: "material-symbols:videocam-outline-rounded",
    featured: false,
    description:
      "Hosted live-streaming sessions to introduce products, answer viewer questions, and maintain audience engagement.",
    responsibilities: [
      "Presented products and communicated product information to viewers",
      "Responded to questions and interacted with the audience during live sessions",
      "Supported product promotion through clear and engaging presentations",
    ],
    skills: [
      "Public Speaking",
      "Product Presentation",
      "Audience Engagement",
      "Communication",
    ],
  },
  {
    number: "04",
    role: "Customer Service",
    company: "CV Duta Cipta Electrindo (Samsung Service Center)",
    period: "Jun 2024 – Aug 2024",
    type: "Full-time · On-Site",
    category: "CUSTOMER SERVICE & PROCESS IMPROVEMENT",
    icon: "material-symbols:support-agent-rounded",
    featured: false,
    description:
      "Assisted customers with repair consultations and cost estimates while developing an Excel-based calculator to support repair-price calculations.",
    responsibilities: [
      "Provided repair consultations and estimated service costs",
      "Calculated estimates using product prices, tax rates, profit margins, and service fees",
      "Created an Excel-based calculator to automate parts of the estimation process",
      "Communicated with customers and technicians to clarify repair information",
    ],
    skills: [
      "Customer Service",
      "Microsoft Excel",
      "Cost Calculation",
      "Problem Solving",
    ],
  },
  {
    number: "05",
    role: "Private Tutor",
    company: "Self-employed",
    period: "Sep 2023 – Feb 2024",
    type: "Part-time · Remote",
    category: "EDUCATION & COMMUNICATION",
    icon: "material-symbols:menu-book-rounded",
    featured: false,
    description:
      "Provided one-on-one tutoring for an elementary school student, adapting learning materials and teaching methods to the student's progress.",
    responsibilities: [
      "Prepared learning materials and practice activities",
      "Adapted explanations to the student's learning needs",
      "Communicated with the student's parent about learning progress",
    ],
    skills: [
      "Teaching",
      "Lesson Planning",
      "Communication",
      "Patience",
    ],
  },
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

function SkillTag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/60">
      {children}
    </span>
  );
}

export default function CareerPage() {
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
          {/* Overview */}
          <section
            id="career-overview"
            className="mb-16 scroll-mt-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff7d83]">
              CAREER JOURNEY
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience that shapes how I work
              <span className="text-[#ff7d83]">.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              My professional journey spans software development,
              administrative operations, and customer-facing roles. Each
              experience has helped me develop a practical approach to
              problem-solving, collaboration, and continuous learning.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10  bg-black/30 p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                  <Icon
                    icon="material-symbols:code-rounded"
                    width={23}
                    className="text-[#ff7d83]"
                  />
                </div>
                <h2 className="mt-4 font-semibold text-white">
                  IT & Development
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Experience with web applications, backend maintenance,
                  databases, and software project development.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10  bg-black/30 p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                  <Icon
                    icon="material-symbols:groups-outline-rounded"
                    width={23}
                    className="text-[#ff7d83]"
                  />
                </div>
                <h2 className="mt-4 font-semibold text-white">
                  Operations & Communication
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Experience coordinating schedules, managing records,
                  communicating with customers, and supporting daily
                  operations.
                </p>
              </div>
            </div>
          </section>

          {/* Professional experience */}
          <section
            id="professional-experience"
            className="mb-16 scroll-mt-10"
          >
            <SectionHeading
              eyebrow="01 / Work Experience"
              title="Where I've contributed."
              description="Professional roles that have helped me apply my skills, collaborate with others, and understand real-world work requirements."
            />

            <div className="relative ml-3 space-y-6 border-l border-white/10 pl-6 sm:ml-4 sm:pl-8">
              {experiences.map((experience) => (
                <article
                  key={experience.number}
                  className="relative rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:border-[#ff7d83]/30 sm:p-7"
                >
                  <span className="absolute -left-[31px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#ff7d83] bg-black sm:-left-[41px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff7d83]" />
                  </span>

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon
                        icon={experience.icon}
                        width={25}
                        className="text-[#ff9ba0]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ff7d83]">
                          {experience.category}
                        </span>
                        <span className="text-xs text-white/30">
                          {experience.number}
                        </span>
                      </div>

                      <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-white/70">
                        {experience.company}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          {experience.period}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          {experience.type}
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-white/55">
                        {experience.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">
                          Key responsibilities
                        </h4>
                        <ul className="mt-3 space-y-3">
                          {experience.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-white/55"
                            >
                              <Icon
                                icon="material-symbols:arrow-right-alt-rounded"
                                width={18}
                                className="mt-1 shrink-0 text-[#ff7d83]"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <SkillTag key={skill}>{skill}</SkillTag>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="pb-5 py-6 text-center text-[11px] text-white/25">
            SELENA · CAREER
          </footer>
        </div>
      </main>
    </div>
  );
}
