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

            {/* Seat */}

            <mesh

                position={[0,.6,0]}

                castShadow

            >

                <boxGeometry

                    args={[1,.18,1]}

                />

                <meshStandardMaterial

                    color="#181A20"

                    metalness={.8}

                    roughness={.2}

                />

            </mesh>

            {/* Back Rest */}

            <mesh

                position={[0,1.5,-.38]}

            >

                <boxGeometry

                    args={[1,.18,1.7]}

                />

                <meshStandardMaterial

                    color="#181A20"

                    metalness={.8}

                    roughness={.2}

                />

            </mesh>

            {/* Head Rest */}

            <mesh

                position={[0,2.35,-.35]}

            >

                <boxGeometry

                    args={[.72,.16,.42]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={.55}

                />

            </mesh>

            {/* Chair Stand */}

            <mesh

                position={[0,.15,0]}

            >

                <cylinderGeometry

                    args={[.05,.05,.7,20]}

                />

                <meshStandardMaterial

                    color="#555"

                />

            </mesh>

            {/* Base */}

            {

                [...Array(5)].map((_,i)=>{

                    const angle=(i*Math.PI*2)/5;

                    return(

                        <mesh

                            key={i}

                            rotation={[0,-angle,0]}

                            position={[

                                Math.sin(angle)*.45,

                                -.18,

                                Math.cos(angle)*.45

                            ]}

                        >

                            <boxGeometry

                                args={[

                                    .5,

                                    .05,

                                    .08

                                ]}

                            />

                            <meshStandardMaterial

                                color="#333"

                            />

                        </mesh>

                    );

                })

            }

            {/* RGB Strip */}

            <mesh

                position={[0,1.5,.48]}

            >

                <boxGeometry

                    args={[

                        .82,

                        .04,

                        .04

                    ]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={1}

                />

            </mesh>

        </group>

    );

}

export default Chair;