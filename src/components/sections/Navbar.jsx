import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { navLinks } from "../../data/content.js";
import { RouteLink } from "../../router/Router.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-200/70 bg-white/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-base-900">Flowforge</p>
            <p className="text-xs text-base-500">SaaS Platform</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-base-600 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 transition hover:text-base-900"
              >
                <Icon className="h-4 w-4 text-brand-500 transition group-hover:text-brand-600" />
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as={RouteLink} to="/signin" variant="ghost">
            Sign in
          </Button>
          <Button as={RouteLink} to="/signup">
            Get started
          </Button>
        </div>

        <button
          className="rounded-full border border-base-200 p-2 text-base-700 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-base-200 bg-white/95 lg:hidden">
          <Container className="flex flex-col gap-4 py-6 text-sm font-medium text-base-600">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 transition hover:text-base-900"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-4 w-4 text-brand-500" />
                  {link.label}
                </a>
              );
            })}
            <div className="flex flex-col gap-3">
              <Button as={RouteLink} to="/signin" variant="ghost">
                Sign in
              </Button>
              <Button as={RouteLink} to="/signup">
                Get started
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
