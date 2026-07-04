function Monitor({

    position = [0,0,0],

    rotation = [0,0,0],

    scale = 1,

    color = "#00E5FF",

}){

    return(

        <group

            position={position}

            rotation={rotation}

            scale={scale}

        >

            {/* ================= FRAME ================= */}

            <mesh castShadow>

                <boxGeometry

                    args={[2.2,1.35,0.08]}

                />

                <meshStandardMaterial

                    color="#0F1117"

                    metalness={1}

                    roughness={0.18}

                />

            </mesh>

            {/* ================= SCREEN ================= */}

            <mesh

                position={[0,0,0.043]}

            >

                <planeGeometry

                    args={[1.95,1.12]}

                />

                <meshStandardMaterial

                    color="#081018"

                    emissive={color}

                    emissiveIntensity={0.45}

                />

            </mesh>

            {/* ================= RGB BORDER ================= */}

            <mesh

                position={[0,0,0.046]}

            >

                <planeGeometry

                    args={[2.02,1.18]}

                />

                <meshStandardMaterial

                    color={color}

                    emissive={color}

                    emissiveIntensity={2}

                    transparent

                    opacity={0.10}

                />

            </mesh>

            {/* ================= STAND ================= */}

            <mesh

                position={[0,-0.92,0]}

            >

                <boxGeometry

                    args={[0.08,0.65,0.08]}

                />

                <meshStandardMaterial

                    color="#444"

                    metalness={1}

                />

            </mesh>

            {/* ================= BASE ================= */}

            <mesh

                position={[0,-1.28,0]}

            >

                <boxGeometry

                    args={[0.65,0.05,0.45]}

                />

                <meshStandardMaterial

                    color="#333"

                    metalness={1}

                />

            </mesh>

            {/* ================= CAMERA ================= */}

            <mesh

                position={[0,0.70,0.05]}

            >

                <sphereGeometry

                    args={[0.03,16,16]}

                />

                <meshStandardMaterial

                    color="#111"

                    emissive="#00E5FF"

                    emissiveIntensity={1.5}

                />

            </mesh>

            {/* ================= POWER LED ================= */}

            <mesh

                position={[0.98,-0.63,0.05]}

            >

                <sphereGeometry

                    args={[0.018,16,16]}

                />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={3}

                />

            </mesh>

        </group>

    );

}

export default Monitor;