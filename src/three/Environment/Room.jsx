function Room() {

    return (

        <group>

            {/* Floor */}

            <mesh

                rotation={[-Math.PI / 2,0,0]}

                position={[0,-3.25,0]}

                receiveShadow

            >

                <planeGeometry

                    args={[30,30]}

                />

                <meshStandardMaterial

                    color="#090C14"

                    metalness={0.9}

                    roughness={0.12}

                />

            </mesh>

            {/* Back Wall */}

            <mesh

                position={[0,3,-8]}

                receiveShadow

            >

                <planeGeometry

                    args={[30,15]}

                />

                <meshStandardMaterial

                    color="#0F172A"

                />

            </mesh>

            {/* Left Wall */}

            <mesh

                position={[-10,3,0]}

                rotation={[0,Math.PI/2,0]}

            >

                <planeGeometry

                    args={[30,15]}

                />

                <meshStandardMaterial

                    color="#0B1220"

                />

            </mesh>

            {/* Right Wall */}

            <mesh

                position={[10,3,0]}

                rotation={[0,-Math.PI/2,0]}

            >

                <planeGeometry

                    args={[30,15]}

                />

                <meshStandardMaterial

                    color="#0B1220"

                />

            </mesh>

            {/* Ceiling */}

            <mesh

                position={[0,9,0]}

                rotation={[Math.PI/2,0,0]}

            >

                <planeGeometry

                    args={[30,30]}

                />

                <meshStandardMaterial

                    color="#111827"

                />

            </mesh>

            {/* Neon Strip Left */}

            <mesh

                position={[-9.7,5,-2]}

                rotation={[0,Math.PI/2,0]}

            >

                <boxGeometry

                    args={[0.08,6,0.08]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2}

                />

            </mesh>

            {/* Neon Strip Right */}

            <mesh

                position={[9.7,5,-2]}

                rotation={[0,Math.PI/2,0]}

            >

                <boxGeometry

                    args={[0.08,6,0.08]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={2}

                />

            </mesh>

            {/* Top Neon */}

            <mesh

                position={[0,8.8,-2]}

            >

                <boxGeometry

                    args={[8,0.08,0.08]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={2}

                />

            </mesh>

        </group>

    );

}

export default Room;