function Mouse({

    position = [0,0,0],

    rotation = [0,0,0],

}) {

    return (

        <group

            position={position}

            rotation={rotation}

        >

            {/* ================= BODY ================= */}

            <mesh

                castShadow

                receiveShadow

                scale={[1,0.65,1.35]}

            >

                <sphereGeometry

                    args={[0.22,32,32]}

                />

                <meshStandardMaterial

                    color="#141821"

                    metalness={0.9}

                    roughness={0.12}

                />

            </mesh>

            {/* ================= RGB STRIP ================= */}

            <mesh

                position={[0,0.06,0.02]}

            >

                <boxGeometry

                    args={[0.05,0.28,0.02]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2}

                />

            </mesh>

            {/* ================= SCROLL WHEEL ================= */}

            <mesh

                position={[0,0.08,0.11]}

                rotation={[Math.PI/2,0,0]}

            >

                <cylinderGeometry

                    args={[0.025,0.025,0.05,24]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={1}

                />

            </mesh>

            {/* ================= LEFT BUTTON ================= */}

            <mesh

                position={[-0.06,0.02,0.14]}

            >

                <boxGeometry

                    args={[0.09,0.02,0.13]}

                />

                <meshStandardMaterial

                    color="#232A34"

                />

            </mesh>

            {/* ================= RIGHT BUTTON ================= */}

            <mesh

                position={[0.06,0.02,0.14]}

            >

                <boxGeometry

                    args={[0.09,0.02,0.13]}

                />

                <meshStandardMaterial

                    color="#232A34"

                />

            </mesh>

            {/* ================= BOTTOM GLOW ================= */}

            <pointLight

                position={[0,-0.08,0]}

                intensity={1.6}

                distance={1.2}

                color="#00E5FF"

            />

        </group>

    );

}

export default Mouse;