import { Sky, Stage, OrbitControls } from '@react-three/drei'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { EndHole } from './Components/end/EndHole'
import { HelixLeft } from './Components/helix/HelixLeft'
import { FunnelLong } from './Components/funnels/FunnelLong'
import { Funnel } from './Components/funnels/Funnel'
import { BendLarge } from './Components/bends/BendLarge'
import { RampLongC } from './Components/ramps/RampLongC'
import { HelixLargeRight } from './Components/helix/HelixLargeRight'
import { HelixLargeLeft } from './Components/helix/HelixLargeLeft'
import { SCurveLeftLarge } from './Components/curves/SCurveLeftLarge'
import { SlantC } from './Components/slants/SlantC'
import { SplitDouble } from './Components/splits/SplitDouble'
import { BendMedium } from './Components/bends/BendMedium'
import { Curve } from './Components/curves/Curve'
import { RampD } from './Components/ramps/RampD'
import { StraightWide } from './Components/straights/StraightWide'
import { Straight } from './Components/straights/Straight'
import { SlantD } from './Components/slants/SlantD'
import { BannerHangingHigh } from './Components/decorations/BannerHangingHigh'

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
        environment="city">
        <Physics>
          { debug && <Debug /> }

          <RigidBody
            colliders="ball"
            friction={0}
            restitution={0}
            linearDamping={0.25}
          >
            <mesh position-y={ 22 } position-z={ 9 } castShadow receiveShadow>
              <sphereGeometry args={ [ 0.30, 16, 16 ] } />
              <meshStandardMaterial color="white" />
            </mesh>
          </RigidBody>

          <BannerHangingHigh position-y={20} position-z={9.4} />
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh">
            <RampD position-y={19} position-z={9} rotation-y={Math.PI} />
          </RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SlantD position-y={17.5} position-z={7.5} rotation-y={Math.PI} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><Funnel position-y={17.5} position-z={6} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><StraightWide position-y={17.5} position-z={5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><StraightWide position-y={17.5} position-z={4} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><FunnelLong position-y={17.5} position-z={2} rotation-y={Math.PI} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><HelixLargeLeft position-y={15.5} position-z={0.5} position-x={2.5} rotation-y={Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SlantD position-y={14} position-z={-0.5} rotation-y={Math.PI} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SlantD position-y={12.5} position-z={-2.5} rotation-y={Math.PI} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><Straight position-y={12.5} position-z={-5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><Straight position-y={12.5} position-z={-4} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><Curve position-y={12.5} position-x={-0.5} position-z={-6.5} rotation-y={-Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><RampD position-y={11.5} position-z={-7} position-x={-2.15} rotation-y={-Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><Curve position-y={11.5} position-z={-7.5} position-x={-3.5} rotation-y={Math.PI / 2} /></RigidBody>

          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SlantD position-y={10} position-z={-9.5} position-x={-4} rotation-y={Math.PI} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><HelixLargeRight position-y={8} position-z={-10.5} position-x={-6.5} rotation-y={-Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><BendMedium position-y={8} position-z={-11.5} position-x={-2.5} rotation-y={-Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><RampLongC position-y={7} position-z={-9.5} position-x={-1} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><EndHole position-y={7} position-z={-9} position-x={1} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SplitDouble position-y={7} position-z={-7.5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SlantC position-y={6} position-z={-5.5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SlantC position-y={5} position-z={-3.5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><SCurveLeftLarge position-y={5} position-z={0} position-x={2.5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><HelixLargeRight position-y={3} position-z={2.5} position-x={7.5} rotation-y={Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><RampLongC position-y={2} position-z={3.5} position-x={5} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><BendLarge position-y={2} position-z={6} position-x={2.5} rotation-y={Math.PI / 2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><Funnel position-z={4} position-y={2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><FunnelLong rotation-y={Math.PI} position-z={2} position-y={2} /></RigidBody>
          <RigidBody type="fixed" friction={0} restitution={0} colliders="trimesh"><HelixLeft position-z={0.5} position-x={1.5} rotation-y={Math.PI / 2} /></RigidBody>
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
