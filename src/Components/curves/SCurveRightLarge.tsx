import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Mesh_s-curve_right_large"]: THREE.Mesh;
    ["Mesh_s-curve_right_large_1"]: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function SCurveRightLarge(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/s-curve_right_large.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_s-curve_right_large"].geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Mesh_s-curve_right_large_1"].geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/s-curve_right_large.glb");
