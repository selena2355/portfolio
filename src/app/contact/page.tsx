import Navbar from "@/components/Navbar";
import AboutCursorGlow from "@/components/AboutCursorGlow";
import { Icon } from "@iconify/react";

const contactLinks = [
  {
    title: "Email",
    description: "For job opportunities and professional inquiries.",
    value: "hanifahalya771@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=hanifahalya771%40gmail.com",
    icon: "material-symbols:mail-outline-rounded",
    label: "Open Gmail to send an email",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally.",
    value: "Hanifah Alya",
    href: "https://www.linkedin.com/in/hanifah-alya",
    icon: "mdi:linkedin",
    label: "Visit LinkedIn",
  },
  {
    title: "GitHub",
    description: "Explore my projects and code.",
    value: "selena2355",
    href: "https://github.com/selena2355",
    icon: "mdi:github",
    label: "Visit GitHub",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main
        id="main-scroll"
        className="fixed inset-y-0 left-[78px] right-0 overflow-y-auto bg-black pt-4 pr-4 [scrollbar-gutter:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Top black strip */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-[78px] right-0 top-0 z-10 h-4 bg-black"
        />

        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 left-[78px] right-7 top-4 rounded-t-[16px] bg-linear-to-b from-[#8b3f42] to-[#150607]"
        />

        <AboutCursorGlow />

        <div className="relative mr-7 min-h-full px-8 py-10 sm:px-14 lg:px-20">
          {/* Hero */}
          <section
            id="contact-overview"
            className="flex flex-col justify-center mb-10 scroll-mt-10"
          >
            <h1 className="max-w-7xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-5xl mb-10">
              Have a project in mind or just want to say hi?
            </h1>
            <h1 className="max-w-5xl text-4xl text-[#ff9ba0] font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Let&apos;s connect!
            </h1>

          </section>

          {/* Contact links */}
          <section id="contact-links" className="scroll-mt-8 mb-10">
            <div className="mb-8">
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                Choose the platform that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {contactLinks.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.label}
                  className="group flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9ba0]/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ff9ba0]/20 bg-[#ff9ba0]/10 text-[#ff9ba0] transition-colors duration-300 group-hover:bg-[#ff9ba0]/20">
                      <Icon icon={contact.icon} width={24} height={24} />
                    </div>

                    <Icon
                      icon="material-symbols:arrow-outward-rounded"
                      width={20}
                      height={20}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff9ba0]"
                    />
                  </div>

                  <div className="mt-auto pt-8">
                    <h3 className="text-lg font-medium">{contact.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {contact.description}
                    </p>

                    <p className="mt-4 break-all text-sm text-[#ff9ba0]">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer>
            <div className="pb-5 text-center text-[11px] text-white/25">
              SELENA · CONTACT
            </div>

            <div className="flex flex-col gap-3 border-t py-3 border-white/10 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} SELENA. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
