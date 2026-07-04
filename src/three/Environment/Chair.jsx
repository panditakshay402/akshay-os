function Chair({

    position = [0,0,0],

    rotation = [0,0,0],

    scale = 1,

}){

    return(

        <group

            position={position}

            rotation={rotation}

            scale={scale}

        >

            {/* ================= SEAT ================= */}

            <mesh

                position={[0,0.62,0]}

                castShadow

            >

                <boxGeometry

                    args={[1.05,0.18,1.05]}

                />

                <meshStandardMaterial

                    color="#151922"

                    metalness={0.9}

                    roughness={0.15}

                />

            </mesh>

            {/* ================= BACK REST ================= */}

            <mesh

                position={[0,1.65,-0.38]}

            >

                <boxGeometry

                    args={[1.05,2.1,0.22]}

                />

                <meshStandardMaterial

                    color="#151922"

                    metalness={0.9}

                    roughness={0.18}

                />

            </mesh>

            {/* ================= HEAD REST ================= */}

            <mesh

                position={[0,2.55,-0.30]}

            >

                <boxGeometry

                    args={[0.72,0.30,0.16]}

                />

                <meshStandardMaterial

                    color="#232A34"

                />

            </mesh>

            {/* ================= LEFT ARM ================= */}

            <mesh

                position={[-0.60,1.10,0]}

            >

                <boxGeometry

                    args={[0.08,0.75,0.08]}

                />

                <meshStandardMaterial

                    color="#444"

                />

            </mesh>

            <mesh

                position={[-0.60,1.45,0]}

            >

                <boxGeometry

                    args={[0.32,0.06,0.65]}

                />

                <meshStandardMaterial

                    color="#232A34"

                />

            </mesh>

            {/* ================= RIGHT ARM ================= */}

            <mesh

                position={[0.60,1.10,0]}

            >

                <boxGeometry

                    args={[0.08,0.75,0.08]}

                />

                <meshStandardMaterial

                    color="#444"

                />

            </mesh>

            <mesh

                position={[0.60,1.45,0]}

            >

                <boxGeometry

                    args={[0.32,0.06,0.65]}

                />

                <meshStandardMaterial

                    color="#232A34"

                />

            </mesh>

            {/* ================= GAS LIFT ================= */}

            <mesh

                position={[0,0.15,0]}

            >

                <cylinderGeometry

                    args={[0.05,0.05,0.70,20]}

                />

                <meshStandardMaterial

                    color="#777"

                />

            </mesh>

            {/* ================= BASE ================= */}

            {

                [...Array(5)].map((_,i)=>{

                    const angle = (i * Math.PI * 2) / 5;

                    return(

                        <mesh

                            key={i}

                            position={[

                                Math.sin(angle)*0.45,

                                -0.18,

                                Math.cos(angle)*0.45

                            ]}

                            rotation={[

                                0,

                                -angle,

                                0

                            ]}

                        >

                            <boxGeometry

                                args={[

                                    0.55,

                                    0.05,

                                    0.08

                                ]}

                            />

                            <meshStandardMaterial

                                color="#444"

                            />

                        </mesh>

                    );

                })

            }

            {/* ================= RGB STRIP ================= */}

            <mesh

                position={[0,1.65,-0.24]}

            >

                <boxGeometry

                    args={[0.82,0.04,0.03]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={2}

                />

            </mesh>

            {/* ================= LOGO ================= */}

            <mesh

                position={[0,2.05,-0.26]}

            >

                <planeGeometry

                    args={[0.32,0.14]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={1.5}

                />

            </mesh>

        </group>

    );

}

export default Chair;