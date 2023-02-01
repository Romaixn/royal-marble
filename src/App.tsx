import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, Sky, Stage, OrbitControls } from '@react-three/drei'
import { Debug, Physics } from '@react-three/rapier'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Tree } from './Components/decorations/Tree'

function App() {
  const { debug, perf } = useControls({
    perf: { value: true, label: 'Performance' },
    debug: { value: true, label: 'Debug' },
  })

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          { perf && <Perf position="top-left"/> }

          <Stage
            intensity={0.5}
            preset="rembrandt"
            adjustCamera={1.75}
            environment="city">
            <Physics>
              { debug && <Debug /> }

              <Tree />
            </Physics>
          </Stage>

          <OrbitControls
            makeDefault
            maxPolarAngle={Math.PI / 2}
          />
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}

export default App
