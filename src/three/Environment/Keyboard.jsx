function Keyboard({

    position = [0,0,0],

    rotation = [0,0,0],

}){

    const rows = 5;

    const cols = 14;

    return(

        <group

            position={position}

            rotation={rotation}

        >

            {/* Keyboard Base */}

            <mesh receiveShadow>

                <boxGeometry args={[2.4,.08,.8]} />

                <meshStandardMaterial

                    color="#161B22"

                    metalness={.85}

                    roughness={.18}

                />

            </mesh>

            {/* Keys */}

            {

                [...Array(rows)].map((_,row)=>

                    [...Array(cols)].map((_,col)=>(

                        <mesh

                            key={`${row}-${col}`}

                            position={[

                                -1.02 + col * .16,

                                .055,

                                -.28 + row * .14

                            ]}

                        >

                            <boxGeometry

                                args={[

                                    .11,

                                    .04,

                                    .11

                                ]}

                            />

                            <meshStandardMaterial

                                color="#222"

                                emissive={

                                    row % 2 === 0

                                    ? "#00E5FF"

                                    : "#8B5CF6"

                                }

                                emissiveIntensity={.45}

                            />

                        </mesh>

                    ))

                )

            }

        </group>

    );

}

export default Keyboard;