import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import AboutCursorGlow from "@/components/AboutCursorGlow";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollIndicator
        sections={[
          { id: "about", label: "About Me" },
          { id: "career-focus", label: "Career Focus" },
          { id: "education", label: "Education" },
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
          {/* ==================== ABOUT ME ==================== */}

          <section
            id="about"
            className="flex min-h-[calc(100vh-100px)] items-center"
          >
            <div className="w-full max-w-6xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff7d83]">
                About Me
              </p>

              <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
                {/* Photo placeholder */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src="/images/me.png"
                      alt="Portrait of Selena"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Introduction */}
                <div>
                  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                    Hi, I&apos;m <span className="text-[#ff7d83]">Hanifah Alya</span>.
                  </h1>

                  <p className="mt-6 text-lg leading-8 text-[#ffe4e5]">
                    I&apos;m an Information Technology graduate with an interest
                    in backend development and web application development.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-[#d9bfc1]">
                    I enjoy turning ideas and real-world problems into practical
                    software solutions. Through my projects and experiences,
                    I&apos;ve worked with web applications, databases, and text
                    processing while continuously improving my development
                    skills.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-[#d9bfc1]">
                    I&apos;m particularly interested in understanding how
                    applications work behind the scenes and building systems
                    that are reliable, maintainable, and useful.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== CAREER FOCUS ==================== */}

          <section
            id="career-focus"
            className="flex min-h-[80vh] items-center py-28"
          >
            <div className="w-full max-w-6xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff7d83]">
                Career Focus
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Growing as a backend developer.
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {/* Career Focus */}
                <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                      <Icon
                        icon="lucide:database"
                        className="text-[#ff7d83]"
                        width={24}
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Backend Development
                  </h3>

                  <p className="mt-4 leading-7 text-[#d9bfc1]">
                    My current career focus is backend development, with an
                    interest in building web applications, developing APIs,
                    working with databases, and understanding how different
                    parts of an application work together.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Python", 
                      "Flask", 
                      // "REST API", 
                      "Laravel", 
                      "MySQL"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#ffe4e5]"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Currently Exploring */}
                <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                      <Icon
                        icon="material-symbols:explore-outline-rounded"
                        className="text-[#ff7d83]"
                        width={24}
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Currently Exploring
                  </h3>

                  <p className="mt-4 leading-7 text-[#d9bfc1]">
                    I&apos;m continuing to strengthen my fundamentals while
                    exploring areas that can help me build more complete and
                    reliable applications.
                  </p>

                  <ul className="mt-6 space-y-3 text-[#ffe4e5]">
                    {[
                      "Backend architecture",
                      // "REST API development",
                      "Database design",
                      "Application performance",
                      "Deployment & server management",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Icon
                          icon="material-symbols:change-history-rounded"
                          className="mt-0.5 shrink-0 text-[#ff7d83]"
                          width={17}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== EDUCATION ==================== */}

          <section
            id="education"
            className="flex items-center mb-16 scroll-mt-12"
          >
            <div className="w-full max-w-6xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff7d83]">
                Education
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                Where I started.
              </h2>

              <div className="mt-10 max-w-3xl rounded-2xl border border-white/10 bg-black/30 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff7d83]/20 bg-[#ff7d83]/10">
                    <Icon
                      icon="material-symbols:school-outline-rounded"
                      className="text-[#ff7d83]"
                      width={24}
                    />
                  </div>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  D3 Information Technology
                </h3>

                <p className="mt-2 text-lg text-[#ffe4e5]">
                  Politeknik Negeri Madiun
                </p>

                <p className="text-sm font-medium text-[#ff9da1]">
                  2023 — 2026
                </p>

                <p className="mt-6 max-w-2xl leading-7 text-[#d9bfc1]">
                  Studied information technology with a focus on software
                  development, web applications, databases, and practical
                  problem solving through technology.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Software Development",
                    "Web Development",
                    "Database",
                    "Programming",
                    "NLP",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#ffe4e5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <footer className="pb-5 pt-2 text-center text-[11px] text-white/25">
            SELENA · ABOUT
          </footer>
        </div>
      </main>
    </div>
  );
}
