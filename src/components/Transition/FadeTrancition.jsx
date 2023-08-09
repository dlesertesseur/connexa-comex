import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const FadeTrancition = ({ children }) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }} 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeTrancition;
