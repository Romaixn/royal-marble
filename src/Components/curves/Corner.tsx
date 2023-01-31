import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_corner: THREE.Mesh;
    Mesh_corner_1: THREE.Mesh;
    Mesh_corner_2: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
    _defaultMat: THREE.MeshStandardMaterial;
  };
};

export function Corner(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/corner.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_corner.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_corner_1.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_corner_2.geometry}
        material={materials._defaultMat}
      />
    </group>
  );
}

useGLTF.preload("/models/corner.glb");
