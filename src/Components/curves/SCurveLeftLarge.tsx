import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh_s-curve_left_large"]: THREE.Mesh;
    ["Mesh_s-curve_left_large_1"]: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
  };
};

export function SCurveLeftLarge(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/s-curve_left_large.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_s-curve_left_large"].geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_s-curve_left_large_1"].geometry}
        material={materials.green}
      />
    </group>
  );
}

useGLTF.preload("/models/s-curve_left_large.glb");
