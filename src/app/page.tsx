import Navbar from "@/components/Navbar";
import FeaturedProjects from "@/components/FeaturedProjects";
import CoreSkills from "@/components/CoreSkills";
import ScrollIndicator from "@/components/ScrollIndicator";
import AboutCursorGlow from "@/components/AboutCursorGlow";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollIndicator
        sections={[
          { id: "hero", label: "Home" },
          { id: "introduction", label: "Introduction" },
          { id: "projects", label: "Featured Projects" },
          { id: "skills", label: "Core Skills" },
          { id: "cta", label: "Contact" },
        ]}
      />

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
          {/* ==================== HERO ==================== */}

          <section id="hero" className="flex min-h-[calc(100vh-56px)]">
            <div className="mt-auto mb-50 max-w-3xl">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
                Hi, I&apos;m <span className="text-[#ff7d83]">Selena</span>.
              </h1>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#ffd1d3]">
                Backend Developer
              </p>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-[#ffe4e5]">
                I build practical web applications with a focus on backend
                development, problem solving, and turning ideas into reliable
                software.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ff7d83] px-6 py-3 text-sm font-medium text-black hover:bg-[#ff9da1]"
                >
                  Explore My Work
                  <Icon
                    icon="material-symbols:arrow-downward-rounded"
                    width={18}
                  />
                </a>

                <a
                  href="https://github.com/selena2355"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#ff7d83] px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  <Icon icon="mdi:github" width={18} />
                  GitHub
                  <Icon
                    icon="material-symbols:arrow-outward-rounded"
                    width={16}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* ==================== INTRODUCTION ==================== */}

          <section id="introduction" className="py-28">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd1d3]">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Building things that solve real problems.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#ffe4e5]">
                I&apos;m a D3 Information Technology graduate from State
                Polytechnic of Madiun with an interest in backend and web
                development.
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#d9bfc1]">
                My experience includes building web applications, working with
                databases, and solving practical problems through software. I
                enjoy turning requirements into functional systems and
                continuously improving the way they work.
              </p>

              <a
                href="/about"
                className="mt-7 inline-block text-sm font-semibold text-[#ff9da1] hover:text-white"
              >
                Learn More About Me →
              </a>
            </div>
          </section>

          {/* ==================== FEATURED PROJECTS ==================== */}

          <FeaturedProjects />

          {/* ==================== CORE SKILLS ==================== */}

          <CoreSkills />

          {/* ==================== CTA ==================== */}

          <section id="cta" className="py-28">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-8 py-16 text-center">
              <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d9bfc1]">
                I&apos;m interested in opportunities to learn, collaborate, and
                build useful software.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-[#ff7d83] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#ff9da1]"
              >
                Get In Touch →
              </a>
            </div>
          </section>
          <footer className="pb-5 pt-2 text-center text-[11px] text-white/25">
            SELENA · HOME
          </footer>
        </div>
      </main>
    </div>
  );
}
