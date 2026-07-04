import { Environment } from "@react-three/drei";

function Lights() {

    return (

        <>

            <ambientLight
                intensity={1.5}
            />

            <directionalLight

                position={[5,5,5]}

                intensity={2}

                castShadow

            />

            <pointLight

                position={[-5,-3,5]}

                intensity={1.5}

                color="#8B5CF6"

            />

            <pointLight

                position={[4,2,-4]}

                intensity={1.2}

                color="#00E5FF"

            />

            <Environment preset="city" />

        </>

    );

}

export default Lights;