'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef} from "react";
import RoomModel from "./RoomModel";
import { OrbitControls} from "@react-three/drei";
import CameraAnimation from "../CameraAnimation";
import CameraHelper from "./CameraHelper";
import * as THREE from "three";
import { useDevice } from "../DeviceProvider";
import MobileCameraAnimation from "../MobileCameraAnimation";

function RotatingModel({ isMobile }) {
    const groupRef = useRef();
    
    // Run on each frame
    useFrame((state, delta) => {
      if (isMobile && groupRef.current) {
        groupRef.current.rotation.y += 0.005;
      }
    });
    
    return (
      <group ref={groupRef}>
        <RoomModel scale={isMobile ? 0.01 : 0.015} />
      </group>
    );
  }

export default function Scene() {
    const { isMobile } = useDevice();

    const cameraPosition = isMobile 
    ? [4, 4, 4] 
    : [0.66, -0.44, -0.75];

    // If you need to adjust other camera parameters
    const cameraProps = {
        position: cameraPosition,
        fov: 45, // Optional: adjust FOV for mobile if needed
    };

    return (

            <Canvas camera={cameraProps} className="Canvas top-0 left-0 w-full h-full" style={{position: "fixed"}}>
                {/* <gridHelper args={[100, 100, 0xffffff, 0xffffff]} />
                <axesHelper args={[100]} /> */}
                {isMobile ? <MobileCameraAnimation /> : <CameraAnimation />}
                {/* <CameraHelper /> */}
                {/* <OrbitControls/> */}
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <RotatingModel isMobile={isMobile} />
                </Suspense>
            </Canvas>
    );
}