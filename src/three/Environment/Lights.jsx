import { Environment } from "@react-three/drei";

function Lights() {

    return (

        <>

            {/* ================= AMBIENT ================= */}

            <ambientLight

                intensity={0.45}

            />

            {/* ================= MAIN KEY LIGHT ================= */}

            <directionalLight

                position={[6,8,5]}

                intensity={2.5}

                castShadow

                shadow-mapSize-width={2048}

                shadow-mapSize-height={2048}

            />

            {/* ================= CYAN FILL ================= */}

            <pointLight

                position={[-5,3,5]}

                intensity={2}

                color="#00E5FF"

                distance={18}

            />

            {/* ================= PURPLE FILL ================= */}

            <pointLight

                position={[5,2,-5]}

                intensity={1.8}

                color="#8B5CF6"

                distance={18}

            />

            {/* ================= OVERHEAD ================= */}

            <spotLight

                position={[0,9,2]}

                angle={0.45}

                penumbra={1}

                intensity={2}

                castShadow

                color="#FFFFFF"

            />

            {/* ================= BACK RIM ================= */}

            <spotLight

                position={[0,4,-8]}

                angle={0.5}

                penumbra={1}

                intensity={1.6}

                color="#00E5FF"

            />

            {/* ================= FRONT RIM ================= */}

            <spotLight

                position={[0,4,8]}

                angle={0.5}

                penumbra={1}

                intensity={1.2}

                color="#8B5CF6"

            />

            {/* ================= HDRI ================= */}

            <Environment

                preset="city"

            />

        </>

    );

}

export default Lights;