import { Star } from "lucide-react";
import { testimonials } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const Testimonials = () => (
  <section id="testimonials" className="py-20">
    <Container>
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams that ship faster with Flowforge"
          description="Real stories from product leaders who transformed their operations."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <article className="flex h-full flex-col gap-6 rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
                <div className="flex gap-1 text-highlight-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${testimonial.name}-${starIndex}`}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>
                <p className="text-base text-base-700">“{testimonial.quote}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border border-base-200"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="text-sm font-semibold text-base-900">{testimonial.name}</p>
                    <p className="text-xs text-base-500">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Testimonials;
