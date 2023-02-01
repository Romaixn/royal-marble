import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_helix_left: THREE.Mesh;
    Mesh_helix_left_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function HelixLeft(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/helix_left.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_helix_left.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_helix_left_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/helix_left.glb");
