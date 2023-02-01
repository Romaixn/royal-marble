import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_bump_B: THREE.Mesh;
    Mesh_bump_B_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function BumpB(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/bump_B.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bump_B.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bump_B_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/bump_B.glb");
