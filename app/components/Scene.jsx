'use client';

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import RoomModel from "./RoomModel";
import { OrbitControls} from "@react-three/drei";
import CameraAnimation from "../CameraAnimation";
import CameraHelper from "./CameraHelper";



export default function Scene() {
    return (

            <Canvas camera={{ position: [3.5, 4, 3.5], fov: 45 }} className="Canvas top-0 left-0 w-full h-full" style={{position: "fixed"}}>
                {/* <gridHelper args={[100, 100, 0xffffff, 0xffffff]} />
                <axesHelper args={[100]} /> */}
                <CameraAnimation />
                {/* <CameraHelper /> */}
                {/* <OrbitControls/> */}
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <RoomModel />
                </Suspense>
            </Canvas>
    );
}