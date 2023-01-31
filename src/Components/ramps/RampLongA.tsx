import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_ramp_long_A: THREE.Mesh;
    Mesh_ramp_long_A_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function RampLongA(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/ramp_long_A.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_ramp_long_A.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_ramp_long_A_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/ramp_long_A.glb");
