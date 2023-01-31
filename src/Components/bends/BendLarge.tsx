import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_bend_large: THREE.Mesh;
    Mesh_bend_large_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function BendLarge(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/bend_large.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bend_large.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bend_large_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/bend_large.glb");
