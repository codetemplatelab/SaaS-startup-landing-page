import { showcase } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const Showcase = () => (
  <section id="showcase" className="bg-gradient-to-b from-white via-base-50 to-white py-20">
    <Container>
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Product"
          title="A visual command center for every team"
          description="Showcase your product experience with bold visuals and clear outcomes."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {showcase.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full rounded-xl border border-base-200 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="text-lg font-semibold text-base-900">{item.title}</h3>
                  <p className="text-sm text-base-600">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Showcase;
