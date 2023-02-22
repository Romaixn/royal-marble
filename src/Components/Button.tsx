import { motion } from 'framer-motion'

interface ButtonProps {
  children: JSX.Element | JSX.Element[];
}

function Button({ children }: ButtonProps): JSX.Element {
  return (
    <motion.button
      className="button-parent inline-flex items-center rounded-full border border-transparent bg-slate-600 p-1 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 pointer-events-auto"
      whileHover={{ scale: 1.1 }}
    >
      { children }
    </motion.button>
  )
}

export default Button
