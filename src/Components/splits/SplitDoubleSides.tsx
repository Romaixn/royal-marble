import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_split_double_sides: THREE.Mesh;
    Mesh_split_double_sides_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function SplitDoubleSides(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/split_double_sides.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_double_sides.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_split_double_sides_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/split_double_sides.glb");
