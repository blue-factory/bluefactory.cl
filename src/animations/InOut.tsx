import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function InOut({ children }: Props) {
  return (
    <motion.div
      whileTap={{
        scale: [1, 1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 0, 180, 180, 0],
      }}
      animate={{
        scale: [1, 1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 0, 180, 180, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default InOut;
