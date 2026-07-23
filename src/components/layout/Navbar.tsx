import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/data/navigation";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <nav
        className="
          max-w-7xl mx-auto flex items-center justify-between px-6 py-5"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setActive("")}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shadow-lg transition-transform duration-300 group-hover:scale-110">
            W
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide text-text">
              Wbshet Ayellew
            </span>

            <span className="text-xs text-text-muted">
              Computer Engineer • Building Systems From Silicon To Software
            </span>
          </div>
        </a>

        {/* Desktop */}
        <ul className=" hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleNavigation(link.id)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-primary"
                    : "text-text-muted hover:text-text",
                )}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className=" md:hidden text-text "
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div
            className=" absolute top-20 right-6 bg-surface border border-white/10 rounded-card p-6 shadow-card md:hidden
            "
          >
            <ul className=" flex flex-col gap-5 ">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => handleNavigation(link.id)}
                    className={cn(
                      "text-sm font-medium",
                      active === link.id ? "text-primary" : "text-text-muted",
                    )}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
