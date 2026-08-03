import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  as: Component = "div",
  delay = 0,
  y = 22,
  className = "",
  once = true,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
