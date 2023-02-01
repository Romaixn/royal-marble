import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_straight: THREE.Mesh;
    Mesh_straight_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function Straight(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/straight.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_straight.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_straight_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/straight.glb");
