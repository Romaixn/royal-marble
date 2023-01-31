import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_banner_hanging: THREE.Mesh;
    Mesh_banner_hanging_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function BannerHanging(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/banner_hanging.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_banner_hanging.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_banner_hanging_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/banner_hanging.glb");
