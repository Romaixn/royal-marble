import {
  Cog8ToothIcon,
  PlayIcon,
  CubeIcon
} from '@heroicons/react/24/solid'
import Button from './Components/Button'
import Navigation from './Components/Navigation'

function Interface() {
  return <div className="interface p-4">
    <div id="top" className="col-span-3">
      <div className="h-full flex justify-between items-center">
        <span></span>
        <h1 className="text-2xl font-bold">Royal Marble</h1>
        <div>
          <Button>
            <Cog8ToothIcon className="h-10 w-10" />
          </Button>
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
        <Navigation />
        <Button>
          <PlayIcon className="h-10 w-10" />
        </Button>
      </div>
    </div>
  </div>
}

export default Interface
