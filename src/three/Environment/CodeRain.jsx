import { Text, Float } from "@react-three/drei";

const symbols = [
    "{ }",
    "</>",
    "const",
    "=>",
    "React",
    "JS",
    "HTML",
    "CSS",
    "Node",
    "SQL",
    "Git",
    "API",
    "npm",
    "useState",
    "useEffect",
    "async",
    "await",
];

function CodeRain() {

    return (

        <>

            {

                symbols.map((symbol,index)=>(

                    <Float

                        key={index}

                        speed={

                            1 + (index * 0.12)

                        }

                        rotationIntensity={0.2}

                        floatIntensity={2}

                    >

                        <Text

                            position={[

                                (index % 4) * 2 - 3,

                                6 - index * 0.7,

                                -4 - (index % 3)

                            ]}

                            fontSize={0.18}

                            color={

                                index % 2 === 0

                                ? "#00E5FF"

                                : "#8B5CF6"

                            }

                            anchorX="center"

                            anchorY="middle"

                        >

                            {symbol}

                        </Text>

                    </Float>

                ))

            }

        </>

    );

}

export default CodeRain;
