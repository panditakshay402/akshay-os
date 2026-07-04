import { Float } from "@react-three/drei";

function CeilingLights() {

    const lights = [

        [-4,8.6,-2],

        [-2,8.6,-2],

        [0,8.6,-2],

        [2,8.6,-2],

        [4,8.6,-2],

    ];

    return (

        <>

            {

                lights.map((position,index)=>(

                    <Float

                        key={index}

                        speed={1 + index * .15}

                        floatIntensity={.12}

                        rotationIntensity={0}

                    >

                        <group position={position}>

                            {/* Housing */}

                            <mesh>

                                <cylinderGeometry

                                    args={[

                                        .18,

                                        .18,

                                        .08,

                                        32

                                    ]}

                                />

                                <meshStandardMaterial

                                    color="#20242D"

                                    metalness={1}

                                    roughness={.2}

                                />

                            </mesh>

                            {/* RGB Glow */}

                            <mesh position={[0,-.05,0]}>

                                <sphereGeometry

                                    args={[

                                        .11,

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

                                    emissiveIntensity={3}

                                />

                            </mesh>

                            <pointLight

                                intensity={3}

                                distance={5}

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