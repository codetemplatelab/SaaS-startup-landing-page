import { features } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const Features = () => (
  <section id="features" className="bg-base-50 py-20">
    <Container>
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Features"
          title="Designed for high-performing SaaS teams"
          description="Everything you need to align teams, automate workflows, and scale faster."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-base-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-base-900">{feature.title}</h3>
                  <p className="text-sm text-base-600">{feature.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

export default Features;
