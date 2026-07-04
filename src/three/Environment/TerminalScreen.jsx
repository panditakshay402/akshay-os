import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

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

    const [index,setIndex] = useState(0);

    useFrame((state)=>{

        if(screen.current){

            screen.current.material.opacity =

                0.82 +

                Math.sin(state.clock.elapsedTime * 6) * 0.12;

        }

        const value = Math.floor(

            state.clock.elapsedTime * 1.25

        );

        if(

            value !== index &&

            value < lines.length

        ){

            setIndex(value);

        }

    });

    return(

        <group position={[0,0.25,0.06]}>

            <mesh ref={screen}>

                <planeGeometry

                    args={[2.05,1.18]}

                />

                <meshStandardMaterial

                    color="#081018"

                    transparent

                    opacity={0.9}

                />

            </mesh>

            {

                lines

                .slice(0,index+1)

                .map((line,i)=>(

                    <Text

                        key={i}

                        position={[

                            -0.9,

                            0.42-(i*0.16),

                            0.01

                        ]}

                        anchorX="left"

                        fontSize={0.08}

                        color={

                            i===lines.length-1

                            ? "#00E5FF"

                            : "#7CFFB2"

                        }

                    >

                        {line}

                    </Text>

                ))

            }

        </group>

    );

}

export default TerminalScreen;