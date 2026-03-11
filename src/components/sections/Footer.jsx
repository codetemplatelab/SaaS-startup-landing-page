import { Mail, MapPin, Phone, Shield } from "lucide-react";
import { RiLinkedinFill, RiTwitterXLine, RiYoutubeFill } from "react-icons/ri";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#hero" },
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Showcase", href: "#showcase" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#cta" },
      { label: "Security", href: "#faq" },
      { label: "Press Kit", href: "#showcase" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#faq" },
      { label: "API Library", href: "#showcase" },
      { label: "Changelog", href: "#trusted" },
      { label: "Guides", href: "#how-it-works" },
      { label: "Support", href: "#cta" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#footer" },
      { label: "Terms of Service", href: "#footer" },
      { label: "DPA", href: "#footer" },
      { label: "Security", href: "#footer" },
      { label: "Status", href: "#footer" }
    ]
  }
];

const Footer = () => (
  <footer id="footer" className="border-t border-base-800 bg-base-900 py-16 text-white">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="space-y-6">
          <a href="#top" className="font-display text-xl font-semibold">
            Flowforge
          </a>
          <p className="max-w-md text-sm text-base-200">
            A premium SaaS startup landing page template built for product-led
            growth and conversion-focused storytelling.
          </p>
          <div className="space-y-3 text-sm text-base-200">
            <a
              href="mailto:hello@flowforge.io"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail className="h-4 w-4" />
              hello@flowforge.io
            </a>
            <a
              href="tel:+12125550148"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +1 (212) 555-0148
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              29 Howard St, New York, NY
            </div>
          </div>
          <div className="flex items-center gap-4 text-lg text-base-200">
            <a aria-label="Follow on X" href="#" className="transition hover:text-white">
              <RiTwitterXLine />
            </a>
            <a aria-label="Follow on LinkedIn" href="#" className="transition hover:text-white">
              <RiLinkedinFill />
            </a>
            <a aria-label="Watch on YouTube" href="#" className="transition hover:text-white">
              <RiYoutubeFill />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3 text-sm text-base-200">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-base-400">
                {column.title}
              </p>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 border-t border-base-800 pt-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex flex-wrap items-center gap-4 text-sm text-base-400">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            SOC 2 Type II & GDPR ready
          </div>
          <span>•</span>
          <span>Average onboarding: 14 days</span>
        </div>
        <form
          className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email for updates"
            className="h-11 w-full rounded-full border border-base-700 bg-base-800/80 px-4 text-sm text-white placeholder:text-base-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Email address"
          />
          <Button
            className="h-11 px-6 focus-visible:ring-offset-base-900"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-base-500">
        <p>© 2026 Flowforge. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#footer" className="transition hover:text-white">Privacy</a>
          <a href="#footer" className="transition hover:text-white">Terms</a>
          <a href="#footer" className="transition hover:text-white">Cookies</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
