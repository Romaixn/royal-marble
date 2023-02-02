import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_bend: THREE.Mesh;
    Mesh_bend_1: THREE.Mesh;
    Mesh_bend_2: THREE.Mesh;
  };
  materials: {
    yellow: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    _defaultMat: THREE.MeshStandardMaterial;
  };
};

export function Bend(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/bend.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bend.geometry}
        material={materials.yellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bend_1.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_bend_2.geometry}
        material={materials._defaultMat}
      />
    </group>
  );
}

useGLTF.preload("/models/bend.glb");
