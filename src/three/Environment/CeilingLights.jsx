import { Float } from "@react-three/drei";

function CeilingLights() {

    const lights = [

        [-4.5,8.8,-2],

        [-2.25,8.8,-2],

        [0,8.8,-2],

        [2.25,8.8,-2],

        [4.5,8.8,-2],

    ];

    return (

        <>

            {

                lights.map((position,index)=>(

                    <Float

                        key={index}

                        speed={0.5 + index * 0.05}

                        rotationIntensity={0}

                        floatIntensity={0.04}

                    >

                        <group position={position}>

                            {/* ================= HOUSING ================= */}

                            <mesh>

                                <cylinderGeometry

                                    args={[

                                        0.22,

                                        0.22,

                                        0.12,

                                        32

                                    ]}

                                />

                                <meshStandardMaterial

                                    color="#242A34"

                                    metalness={1}

                                    roughness={0.18}

                                />

                            </mesh>

                            {/* ================= LIGHT GLASS ================= */}

                            <mesh

                                position={[0,-0.07,0]}

                            >

                                <sphereGeometry

                                    args={[

                                        0.11,

                                        24,

                                        24

                                    ]}

                                />

                                <meshStandardMaterial

                                    color={

                                        index % 2 === 0

                                        ? "#00E5FF"

                                        : "#8B5CF6"

                                    }

                                    emissive={

                                        index % 2 === 0

                                        ? "#00E5FF"

                                        : "#8B5CF6"

                                    }

                                    emissiveIntensity={2}

                                    transparent

                                    opacity={0.85}

                                />

                            </mesh>

                            {/* ================= SOFT LIGHT ================= */}

                            <pointLight

                                intensity={1.2}

                                distance={6}

                                decay={2}

                                color={

                                    index % 2 === 0

                                    ? "#00E5FF"

                                    : "#8B5CF6"

                                }

                            />

                        </group>

                    </Float>

                ))

            }

        </>

    );

}

export default CeilingLights;