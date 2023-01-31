import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_slan_long_D: THREE.Mesh;
    Mesh_slan_long_D_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function SlantD(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/slan_long_D.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_slan_long_D.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_slan_long_D_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/slan_long_D.glb");
