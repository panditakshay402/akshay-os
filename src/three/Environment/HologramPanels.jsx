import { Float, Text } from "@react-three/drei";

function Panel({ position, title }) {

    return (

        <Float

            speed={1.4}

            rotationIntensity={0.2}

            floatIntensity={0.5}

        >

            <group position={position}>

                <mesh>

                    <planeGeometry args={[1.8,1.1]} />

                    <meshStandardMaterial

                        color="#00E5FF"

                        transparent

                        opacity={0.18}

                        emissive="#00E5FF"

                        emissiveIntensity={1}

                    />

                </mesh>

                <Text

                    position={[0,0.25,0.02]}

                    fontSize={0.12}

                    color="white"

                    anchorX="center"

                    anchorY="middle"

                >

                    {title}

                </Text>

                <Text

                    position={[0,-0.1,0.02]}

                    fontSize={0.06}

                    color="#00E5FF"

                    anchorX="center"

                    anchorY="middle"

                >

                    SYSTEM ONLINE

                </Text>

            </group>

        </Float>

    );

}

function HologramPanels() {

    return (

        <>

            <Panel

                position={[-3.4,1.3,-1]}

                title="PORTFOLIO"

            />

            <Panel

                position={[3.4,1.3,-1]}

                title="PROJECTS"

            />

            <Panel

                position={[0,2.8,-2]}

                title="IBM"

            />

        </>

    );

}

export default HologramPanels;