/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 social.gltf 
Author: Nurfaamk Cyform (https://sketchfab.com/nurhudaiffah)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/social-media-hologram-9f05052a90454e398d8e6704b9f780e4
Title: SOCIAL MEDIA HOLOGRAM
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/social.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.158, 4.908, 3.57]} rotation={[0, Math.PI / 2, 0]} scale={0.241}>
        <mesh geometry={nodes.polySurface13_lambert19_0.geometry} material={materials.lambert19} />
        <mesh geometry={nodes.polySurface13_lambert25_0.geometry} material={materials.lambert25} />
        <mesh geometry={nodes.polySurface15_lambert19_0.geometry} material={materials.lambert19} />
        <mesh geometry={nodes.polySurface15_lambert25_0.geometry} material={materials.lambert25} />
      </group>
      <mesh geometry={nodes.polySurface1_lambert20_0.geometry} material={materials.lambert20} position={[0.208, 4.894, 3.297]} rotation={[0, Math.PI / 2, 0]} scale={0.241} />
      <group position={[0.168, 4.908, 2.974]} rotation={[0, Math.PI / 2, 0]} scale={0.241}>
        <mesh geometry={nodes.polySurface6_lambert16_0.geometry} material={materials.lambert16} />
        <mesh geometry={nodes.polySurface7_lambert27_0.geometry} material={materials.lambert27} />
        <mesh geometry={nodes.polySurface7_lambert18_0.geometry} material={materials.lambert18} />
        <mesh geometry={nodes.polySurface8_lambert16_0.geometry} material={materials.lambert16} />
      </group>
      <group position={[0.247, 4.962, 2.601]} rotation={[0, Math.PI / 2, 0]} scale={0.241}>
        <mesh geometry={nodes.polySurface9_lambert14_0.geometry} material={materials.lambert14} />
        <mesh geometry={nodes.polySurface10_lambert20_0.geometry} material={materials.lambert20} />
        <mesh geometry={nodes.polySurface11_lambert14_0.geometry} material={materials.lambert14} />
      </group>
      <group position={[1.267, 5.827, 1.85]} rotation={[0, Math.PI / 2, 0]} scale={0.264}>
        <mesh geometry={nodes.bevelPolygon8_lambert24_0.geometry} material={materials.lambert24} position={[-0.17, 0, -4.037]} />
        <mesh geometry={nodes.bevelPolygon6_lambert22_0.geometry} material={materials.lambert22} position={[-0.17, 0, -4.208]} />
        <mesh geometry={nodes.bevelPolygon5_lambert23_0.geometry} material={materials.lambert23} position={[-0.17, 0, -4.208]} />
        <mesh geometry={nodes.bevelPolygon4_lambert23_0.geometry} material={materials.lambert23} position={[-0.17, 0, -4.208]} />
        <mesh geometry={nodes.bevelPolygon3_lambert22_0.geometry} material={materials.lambert22} position={[-0.17, 0, -4.208]} />
        <mesh geometry={nodes.bevelPolygon2_lambert23_0.geometry} material={materials.lambert23} position={[-0.17, 0, -4.208]} />
        <mesh geometry={nodes.bevelPolygon1_lambert22_0.geometry} material={materials.lambert22} position={[-0.17, 0, -4.208]} />
      </group>
      <group position={[0.325, 0, -4.423]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.polySurface28_lambert22_0.geometry} material={materials.lambert22} />
        <mesh geometry={nodes.polySurface29_lambert23_0.geometry} material={materials.lambert23} />
        <mesh geometry={nodes.polySurface30_lambert22_0.geometry} material={materials.lambert22} />
        <mesh geometry={nodes.polySurface31_lambert23_0.geometry} material={materials.lambert23} />
        <mesh geometry={nodes.polySurface32_lambert23_0.geometry} material={materials.lambert23} />
        <mesh geometry={nodes.polySurface33_lambert22_0.geometry} material={materials.lambert22} />
        <mesh geometry={nodes.polySurface34_lambert24_0.geometry} material={materials.lambert24} />
      </group>
      <mesh geometry={nodes.polySurface24_lambert30_0.geometry} material={materials.lambert30} />
      <mesh geometry={nodes.polySurface25_lambert29_0.geometry} material={materials.lambert29} />
      <mesh geometry={nodes.polySurface26_lambert30_0.geometry} material={materials.lambert30} />
      <mesh geometry={nodes.polySurface27_lambert29_0.geometry} material={materials.lambert29} />
      <mesh geometry={nodes.polySurface16_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
      <mesh geometry={nodes.polySurface17_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
      <mesh geometry={nodes.polySurface18_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
      <mesh geometry={nodes.polySurface19_aiStandardSurface1_0.geometry} material={materials.aiStandardSurface1} />
      <mesh geometry={nodes.polySurface20_lambert31_0.geometry} material={materials.lambert31} />
      <mesh geometry={nodes.polySurface21_lambert31_0.geometry} material={materials.lambert31} />
      <mesh geometry={nodes.polySurface22_lambert31_0.geometry} material={materials.lambert31} />
      <mesh geometry={nodes.polySurface23_lambert31_0.geometry} material={materials.lambert31} />
      <mesh geometry={nodes.polySurface12_lambert19_0.geometry} material={materials.lambert19} />
      <mesh geometry={nodes.polySurface12_lambert25_0.geometry} material={materials.lambert25} />
    </group>
  )
}

useGLTF.preload('/social.gltf')
