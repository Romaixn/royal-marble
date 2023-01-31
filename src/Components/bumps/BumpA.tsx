import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_bump_A: THREE.Mesh;
    Mesh_bump_A_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function BumpA(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/bump_A.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bump_A.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bump_A_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/bump_A.glb");
