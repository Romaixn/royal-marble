import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    tree: THREE.Mesh;
  };
  materials: {
    dark: THREE.MeshStandardMaterial;
  };
};

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tree.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={materials.dark}
      />
    </group>
  );
}

useGLTF.preload("/models/tree.glb");
