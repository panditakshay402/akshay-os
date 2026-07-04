import { Torus } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

function HologramRing() {

    const ringOne = useRef();

    const ringTwo = useRef();

    useFrame((_, delta) => {

        if (ringOne.current) {

            ringOne.current.rotation.y += delta * 0.35;

            ringOne.current.rotation.x += delta * 0.08;

        }

        if (ringTwo.current) {

            ringTwo.current.rotation.y -= delta * 0.5;

            ringTwo.current.rotation.z += delta * 0.12;

        }

    });

    return (

        <group position={[0,1.45,-0.25]}>

            <Torus

                ref={ringOne}

                args={[1.35,0.03,24,100]}

            >

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={1.4}

                    transparent

                    opacity={0.25}

                />

            </Torus>

            <Torus

                ref={ringTwo}

                rotation={[Math.PI/2,0,0]}

                args={[0.95,0.025,24,90]}

            >

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={1.2}

                    transparent

                    opacity={0.22}

                />

            </Torus>

        </group>

    );

}

export default HologramRing;