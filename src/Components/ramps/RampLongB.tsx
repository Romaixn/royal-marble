import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_ramp_long_B: THREE.Mesh;
    Mesh_ramp_long_B_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function RampLongB(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/ramp_long_B.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_ramp_long_B.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_ramp_long_B_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/ramp_long_B.glb");
