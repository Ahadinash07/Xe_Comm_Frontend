import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmptyState = ({ icon, title, description, actions = [] }) => {
  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md text-center border border-gray-200">
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4"
        >
          {icon}
        </motion.div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex space-x-3 justify-center">
          {actions.map((action, index) => (
            action.to ? (
              <Link 
                key={index}
                to={action.to} 
                className="inline-flex items-center bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
              >
                {action.label}
              </Link>
            ) : (
              <button 
                key={index}
                onClick={action.onClick}
                className="inline-flex items-center bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition-all"
              >
                {action.label}
              </button>
            )
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EmptyState;