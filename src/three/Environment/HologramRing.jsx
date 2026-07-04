import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function HologramRing() {

    const ring = useRef();

    useFrame((_, delta) => {

        if (!ring.current) return;

        ring.current.rotation.z += delta * 0.6;

        ring.current.rotation.x += delta * 0.15;

    });

    return (

        <group position={[0,1.2,0]}>

            <Torus

                ref={ring}

                args={[2.2,0.05,32,150]}

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

                rotation={[Math.PI/2,0,0]}

                args={[1.5,0.04,32,120]}

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

export default HologramRing;