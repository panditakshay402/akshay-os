import { Float } from "@react-three/drei";

function CyberDesk() {

    return (

        <Float

            speed={1.2}

            rotationIntensity={0.2}

            floatIntensity={0.25}

        >

            <group position={[0,-2.2,0]}>

                {/* Desk */}

                <mesh position={[0,-1.2,0]} receiveShadow>

                    <boxGeometry args={[6,0.25,3]} />

                    <meshStandardMaterial

                        color="#171C28"

                        metalness={0.7}

                        roughness={0.25}

                    />

                </mesh>

                {/* Left Monitor */}

                <mesh position={[-1.6,0,0]} castShadow>

                    <boxGeometry args={[1.4,0.9,0.08]} />

                    <meshStandardMaterial

                        color="#00E5FF"

                        emissive="#00E5FF"

                        emissiveIntensity={0.6}

                    />

                </mesh>

                {/* Center Monitor */}

                <mesh position={[0,0.25,0]} castShadow>

                    <boxGeometry args={[2.2,1.3,0.08]} />

                    <meshStandardMaterial

                        color="#8B5CF6"

                        emissive="#8B5CF6"

                        emissiveIntensity={0.7}

                    />

                </mesh>

                {/* Right Monitor */}

                <mesh position={[1.6,0,0]} castShadow>

                    <boxGeometry args={[1.4,0.9,0.08]} />

                    <meshStandardMaterial

                        color="#00E5FF"

                        emissive="#00E5FF"

                        emissiveIntensity={0.6}

                    />

                </mesh>

                {/* Keyboard */}

                <mesh position={[0,-0.75,0.8]}>

                    <boxGeometry args={[2,0.08,0.55]} />

                    <meshStandardMaterial

                        color="#222"

                        emissive="#00E5FF"

                        emissiveIntensity={0.2}

                    />

                </mesh>

                {/* Mouse */}

                <mesh position={[1.55,-0.75,0.85]}>

                    <boxGeometry args={[0.25,0.08,0.4]} />

                    <meshStandardMaterial

                        color="#333"

                        emissive="#8B5CF6"

                        emissiveIntensity={0.3}

                    />

                </mesh>

            </group>

        </Float>

    );

}

export default CyberDesk;