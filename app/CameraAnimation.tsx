import { gsap }from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

    const cameraTarget = new THREE.Vector3(0.33, -0.65, -2);

export default function CameraAnimation() {

    const camera = useThree((state) => state.camera);

    const t1 = gsap.timeline();

    useFrame(() => {
        camera.lookAt(cameraTarget);
    })

    useGSAP(() => {
        t1.fromTo(
            camera.position,
            // {x: 3.5, y: 4, z: 3.5},
            {x: 0.66, y: -0.44, z: -0.75},
            {x: 1.5, y: 2, z: 0.5, 
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".HelloThereContainer",
                    start: "top +100",
                    end: "bottom top",
                    scrub: true,
                    
                }});
        t1.fromTo(
            cameraTarget,
            // {x: 3.5, y: 4, z: 3.5},
            {x: 0.33, y: -0.65, z: -2},
            {x: 0, y: 0, z: 0, 
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".HelloThereContainer",
                    start: "top +100",
                    end: "bottom top",
                    scrub: true,
                    
                }}
                ,"<"
            );
        t1.fromTo(
            camera.position,
            {x: 1.5, y: 2, z: 0.5, },
            // {x: 0.33, y: -0.65, z: -2},
            {x: 3, y: 1, z: 6,
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".AboutMeContainer",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
        
                }}
            );  

            t1.fromTo(
                cameraTarget,
                // {x: 3.5, y: 4, z: 3.5},
                {x: 0, y: 0, z: 0},
                {x: -2, y: 0, z: 0, 
                    ease: "power3.inOut",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: ".AboutMeContainer",
                        start: "top +100",
                        end: "bottom top",
                        scrub: true,
                        
                    }}
                    ,"<"
                );

        t1.fromTo(
            camera.position,
            {x: 3, y: 1, z: 6},
            {x: -0.45, y: -0.4, z: -0.45,
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".projectscontainer",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                }});
        t1.fromTo(
            cameraTarget,
            {x: -2, y: 0, z: 0},
            {x: -0.60, y: -1, z: -0.60,
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".projectscontainer",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                },
            },
                "<"
        );

        t1.fromTo(
            camera.position,
            {x: -0.45, y: -0.4, z: -0.45,},
            {x: 0.83, y: -0.4, z: -0.3,
                ease: "power1.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".experiencecontainer",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }});
        t1.fromTo(
            cameraTarget,
            {x: -0.60, y: -1, z: -0.60,},
            {x: 0.8, y: -0.54, z: -2,
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".experiencecontainer",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            },
                "<"
        );

        t1.fromTo(
            camera.position,
            {x: 0.83, y: -0.4, z: -0.3,},
            {x: 0.66, y: -0.44, z: -0.75,
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".skillscontainer",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
        
                }});
        t1.fromTo(
            cameraTarget,
            {x: 0.8, y: -0.54, z: -2,},
            {x: 0.33, y: -0.65, z: -2,
                ease: "power3.inOut",
                immediateRender: false,
                scrollTrigger: {
                    trigger: ".skillscontainer",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
        
                },
            },
                "<"
        );
        
    })

    return null
}


