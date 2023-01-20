import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Debug, RigidBody, Physics } from '@react-three/rapier'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

function App() {
  const start = useGLTF('/models/end_square.glb')
  const ramp = useGLTF('/models/ramp_long_C.glb')
  const hole = useGLTF('/models/end_hole_square.glb')

  const { debug, perf } = useControls({
    perf: { value: true, label: 'Performance' },
    debug: { value: false, label: 'Debug' },
  })

  return (
    <Canvas>
      { perf && <Perf position="top-left"/> }

      <OrbitControls makeDefault />

      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
      <ambientLight intensity={ 0.5 } />

      <Physics>
        { debug && <Debug /> }
        <RigidBody colliders="ball" restitution={0.5} friction={1} linearDamping={0.5} angularDamping={0.5}>
          <mesh position-y={ 5 } position-z={ -3.5 } castShadow receiveShadow>
            <sphereGeometry args={ [ 0.4, 16, 16 ] } />
            <meshStandardMaterial color="white" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh" position-y={ 2 } position-z={ -3 }>
          <primitive object={ start.scene } scale={ 2 } receiveShadow />
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh" position-y={ 0 }>
          <primitive object={ ramp.scene } scale={ 2 } receiveShadow />
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh" position-z={ 3 }>
          <primitive object={ hole.scene } scale={ 2 } rotation-y={ Math.PI } receiveShadow />
        </RigidBody>

        <RigidBody type="fixed" restitution={ 0 } friction={ 0.7 }>
            <mesh receiveShadow>
              <boxGeometry args={ [ 10, 0.5, 10 ] } />
              <meshStandardMaterial color="greenyellow" />
            </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
  )
}

export default App
