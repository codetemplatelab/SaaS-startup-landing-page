import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const FAQ = () => (
  <section id="faq" className="bg-base-50 py-20">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Answers for your most common questions"
          description="Everything you need to know before you launch with Flowforge."
        />
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 0.05}>
              <details
                className="group rounded-2xl border border-base-200 bg-white p-5 shadow-soft"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-base-900">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 text-brand-500 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm text-base-600">{faq.answer}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default FAQ;
