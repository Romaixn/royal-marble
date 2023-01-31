import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_split_large_left: THREE.Mesh;
    Mesh_split_large_left_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function SplitLargeLeft(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/split_large_left.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_large_left.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_large_left_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/split_large_left.glb");
