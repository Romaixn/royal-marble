import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_wave_A: THREE.Mesh;
    Mesh_wave_A_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function WaveA(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/wave_A.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wave_A.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wave_A_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/wave_A.glb");
