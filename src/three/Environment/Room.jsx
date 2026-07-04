function Room() {

    return (

        <group>

            {/* ================= FLOOR ================= */}

            <mesh

                rotation={[-Math.PI / 2, 0, 0]}

                position={[0, -3.3, 0]}

                receiveShadow

            >

                <planeGeometry

                    args={[40, 40]}

                />

                <meshStandardMaterial

                    color="#090D15"

                    metalness={0.9}

                    roughness={0.15}

                />

            </mesh>

            {/* ================= BACK WALL ================= */}

            <mesh

                position={[0, 3.4, -8]}

            >

                <boxGeometry

                    args={[20, 14, 0.25]}

                />

                <meshStandardMaterial

                    color="#111827"

                />

            </mesh>

            {/* ================= LEFT WALL ================= */}

            <mesh

                position={[-10, 3.4, 0]}

                rotation={[0, Math.PI / 2, 0]}

            >

                <boxGeometry

                    args={[16, 14, 0.25]}

                />

                <meshStandardMaterial

                    color="#0F172A"

                />

            </mesh>

            {/* ================= RIGHT WALL ================= */}

            <mesh

                position={[10, 3.4, 0]}

                rotation={[0, Math.PI / 2, 0]}

            >

                <boxGeometry

                    args={[16, 14, 0.25]}

                />

                <meshStandardMaterial

                    color="#0F172A"

                />

            </mesh>

            {/* ================= CEILING ================= */}

            <mesh

                position={[0, 10.2, 0]}

                rotation={[Math.PI / 2, 0, 0]}

            >

                <planeGeometry

                    args={[20, 16]}

                />

                <meshStandardMaterial

                    color="#141B27"

                />

            </mesh>

            {/* ================= LEFT RGB ================= */}

            <mesh

                position={[-9.8, 4.7, -2]}

            >

                <boxGeometry

                    args={[0.05, 8, 0.05]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2.2}

                />

            </mesh>

            {/* ================= RIGHT RGB ================= */}

            <mesh

                position={[9.8, 4.7, -2]}

            >

                <boxGeometry

                    args={[0.05, 8, 0.05]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={2.2}

                />

            </mesh>

            {/* ================= TOP RGB ================= */}

            <mesh

                position={[0, 9.8, -2]}

            >

                <boxGeometry

                    args={[10, 0.05, 0.05]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2}

                />

            </mesh>

            {/* ================= BOTTOM RGB ================= */}

            <mesh

                position={[0, -2.9, -2]}

            >

                <boxGeometry

                    args={[10, 0.05, 0.05]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={2}

                />

            </mesh>

        </group>

    );

}

export default Room;