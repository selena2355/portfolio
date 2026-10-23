"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type ScrollIndicatorProps = {
  sections: Section[];
};

export default function ScrollIndicator({
  sections,
}: ScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const container = document.getElementById("main-scroll");

    if (!container) return;

    const handleScroll = () => {
      let currentSection = sections[0]?.id;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        const distance = Math.abs(
          element.offsetTop - container.scrollTop
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const container = document.getElementById("main-scroll");
    const section = document.getElementById(id);

    if (!container || !section) return;

    container.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  return (
    <div className="fixed right-2.5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1.5 lg:flex">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            title={section.label}
            className={[
              "rounded-full transition-all duration-300",
              isActive
                ? "h-5 w-2 bg-[#ff7d83]"
                : "h-2 w-2 bg-white/30 hover:bg-white/70",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}