import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_rampStart_C: THREE.Mesh;
    Mesh_rampStart_C_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function RampC(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/rampStart_C.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_rampStart_C.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_rampStart_C_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/rampStart_C.glb");
