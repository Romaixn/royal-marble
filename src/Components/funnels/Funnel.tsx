import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_funnel: THREE.Mesh;
    Mesh_funnel_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function Funnel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/funnel.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_funnel.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_funnel_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/funnel.glb");
