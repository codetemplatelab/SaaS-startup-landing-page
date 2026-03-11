import { Check } from "lucide-react";
import { pricing } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import { RouteLink } from "../../router/Router.jsx";

const Pricing = () => (
  <section id="pricing" className="bg-base-50 py-20">
    <Container>
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans built for every stage"
          description="Transparent pricing that scales with your team and product maturity."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan, index) => {
            const isEnterprise = plan.name === "Enterprise";

            return (
              <FadeIn key={plan.name} delay={index * 0.1}>
                <div
                  className={`flex h-full flex-col gap-6 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? "border-brand-300 bg-white shadow-glow"
                      : "border-base-200 bg-white shadow-soft"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                        {plan.name}
                      </p>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-semibold text-base-900">{plan.price}</span>
                        <span className="text-xs text-base-500">{plan.detail}</span>
                      </div>
                    </div>
                    {plan.highlighted ? (
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        Recommended
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-base-600">{plan.description}</p>
                  <ul className="flex flex-col gap-3 text-sm text-base-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    as={isEnterprise ? "a" : RouteLink}
                    href={isEnterprise ? "mailto:hello@flowforge.io" : undefined}
                    to={!isEnterprise ? "/signup" : undefined}
                    variant={plan.highlighted ? "primary" : "secondary"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

export default Pricing;
