import {
  Cog8ToothIcon,
  PlayIcon
} from '@heroicons/react/24/solid'

function Interface() {
  return <div className="interface p-4">
    <div id="top" className="col-span-3">
      <div className="h-full flex justify-between items-center">
        <span></span>
        <h1 className="text-2xl font-bold">Royal Marble</h1>
        <div>
          <button className="inline-flex items-center rounded-full border border-transparent bg-gray-600 p-1 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 pointer-events-auto">
            <Cog8ToothIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div id="left">
      <div className="h-full flex items-center justify-center flex-col"></div>
    </div>
    <div id="app"></div>
    <div id="right">
      <div className="h-full flex items-center justify-center flex-col"></div>
    </div>
    <div id="bottom" className="col-span-3">
      <div className="h-full flex justify-between items-center">
        <span>Interface : Choix pièces</span>
        <button className="inline-flex items-center rounded-full border border-transparent bg-gray-600 p-1 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 pointer-events-auto">
          <PlayIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
}

export default Interface
