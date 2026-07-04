import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

function GridFloor() {

    const group = useRef();

    useFrame((state) => {

        if (!group.current) return;

        group.current.position.z =

            Math.sin(state.clock.elapsedTime * 0.4) * 0.15;

    });

    const lines = [];

    for (let i = -12; i <= 12; i++) {

        lines.push(

            <mesh

                key={`x-${i}`}

                position={[i, -3.19, 0]}

                rotation={[-Math.PI / 2, 0, 0]}

            >

                <planeGeometry args={[0.025, 24]} />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={1.6}

                    transparent

                    opacity={0.32}

                />

            </mesh>

        );

        lines.push(

            <mesh

                key={`z-${i}`}

                position={[0, -3.19, i]}

                rotation={[-Math.PI / 2, 0, Math.PI / 2]}

            >

                <planeGeometry args={[0.025, 24]} />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={1.6}

                    transparent

                    opacity={0.28}

                />

            </mesh>

        );

    }

    return (

        <group ref={group}>

            {lines}

        </group>

    );

}

export default GridFloor;