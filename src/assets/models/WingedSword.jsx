/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/WingedSword.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100}
          near={0.1}
          fov={39.598}
          position={[-18.644, 1.739, 0.412]}
          rotation={[0, -1.571, 0]}
        />
        <directionalLight
          name="Light001"
          intensity={273}
          decay={2}
          position={[-23.343, 20.334, -0.61]}
          rotation={[-1.606, -1.004, 2.144]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          name="Light002"
          intensity={273}
          decay={2}
          position={[-23.343, -15.262, -0.61]}
          rotation={[1.821, -0.986, -0.655]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.005']}
          position={[0, 3.74, 2.588]}
          rotation={[Math.PI / 4, 0, 0]}
          scale={[0.49, 0.62, 0.62]}>
          <mesh
            name="blade"
            castShadow
            receiveShadow
            geometry={nodes.blade.geometry}
            material={materials['Procedural Obsidian']}
            position={[-0.188, -6.877, 0.343]}
            scale={[0.206, 1.614, 1.614]}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Procedural Obsidian']}
            position={[-0.08, -2.49, -1.837]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.281, 0.222, 0.222]}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Procedural Obsidian']}
            position={[-0.089, -2.49, 1.472]}
            scale={[0.281, 0.222, 0.222]}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Procedural Obsidian']}
            position={[0, 1.858, -2.136]}
            rotation={[-Math.PI, 0, 0]}
            scale={[0.281, 0.222, 0.222]}
          />
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['Procedural Obsidian']}
            position={[0, 1.858, 2.046]}
            rotation={[0, 0, -Math.PI]}
            scale={[0.281, 0.222, 0.222]}
          />
          <mesh
            name="hilt"
            castShadow
            receiveShadow
            geometry={nodes.hilt.geometry}
            material={materials['Procedural amber']}
            position={[0, -5.907, -0.005]}
            scale={[2.042, 1.614, 1.614]}
          />
          <mesh
            name="hilt_stinger"
            castShadow
            receiveShadow
            geometry={nodes.hilt_stinger.geometry}
            material={materials['Procedural Obsidian']}
            position={[0, 2.157, -0.005]}
            scale={[0.678, 0.536, 0.536]}
          />
          <mesh
            name="Sphere001"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials['Material.006']}
            position={[0, -2.372, -0.053]}
            rotation={[1.638, 0.526, -1.706]}
            scale={[1.073, 1.955, 1.435]}
          />
          <mesh
            name="Wing_BR001"
            castShadow
            receiveShadow
            geometry={nodes.Wing_BR001.geometry}
            material={materials.wing_material}
            position={[-0.139, -1.323, 2.539]}
            scale={[0.174, 1.614, 1.614]}
          />
          <mesh
            name="Wing_BR002"
            castShadow
            receiveShadow
            geometry={nodes.Wing_BR002.geometry}
            material={materials.wing_material}
            position={[-0.624, -1.323, -2.513]}
            rotation={[Math.PI, -0.179, Math.PI]}
            scale={[0.173, 1.614, 1.629]}
          />
          <mesh
            name="Wing_TR"
            castShadow
            receiveShadow
            geometry={nodes.Wing_TR.geometry}
            material={materials.wing_material}
            position={[-0.119, -1.46, 2.722]}
            scale={[0.089, 1.614, 1.614]}
          />
          <mesh
            name="Wing_TR001"
            castShadow
            receiveShadow
            geometry={nodes.Wing_TR001.geometry}
            material={materials.wing_material}
            position={[-0.473, -1.46, -2.674]}
            rotation={[Math.PI, -0.179, Math.PI]}
            scale={[0.089, 1.614, 1.629]}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/WingedSword.glb')
