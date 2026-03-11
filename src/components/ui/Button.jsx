const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-500 shadow-soft hover:shadow-glow",
  secondary:
    "bg-white text-base-900 border border-base-200 hover:border-brand-300 shadow-soft",
  ghost: "bg-transparent text-base-700 hover:bg-base-100"
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base"
};

const Button = ({
  as: Component = "button",
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  children,
  ...props
}) => {
  const isButton = Component === "button";

  return (
    <Component
      {...(isButton ? { type } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
