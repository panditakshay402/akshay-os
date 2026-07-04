import { Float } from "@react-three/drei";

function CyberDesk() {

    return (

        <Float

            speed={1}

            rotationIntensity={0.08}

            floatIntensity={0.08}

        >

            <group position={[0,-2.25,0]}>

                {/* ===================== */}
                {/* TABLE TOP */}
                {/* ===================== */}

                <mesh

                    position={[0,-0.65,0]}

                    receiveShadow

                >

                    <boxGeometry

                        args={[6.5,0.18,3.2]}

                    />

                    <meshStandardMaterial

                        color="#141A25"

                        metalness={0.9}

                        roughness={0.18}

                    />

                </mesh>

                {/* ===================== */}
                {/* LEFT LEG */}
                {/* ===================== */}

                <mesh

                    position={[-2.8,-1.6,-1.25]}

                >

                    <boxGeometry

                        args={[0.18,1.9,0.18]}

                    />

                    <meshStandardMaterial

                        color="#2A2F38"

                    />

                </mesh>

                {/* RIGHT LEG */}

                <mesh

                    position={[2.8,-1.6,-1.25]}

                >

                    <boxGeometry

                        args={[0.18,1.9,0.18]}

                    />

                    <meshStandardMaterial

                        color="#2A2F38"

                    />

                </mesh>

                {/* LEFT FRONT */}

                <mesh

                    position={[-2.8,-1.6,1.25]}

                >

                    <boxGeometry

                        args={[0.18,1.9,0.18]}

                    />

                    <meshStandardMaterial

                        color="#2A2F38"

                    />

                </mesh>

                {/* RIGHT FRONT */}

                <mesh

                    position={[2.8,-1.6,1.25]}

                >

                    <boxGeometry

                        args={[0.18,1.9,0.18]}

                    />

                    <meshStandardMaterial

                        color="#2A2F38"

                    />

                </mesh>

                {/* ===================== */}
                {/* RGB STRIP */}
                {/* ===================== */}

                <mesh

                    position={[0,-0.73,1.57]}

                >

                    <boxGeometry

                        args={[6.15,0.04,0.04]}

                    />

                    <meshStandardMaterial

                        color="#00E5FF"

                        emissive="#00E5FF"

                        emissiveIntensity={2}

                    />

                </mesh>

                {/* ===================== */}
                {/* CPU */}
                {/* ===================== */}

                <mesh

                    position={[-2.1,-1.2,-0.95]}

                    castShadow

                >

                    <boxGeometry

                        args={[0.8,1.5,1.6]}

                    />

                    <meshStandardMaterial

                        color="#111827"

                        metalness={1}

                        roughness={0.15}

                    />

                </mesh>

                {/* CPU RGB */}

                <mesh

                    position={[-1.69,-1.2,-0.15]}

                >

                    <planeGeometry

                        args={[0.02,1.2]}

                    />

                    <meshStandardMaterial

                        color="#8B5CF6"

                        emissive="#8B5CF6"

                        emissiveIntensity={4}

                    />

                </mesh>

            </group>

        </Float>

    );

}

export default CyberDesk;