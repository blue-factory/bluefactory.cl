import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const cardVariants: Variants = {
  offscreen: {
    opacity: 0.05,
  },
  onscreen: {
    opacity: 1.0,
  },
};
function BoxIn({ children }: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default BoxIn;
