import { motion } from 'framer-motion';

const LoadingSpinner = ({ fullScreen = false }) => {
  return (
    <motion.div 
      className={`flex items-center justify-center ${fullScreen ? 'min-h-screen' : 'py-12'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
        className="rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"
      />
    </motion.div>
  );
};

export default LoadingSpinner;