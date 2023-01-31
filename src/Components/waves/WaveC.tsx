import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_wave_C: THREE.Mesh;
    Mesh_wave_C_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function WaveC(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/wave_C.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wave_C.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wave_C_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/wave_C.glb");
