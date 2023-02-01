import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_cross: THREE.Mesh;
    Mesh_cross_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function Cross(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/cross.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_cross.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_cross_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/cross.glb");
