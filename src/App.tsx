import { Sky, Stage, OrbitControls } from '@react-three/drei'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { EndHole } from './Components/end/EndHole'

function App() {
  const { debug, perf } = useControls({
    perf: { value: true, label: 'Performance' },
    debug: { value: false, label: 'Debug' },
  })

  return (
    <>
      { perf && <Perf position="top-left"/> }

      <Stage
        intensity={0.5}
        preset="rembrandt"
        adjustCamera={1.75}
        shadows="accumulative"
      >
        <Physics>
          { debug && <Debug /> }

          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><EndHole /></RigidBody>
        </Physics>
      </Stage>

      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
      />
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
    </>
  )
}

export default App
