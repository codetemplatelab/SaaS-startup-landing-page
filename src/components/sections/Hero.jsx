import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import { RouteLink } from "../../router/Router.jsx";

const stats = [
  { label: "Automation uptime", value: "99.98%" },
  { label: "Workflows launched", value: "4,280" },
  { label: "Hours saved weekly", value: "120+" },
  { label: "Pipeline coverage", value: "38 apps" }
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const floatUp = prefersReducedMotion ? { y: 0 } : { y: [0, 12, 0] };
  const floatDown = prefersReducedMotion ? { y: 0 } : { y: [0, -10, 0] };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-base-50 to-base-100 pb-24 pt-24"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-brand-200/60 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-200/60 blur-3xl animate-pulse-soft" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <FadeIn>
              <Badge>
                <Sparkles className="h-3 w-3" />
                Premium SaaS Template
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl font-semibold leading-tight text-base-900 md:text-5xl lg:text-6xl">
                Build smarter workflows with our powerful SaaS platform.
                <span className="text-gradient"> Launch in days, not months.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-base-600 md:text-xl">
                Flowforge unifies analytics, automation, and collaboration into a single
                workspace. Designed for modern product teams scaling fast.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Button as={RouteLink} to="/signup" size="lg">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button as="a" href="#showcase" variant="secondary" size="lg">
                  <PlayCircle className="h-5 w-5" />
                  Watch demo
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-base-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-500" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-highlight-500" />
                  SOC 2 compliant
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="relative">
              <motion.div
                className="absolute -left-6 top-10 hidden w-40 rounded-2xl bg-white/90 p-4 shadow-soft md:block"
                animate={floatUp}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-base-500">Live signal</p>
                <p className="mt-2 text-lg font-semibold text-base-900">98% automation success</p>
                <p className="text-xs text-base-500">Updated 2m ago</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-8 right-10 hidden w-36 rounded-2xl bg-white/90 p-4 shadow-soft md:block"
                animate={floatDown}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-base-500">Weekly saves</p>
                <p className="mt-2 text-lg font-semibold text-base-900">$42k</p>
                <p className="text-xs text-base-500">Across 6 teams</p>
              </motion.div>
              <div className="surface-card relative rounded-3xl p-6 shadow-soft">
                <img
                  src="/images/hero-dashboard.svg"
                  alt="Product dashboard preview"
                  className="w-full rounded-2xl border border-base-200"
                  loading="eager"
                  decoding="async"
                />
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-base-200 bg-white p-4 shadow-inner-soft"
                    >
                      <p className="text-sm text-base-500">{item.label}</p>
                      <p className="text-2xl font-semibold text-base-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
