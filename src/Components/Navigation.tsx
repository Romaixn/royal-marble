import { useState } from 'react';
import { motion } from 'framer-motion'
import { CubeIcon } from '@heroicons/react/24/solid';

function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.div
        layout
        data-isOpen={isOpen}
        className="data-[isOpen=true]:w-max data-[isOpen=true]:h-fit data-[isOpen=false]:cursor-pointer absolute -bottom-6 left-0 inline-flex items-center rounded-full border border-transparent bg-slate-600 p-1 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
        >
          { !isOpen && <CubeIcon className="h-10 w-10" /> }
          { isOpen &&
            <div className="p-4">
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          }
        </motion.div>
      </div>
  )
}

export default Navigation
