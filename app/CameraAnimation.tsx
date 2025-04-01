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

    const t1 = gsap.timeline();

    useFrame(() => {
        camera.lookAt(cameraTarget);
    })

    useGSAP(() => {
        t1.fromTo(
            camera.position,
            {x: 3.5, y: 4, z: 3.5},
            {x: 1.5, y: 2, z: 0.5, 
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".HelloThereContainer",
                    start: "top +100",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            duration: 2});
        t1.fromTo(
            camera.position,
            {x: 1.5, y: 2, z: 0.5},
            {x: 0.2, y: 0.1, z: 0.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".AboutMeContainer",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    markers: true,
                },
            duration: 1});  
        t1.fromTo(
            camera.position,
            {x: 0.2, y: 0.5, z: 0.5},
            {x: 0.8019640468335975, y: -0.30771398861655985, z: -0.4005187239832815,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".ProjectsTitle",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    markers: true,
                },
                duration: 2});
        t1.fromTo(
            cameraTarget,
            {x: 0, y: 0, z: 0},
            {x: 1, y: -1, z: -2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".ProjectsTitle",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    markers: true,
                },
            },
                "<"
        );
        
    })

    return null
}


