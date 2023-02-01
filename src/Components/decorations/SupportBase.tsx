import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    support_base: THREE.Mesh;
  };
  materials: {
    dark: THREE.MeshStandardMaterial;
  };
};

export function SupportBase(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/support_base.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_base.geometry}
        material={materials.dark}
      />
    </group>
  );
}

useGLTF.preload("/models/support_base.glb");
