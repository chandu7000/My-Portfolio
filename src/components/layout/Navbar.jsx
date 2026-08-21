import { useState } from "react";
import { navItems } from "../../data/navigation";
import Container from "../ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-line/70 bg-canvas/90 backdrop-blur-xl" aria-label="Primary navigation">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-18">
          <a href="#home" className="rounded-md text-lg font-bold tracking-tight text-ink sm:text-xl">
            My <span className="text-accent-cyan">Portfolio</span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="rounded-md text-sm font-medium text-slate-300 hover:text-accent-cyan"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line bg-surface-soft text-ink hover:border-accent-cyan/50 hover:text-accent-cyan md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-navigation" className="border-t border-line/70 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-surface-soft hover:text-accent-cyan"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </nav>
  );
}
