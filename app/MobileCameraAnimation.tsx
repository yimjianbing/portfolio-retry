import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const cameraTarget = new THREE.Vector3(0, 0, 0);

export default function CameraAnimation() {

    const camera = useThree((state) => state.camera);


    useFrame(() => {
        camera.lookAt(cameraTarget);
    })

    return null
}


