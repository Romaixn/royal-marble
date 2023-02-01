import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_slant_long_C: THREE.Mesh;
    Mesh_slant_long_C_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function SlantC(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/slant_long_C.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_slant_long_C.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_slant_long_C_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/slant_long_C.glb");
