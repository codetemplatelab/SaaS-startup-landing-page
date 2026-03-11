import Container from "../ui/Container.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import { trustedLogos } from "../../data/content.js";

const Trusted = () => (
  <section id="trusted" className="border-b border-base-200/70 bg-white py-12">
    <Container>
      <FadeIn>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-base-500">
            Trusted by product teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-base-500">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-base-200 bg-base-50 px-4 py-2"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>
);

export default Trusted;
