import { Float, Text } from "@react-three/drei";

const snippets = [

    {

        text: "<React />",

        position: [-4.4,2.2,-5.5],

        color: "#61DAFB",

    },

    {

        text: "const app = () => {}",

        position: [4.2,1.4,-5.8],

        color: "#F7DF1E",

    },

    {

        text: "Three.js",

        position: [-4.1,-1.6,-5.6],

        color: "#FFFFFF",

    },

    {

        text: "Node.js",

        position: [4.2,-1.9,-5.7],

        color: "#68A063",

    },

    {

        text: "Playwright",

        position: [0,3.2,-6],

        color: "#45BA63",

    },

    {

        text: "MongoDB",

        position: [0,-2.8,-6],

        color: "#4DB33D",

    },

];

function FloatingCode() {

    return (

        <>

            {

                snippets.map((item,index)=>(

                    <Float

                        key={item.text}

                        speed={

                            0.7 + index * 0.08

                        }

                        rotationIntensity={0.08}

                        floatIntensity={0.35}

                    >

                        <Text

                            position={item.position}

                            fontSize={0.22}

                            color={item.color}

                            anchorX="center"

                            anchorY="middle"

                            fillOpacity={0.35}

                            outlineWidth={0.003}

                            outlineColor="#000000"

                        >

                            {item.text}

                        </Text>

                    </Float>

                ))

            }

        </>

    );

}

export default FloatingCode;