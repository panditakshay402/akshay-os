import { Text } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

const lines = [

    "> npm run dev",

    "✓ Vite Server Started",

    "✓ React Loaded",

    "✓ Three.js Loaded",

    "✓ GSAP Loaded",

    "✓ Portfolio Ready",

    "> Welcome Akshay",

];

function TerminalScreen() {

    const screen = useRef();

    const textGroup = useRef();

    useFrame((state)=>{

        if(screen.current){

            screen.current.material.opacity =

                0.86 +

                Math.sin(

                    state.clock.elapsedTime * 5

                ) * 0.08;

        }

        if(textGroup.current){

            textGroup.current.position.y =

                Math.sin(

                    state.clock.elapsedTime

                ) * 0.01;

        }

    });

    return(

        <group>

            {/* Screen */}

            <mesh

                ref={screen}

                position={[0,0,0.03]}

            >

                <planeGeometry

                    args={[1.95,1.08]}

                />

                <meshStandardMaterial

                    color="#071018"

                    transparent

                    opacity={0.9}

                />

            </mesh>

            {/* Code */}

            <group

                ref={textGroup}

            >

                {

                    lines.map((line,index)=>(

                        <Text

                            key={index}

                            position={[

                                -0.84,

                                0.38 -

                                index * 0.14,

                                0.05

                            ]}

                            anchorX="left"

                            fontSize={0.075}

                            color={

                                index===0

                                ? "#00E5FF"

                                : "#7CFFB2"

                            }

                        >

                            {line}

                        </Text>

                    ))

                }

            </group>

        </group>

    );

}

export default TerminalScreen;