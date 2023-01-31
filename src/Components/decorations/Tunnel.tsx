import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_tunnel: THREE.Mesh;
    Mesh_tunnel_1: THREE.Mesh;
  };
  materials: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
  };
};

export function Tunnel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tunnel.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_tunnel.geometry}
        material={materials.green}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_tunnel_1.geometry}
        material={materials.yellow}
      />
    </group>
  );
}

useGLTF.preload("/models/tunnel.glb");
