import { motion, useReducedMotion } from "framer-motion";

const FadeIn = ({ children, className = "", delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
