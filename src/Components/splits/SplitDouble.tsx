import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_split_double: THREE.Mesh;
    Mesh_split_double_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function SplitDouble(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/split_double.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_double.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_double_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/split_double.glb");
