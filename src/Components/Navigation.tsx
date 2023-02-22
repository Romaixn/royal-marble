import { useState } from 'react';
import { motion } from 'framer-motion'
import { CubeIcon } from '@heroicons/react/24/solid';

function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="data-[isOpen=true]:w-1/2 data-[isOpen=true]:h-96 data-[isOpen=false]:cursor-pointer inline-flex items-center rounded-full border border-transparent bg-slate-600 p-1 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 pointer-events-auto"
      onClick={() => setIsOpen(!isOpen)}
    >
      <CubeIcon className="h-10 w-10" />
    </motion.div>
  )
}

export default Navigation
