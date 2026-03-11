import { steps } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const HowItWorks = () => (
  <section id="how-it-works" className="py-20">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="How it works"
          title="Launch automation in three simple steps"
          description="From onboarding to orchestration, Flowforge keeps your team aligned and shipping faster."
        />
        <div className="relative grid gap-6">
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-base-200 md:block" />
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <div className="relative flex gap-5 rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-base-900">{step.title}</h3>
                  <p className="text-sm text-base-600">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default HowItWorks;
