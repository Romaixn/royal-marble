import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_ramp_long_C: THREE.Mesh;
    Mesh_ramp_long_C_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function RampLongC(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/ramp_long_C.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_ramp_long_C.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_ramp_long_C_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/ramp_long_C.glb");
