import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import { RouteLink } from "../../router/Router.jsx";

const CTA = () => (
  <section id="cta" className="py-20">
    <Container>
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-base-800 bg-base-900 p-10 text-white shadow-soft md:p-14">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                <Sparkles className="h-4 w-4" />
                Get started
              </p>
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                Start building with our platform today.
              </h2>
              <p className="text-base text-base-200">
                Launch a premium SaaS experience with a template built for conversions,
                speed, and growth-ready teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                as={RouteLink}
                to="/signup"
                size="lg"
                className="focus-visible:ring-offset-base-900"
              >
                Start free trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                as="a"
                href="mailto:hello@flowforge.io"
                variant="ghost"
                size="lg"
                className="border border-white/20 text-white hover:bg-white/10 focus-visible:ring-offset-base-900"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>
);

export default CTA;
