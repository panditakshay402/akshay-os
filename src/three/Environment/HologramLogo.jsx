import { Text, Torus } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

function HologramLogo() {

    const ringOne = useRef();

    const ringTwo = useRef();

    useFrame((_, delta) => {

        if (ringOne.current) {

            ringOne.current.rotation.y += delta * 0.28;

        }

        if (ringTwo.current) {

            ringTwo.current.rotation.x += delta * 0.22;

            ringTwo.current.rotation.z -= delta * 0.16;

        }

    });

    return (

        <group position={[0,3.25,-3.2]}>

            <Text

                fontSize={0.32}

                color="#00E5FF"

                anchorX="center"

                anchorY="middle"

            >

                AKSHAY.OS

            </Text>

            <Text

                position={[0,-0.24,0]}

                fontSize={0.08}

                color="#8B5CF6"

                anchorX="center"

                anchorY="middle"

            >

                SOFTWARE ENGINEER

            </Text>

            <Torus

                ref={ringOne}

                args={[0.75,0.02,20,80]}

            >

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={1.3}

                    transparent

                    opacity={0.22}

                />

            </Torus>

            <Torus

                ref={ringTwo}

                rotation={[Math.PI/2,0,0]}

                args={[0.56,0.018,20,80]}

            >

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={1.2}

                    transparent

                    opacity={0.18}

                />

            </Torus>

        </group>

    );

}

export default HologramLogo;