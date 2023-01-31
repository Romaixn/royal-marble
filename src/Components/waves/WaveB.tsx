import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_wave_B: THREE.Mesh;
    Mesh_wave_B_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function WaveB(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/wave_B.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wave_B.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wave_B_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/wave_B.glb");
