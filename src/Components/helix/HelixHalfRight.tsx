import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_helix_half_right: THREE.Mesh;
    Mesh_helix_half_right_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function HelixHalfRight(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/helix_half_right.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_helix_half_right.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_helix_half_right_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/helix_half_right.glb");
