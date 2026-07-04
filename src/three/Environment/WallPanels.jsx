import { Float } from "@react-three/drei";

function WallPanel({

    position,

    rotation,

    color,

}) {

    return (

        <Float

            speed={1.2}

            rotationIntensity={0.08}

            floatIntensity={0.08}

        >

            <group

                position={position}

                rotation={rotation}

            >

                {/* Panel */}

                <mesh>

                    <boxGeometry

                        args={[2.2,3,0.12]}

                    />

                    <meshStandardMaterial

                        color="#111827"

                        metalness={0.9}

                        roughness={0.2}

                    />

                </mesh>

                {/* Glow Border */}

                <mesh position={[0,0,0.07]}>

                    <planeGeometry

                        args={[2,2.8]}

                    />

                    <meshStandardMaterial

                        color={color}

                        emissive={color}

                        emissiveIntensity={1.8}

                        transparent

                        opacity={0.18}

                    />

                </mesh>

                {/* Center Line */}

                <mesh position={[0,0,0.08]}>

                    <boxGeometry

                        args={[0.04,2.5,0.02]}

                    />

                    <meshStandardMaterial

                        color={color}

                        emissive={color}

                        emissiveIntensity={3}

                    />

                </mesh>

            </group>

        </Float>

    );

}

function WallPanels() {

    return (

        <>

            <WallPanel

                position={[-7,3,-7.9]}

                rotation={[0,0,0]}

                color="#00E5FF"

            />

            <WallPanel

                position={[-3.8,3,-7.9]}

                rotation={[0,0,0]}

                color="#8B5CF6"

            />

            <WallPanel

                position={[3.8,3,-7.9]}

                rotation={[0,0,0]}

                color="#00E5FF"

            />

            <WallPanel

                position={[7,3,-7.9]}

                rotation={[0,0,0]}

                color="#8B5CF6"

            />

        </>

    );

}

export default WallPanels;