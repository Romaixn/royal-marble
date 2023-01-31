import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_funnel_long: THREE.Mesh;
    Mesh_funnel_long_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function FunnelLong(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/funnel_long.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_funnel_long.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_funnel_long_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/funnel_long.glb");
