"use client";

import { useRef, useState } from "react";

const skills = [
  {
    number: "01",
    title: "Backend Development",
    description:
      "Building server-side applications and APIs with a focus on practical and reliable solutions.",
    skills: ["Python", "Flask", "REST API"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Developing web applications across frontend and backend.",
    skills: ["Laravel", "PHP", "HTML", "CSS"],
  },
  {
    number: "03",
    title: "Database & Tools",
    description:
      "Managing application data and development workflows.",
    skills: ["MySQL", "SQL", "Git", "GitHub"],
  },
  {
    number: "04",
    title: "NLP & Text Processing",
    description:
      "Applying text processing techniques to solve language-related problems.",
    skills: [
      "Stanza",
      "POS Tagging",
      "Regular Expressions",
      "Text Processing",
    ],
  },
];

export default function CoreSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;

    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - container.scrollLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSkill(closestIndex);
  };

  const scrollToSkill = (index: number) => {
    const container = containerRef.current;

    if (!container) return;

    const card = container.children[index] as HTMLElement;

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveSkill(index);
  };

  return (
    <section id="skills" className="py-28">
      {/* Heading */}
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ffd1d3]">
          What I Work With
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Core Skills
        </h2>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="mt-10 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:items-start lg:overflow-visible">
        {skills.map((skill) => (
        <article
        key={skill.number}
        className="flex min-h-[250px] min-w-full w-full shrink-0 snap-center flex-col rounded-2xl border border-white/10 bg-black/40 p-6 lg:min-w-0">
            <span className="text-sm font-bold text-[#ff9da1]">
              {skill.number}
            </span>

            <h3 className="mt-8 text-3xl font-bold leading-tight text-white">
              {skill.title}
            </h3>

            <p className="mt-4 leading-7 text-[#d9bfc1]">
              {skill.description}
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#ffe4e5]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dot indicator */}
      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        {skills.map((skill, index) => (
          <button
            key={skill.number}
            type="button"
            onClick={() => scrollToSkill(index)}
            aria-label={`Go to skill category ${index + 1}`}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              activeSkill === index
                ? "w-5.5 bg-[#ff7d83]"
                : "w-1.5 bg-white/30 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>

      {/* View all */}
      <div className="mt-8 text-center">
        <a
          href="/skills"
          className="inline-block rounded-lg border border-[#ff9da1] px-6 py-3 text-sm font-semibold text-[#ff9da1] transition hover:bg-[#ff9da1] hover:text-black">
          View All Skills →
        </a>
      </div>
    </section>
  );
}