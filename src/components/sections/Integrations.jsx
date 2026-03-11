import { integrations } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const Integrations = () => (
  <section id="integrations" className="py-20">
    <Container>
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect your entire product stack"
          description="Plug Flowforge into the tools your team already trusts."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-base-900">{item.title}</h3>
                    <p className="text-sm text-base-600">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Container>
  </section>
);

export default Integrations;
