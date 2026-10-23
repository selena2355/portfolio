"use client";

import { useState } from "react";

const projects = [
  {
    title: "Indonesian Punctuation Detection & Correction System",
    description:
      "A web-based application that detects and corrects Indonesian punctuation errors in academic documents using rule-based processing, regular expressions, and POS tagging.",
    image: "/images/projects/punctuation-app.png",
    technologies: ["Python", "Flask", "Stanza", "MySQL", "python-docx"],
  },
  {
    title: "IT Division Profile Website",
    description:
      "A profile website developed to present IT division information, services, and activities in a structured and accessible way.",
    image: "/images/projects/kai-website.png",
    technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const handleScroll = (element: HTMLDivElement) => {
    const scrollLeft = element.scrollLeft;
    const cardWidth = element.clientWidth;

    const index = Math.round(scrollLeft / cardWidth);

    setActiveProject(index);
  };

  const scrollToProject = (index: number) => {
    const container = document.getElementById("featured-projects");

    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });

    setActiveProject(index);
  };

  return (
    <section id="projects" className="py-28">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd1d3]">
          Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Featured Projects
        </h2>
      </div>

      {/* Project carousel */}

      <div
        id="featured-projects"
        onScroll={(event) => handleScroll(event.currentTarget)}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="w-full min-w-full snap-center overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-colors duration-300 hover:border-[#ff7d83]/30"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] h-full">
              {/* Project screenshot */}
              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0b0b0b] p-4 sm:p-6 lg:min-h-full lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,125,131,0.10),transparent_65%)]" />

                <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/30">
                  <img
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    className="h-auto w-full object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

              </div>

              {/* Project details */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#ff7d83]/20 bg-[#ff7d83]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#ff9ba0]">
                    Featured Project
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/75">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-white/65"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => scrollToProject(index)}
            aria-label={`Go to project ${index + 1}`}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              activeProject === index
                ? "w-5.5 bg-[#ff7d83]"
                : "w-1.5 bg-white/30 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>

      {/* View all */}
      <div className="mt-8 text-center">
        <a
          href="/projects"
          className="inline-block rounded-lg border border-[#ff9da1] px-6 py-3 text-sm font-semibold text-[#ff9da1] transition hover:bg-[#ff9da1] hover:text-black"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
}
