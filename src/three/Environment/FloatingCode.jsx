import { Text, Float } from "@react-three/drei";

const snippets = [
    {
        text: "<React />",
        position: [-3, 2, -1],
        color: "#61DAFB",
    },
    {
        text: "const app = () => {}",
        position: [3, 1, -2],
        color: "#F7DF1E",
    },
    {
        text: "Three.js",
        position: [-2, -2, -1],
        color: "#FFFFFF",
    },
    {
        text: "Node.js",
        position: [2.8, -1.8, -2],
        color: "#68A063",
    },
    {
        text: "Playwright",
        position: [0, 3, -2],
        color: "#45BA63",
    },
    {
        text: "MongoDB",
        position: [-3.2, 0, -2],
        color: "#4DB33D",
    },
];

function FloatingCode() {

    return (

        <>

            {

                snippets.map((item,index)=>(

                    <Float

                        key={index}

                        speed={1.5 + index * .15}

                        rotationIntensity={0.5}

                        floatIntensity={1}

                    >

                        <Text

                            position={item.position}

                            fontSize={0.35}

                            color={item.color}

                            anchorX="center"

                            anchorY="middle"

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