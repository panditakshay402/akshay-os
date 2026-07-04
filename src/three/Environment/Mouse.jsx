function Mouse({

    position = [0,0,0],

    rotation = [0,0,0],

}){

    return(

        <group

            position={position}

            rotation={rotation}

        >

            {/* Mouse Body */}

            <mesh

                castShadow

                receiveShadow

            >

                <capsuleGeometry

                    args={[0.18,0.35,8,16]}

                />

                <meshStandardMaterial

                    color="#181818"

                    metalness={0.9}

                    roughness={0.12}

                />

            </mesh>

            {/* RGB Strip */}

            <mesh

                position={[0,0.05,0.01]}

            >

                <boxGeometry

                    args={[0.05,0.25,0.02]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={1.8}

                />

            </mesh>

            {/* Scroll Wheel */}

            <mesh

                position={[0,0.08,0.1]}

            >

                <cylinderGeometry

                    args={[0.025,0.025,0.05,16]}

                />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={0.8}

                />

            </mesh>

            {/* Left Click */}

            <mesh

                position={[-0.055,0.02,0.15]}

            >

                <boxGeometry

                    args={[0.08,0.02,0.12]}

                />

                <meshStandardMaterial

                    color="#232323"

                />

            </mesh>

            {/* Right Click */}

            <mesh

                position={[0.055,0.02,0.15]}

            >

                <boxGeometry

                    args={[0.08,0.02,0.12]}

                />

                <meshStandardMaterial

                    color="#232323"

                />

            </mesh>

        </group>

    );

}

export default Mouse;