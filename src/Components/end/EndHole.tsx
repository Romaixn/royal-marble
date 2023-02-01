import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_end_hole_rounded: THREE.Mesh;
    Mesh_end_hole_rounded_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function EndHole(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/end_hole_rounded.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_end_hole_rounded.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_end_hole_rounded_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/end_hole_rounded.glb");
