import { Float } from "@react-three/drei";

function Cube() {

    return (

        <Float

            speed={2}

            rotationIntensity={2}

            floatIntensity={3}

        >

            <mesh
                castShadow
                receiveShadow
            >

                <boxGeometry args={[2,2,2]} />

                <meshStandardMaterial

                    color="#00E5FF"

                    metalness={1}

                    roughness={0.08}

                    emissive="#00E5FF"

                    emissiveIntensity={0.45}

                />

            </mesh>

        </Float>

    );

}

export default Cube;