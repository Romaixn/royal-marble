import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_bump_D: THREE.Mesh;
    Mesh_bump_D_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function BumpD(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/bump_D.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bump_D.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bump_D_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/bump_D.glb");
