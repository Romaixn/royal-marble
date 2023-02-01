import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_rampStart_B: THREE.Mesh;
    Mesh_rampStart_B_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function RampB(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/rampStart_B.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_rampStart_B.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_rampStart_B_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/rampStart_B.glb");
