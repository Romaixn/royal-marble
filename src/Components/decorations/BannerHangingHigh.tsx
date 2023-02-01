import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_banner_hanging_high: THREE.Mesh;
    Mesh_banner_hanging_high_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function BannerHangingHigh(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/banner_hanging_high.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_banner_hanging_high.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_banner_hanging_high_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/banner_hanging_high.glb");
