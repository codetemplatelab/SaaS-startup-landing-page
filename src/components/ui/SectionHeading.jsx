const alignments = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end"
};

const SectionHeading = ({ eyebrow, title, description, align = "center" }) => (
  <div className={`flex flex-col gap-4 ${alignments[align] || alignments.center}`}>
    {eyebrow ? (
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="font-display text-3xl font-semibold text-base-900 md:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="text-base text-base-600 md:text-lg">{description}</p>
    ) : null}
  </div>
);

export default SectionHeading;
