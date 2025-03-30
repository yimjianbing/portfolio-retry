'use client';

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import RoomModel from "./RoomModel";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
    return (

            <Canvas camera={{ position: [3.5, 4, 3.5], fov: 45 }}>
                {/* <gridHelper args={[100, 100, 0xffffff, 0xffffff]} />
                <axesHelper args={[100]} /> */}
        
                <OrbitControls/>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <RoomModel />
                </Suspense>
            </Canvas>
    );
}