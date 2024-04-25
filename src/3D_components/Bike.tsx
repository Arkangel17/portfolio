//
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx && https://gltf.pmnd.rs/
Bicycle by jeremy [CC-BY] via Poly Pizza
*/

import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { Colors } from '@lib/constants/colors.ts';

// @ts-ignore
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const Bike = (props: any) => {
  const { nodes, materials } = useGLTF('models/Bicycle.glb');
  const bikeRef = React.useRef<THREE.Mesh>(null);
  const newMatl = new THREE.MeshStandardMaterial({ color: Colors.Blue8 });
  return (
    <group ref={bikeRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle004-Mesh'].geometry}
        material={materials['1A1A1A']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle004-Mesh_1'].geometry}
        material={newMatl}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle004-Mesh_2'].geometry}
        material={materials['78909C']}
      />
    </group>
  );
};

useGLTF.preload('models/Bicycle.glb');
