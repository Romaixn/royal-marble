import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

function App() {
  const { togglePerf, color } = useControls({
    togglePerf: { value: true, label: 'Toggle Perf' },
    color: { value: 'mediumpurple', label: 'Color' },
  })

  return (
    <Canvas>
      { togglePerf && <Perf position="top-left"/> }

      <OrbitControls makeDefault />

      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
      <ambientLight intensity={ 0.5 } />

      <mesh scale={ 1.5 }>
        <boxGeometry />
        <meshStandardMaterial color={ color } />
      </mesh>
    </Canvas>
  )
}

export default App
