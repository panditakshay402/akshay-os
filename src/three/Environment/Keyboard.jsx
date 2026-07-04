function Keyboard({

    position = [0,0,0],

    rotation = [0,0,0],

}){

    const rows = [

        14,

        14,

        13,

        12,

        8,

    ];

    return(

        <group

            position={position}

            rotation={rotation}

        >

            {/* ================= BASE ================= */}

            <mesh

                receiveShadow

            >

                <boxGeometry

                    args={[2.55,0.09,0.92]}

                />

                <meshStandardMaterial

                    color="#151922"

                    metalness={0.9}

                    roughness={0.15}

                />

            </mesh>

            {/* ================= RGB UNDERGLOW ================= */}

            <mesh

                position={[0,-0.03,0]}

            >

                <boxGeometry

                    args={[2.58,0.01,0.95]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2}

                />

            </mesh>

            {/* ================= KEYS ================= */}

            {

                rows.map((cols,row)=>(

                    [...Array(cols)].map((_,col)=>(

                        <mesh

                            key={`${row}-${col}`}

                            position={[

                                -1.08 + col * 0.165,

                                0.055,

                                -0.32 + row * 0.17

                            ]}

                        >

                            <boxGeometry

                                args={[

                                    0.12,

                                    0.045,

                                    0.12

                                ]}

                            />

                            <meshStandardMaterial

                                color="#222831"

                                emissive={

                                    row % 2 === 0

                                    ? "#00E5FF"

                                    : "#8B5CF6"

                                }

                                emissiveIntensity={0.4}

                            />

                        </mesh>

                    ))

                ))

            }

            {/* ================= SPACE BAR ================= */}

            <mesh

                position={[

                    0,

                    0.055,

                    0.35

                ]}

            >

                <boxGeometry

                    args={[

                        0.95,

                        0.045,

                        0.12

                    ]}

                />

                <meshStandardMaterial

                    color="#2A2F38"

                    emissive="#00E5FF"

                    emissiveIntensity={0.3}

                />

            </mesh>

        </group>

    );

}

export default Keyboard;