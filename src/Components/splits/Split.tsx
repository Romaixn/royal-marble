import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_split: THREE.Mesh;
    Mesh_split_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function Split(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/split.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/split.glb");
