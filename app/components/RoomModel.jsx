
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: thcyrax (https://sketchfab.com/kitsunegraphics)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-magic-room-c7ef79f3c472494db5224d28b8ae417b
Title: The Magic Room
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function RoomModel(props) {
  const { nodes, materials } = useGLTF('/models/room/scene.gltf')
  return (
    <group {...props} dispose={null}  position={[0.25, -1, 0.25]} scale={0.015}>
      <mesh geometry={nodes.Circle_Material_0.geometry} material={materials.Material} position={[41.064, 0, -52.561]} rotation={[-Math.PI / 2, 0, 0]} scale={133.377} />
      <mesh geometry={nodes.Cube012_Material_0.geometry} material={materials.Material} position={[-79.226, 0, 55.047]} rotation={[-Math.PI / 2, 0, 0]} scale={159.054} />
      <mesh geometry={nodes.Cube011_Material_0.geometry} material={materials.Material} position={[-91.067, 0, -88.256]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={10.34} />
      <mesh geometry={nodes.Cube010_Material_0.geometry} material={materials.Material} position={[38.037, 25.86, -89.148]} rotation={[-Math.PI / 2, 0, 0]} scale={2.134} />
      <mesh geometry={nodes.Sphere_Material_0.geometry} material={materials.Material} position={[-57.461, 0, -65.865]} rotation={[-Math.PI / 2, 0, 0]} scale={4.853} />
      <mesh geometry={nodes.Plane005_Material_0.geometry} material={materials.Material} position={[36.951, 25.914, -80.478]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.858, 1.935, 2.858]} />
      <mesh geometry={nodes.Cylinder_Material_0.geometry} material={materials.Material} position={[66.126, 0, -74.019]} rotation={[-Math.PI / 2, 0, 0]} scale={4.008} />
      <mesh geometry={nodes.Plane003_Material_0.geometry} material={materials.Material} position={[0, 97.814, -21.918]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube009_Material_0.geometry} material={materials.Material} position={[0, 6.752, -99.007]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube008_Material_0.geometry} material={materials.Material} position={[49.723, 26.08, -70.35]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.809, 1.131, 0.809]} />
      <mesh geometry={nodes.Plane002_Material_0.geometry} material={materials.Material} position={[63.68, 25.902, -90.13]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[3.399, 4.754, 4.754]} />
      <mesh geometry={nodes.Cube007_Material_0.geometry} material={materials.Material} position={[22.138, 26.822, -71.95]} rotation={[-Math.PI / 2, 0, -0.094]} scale={100} />
      <mesh geometry={nodes.Cube006_Material_0.geometry} material={materials.Material} position={[22.255, 26.425, -71.95]} rotation={[-Math.PI / 2, 0, 0.133]} scale={100} />
      <mesh geometry={nodes.Cube005_Material_0.geometry} material={materials.Material} position={[22.368, 26.026, -71.95]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane004_Material_0.geometry} material={materials.Material} position={[65.44, 25.902, -73.178]} rotation={[-Math.PI / 2, 0, 0]} scale={[3.399, 4.754, 4.754]} />
      <mesh geometry={nodes.Cube002_Material_0.geometry} material={materials.Material} position={[25.346, 34.966, -74.572]} rotation={[-Math.PI / 2, 0, 0.315]} scale={4.777} />
      <mesh geometry={nodes.Cylinder000_Material_0.geometry} material={materials.Material} position={[49.703, 26.08, -79.83]} rotation={[0, -1.5, 0]} scale={[0.186, 0.186, 4.101]} />
      <mesh geometry={nodes.Cube004_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane008_Material_0.geometry} material={materials.Material} position={[-29.611, 0.201, -42.112]} rotation={[-Math.PI / 2, 0, -1.927]} scale={[4.073, 5.696, 5.696]} />
      <mesh geometry={nodes.Cylinder001_Material_0.geometry} material={materials.Material} position={[49.351, 26.08, -76.893]} rotation={[Math.PI, 0.882, -Math.PI]} scale={[0.186, 0.186, 4.101]} />
      <mesh geometry={nodes.Plane001_Material_0.geometry} material={materials.Material} position={[40.983, 25.902, -70.086]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.807, 4.649, 4.649]} />
      <mesh geometry={nodes.Cube001_Material_0.geometry} material={materials.Material} position={[36.951, 35.546, -80.478]} rotation={[-Math.PI / 2, 0, 0]} scale={1.105} />
      <mesh geometry={nodes.Plane_Material_0.geometry} material={materials.Material} position={[36.951, 25.219, -80.478]} rotation={[-Math.PI / 2, 0, 0]} scale={[35.648, 15.259, 35.648]} />
      <mesh geometry={nodes.Cube_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/models/room/scene.gltf')
