import { Text, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function HologramLogo() {

    const ringOne = useRef();

    const ringTwo = useRef();

    useFrame((_, delta) => {

        if (ringOne.current) {

            ringOne.current.rotation.y += delta * 0.45;

            ringOne.current.rotation.x += delta * 0.15;

        }

        if (ringTwo.current) {

            ringTwo.current.rotation.y -= delta * 0.65;

            ringTwo.current.rotation.z += delta * 0.18;

        }

    });

    return (

        <group position={[0,4.2,-2]}>

            <Text

                fontSize={0.45}

                color="#00E5FF"

                anchorX="center"

                anchorY="middle"

            >

                AKSHAY.OS

            </Text>

            <Text

                position={[0,-0.45,0]}

                fontSize={0.12}

                color="#8B5CF6"

                anchorX="center"

                anchorY="middle"

            >

                SOFTWARE ENGINEER

            </Text>

            <Torus

                ref={ringOne}

                args={[1.15,0.03,32,120]}

            >

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2}

                    transparent

                    opacity={0.45}

                />

            </Torus>

            <Torus

                ref={ringTwo}

                rotation={[Math.PI/2,0,0]}

                args={[0.85,0.025,32,120]}

            >

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={2}

                    transparent

                    opacity={0.35}

                />

            </Torus>

        </group>

    );

}

export default HologramLogo;