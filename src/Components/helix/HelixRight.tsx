import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_helix_right: THREE.Mesh;
    Mesh_helix_right_1: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function HelixRight(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/helix_right.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_helix_right.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_helix_right_1.geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/helix_right.glb");
