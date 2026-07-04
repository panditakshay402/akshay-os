import { useGLTF, Float } from "@react-three/drei";

/*
-------------------------------------------------

TEMP MODEL

Later replace this path with your downloaded
GLB model.

Example

/models/anime-boy.glb

-------------------------------------------------
*/

function AnimeDeveloper() {

    const { scene } = useGLTF(

        "/models/anime-boy.glb"

    );

    return (

        <Float

            speed={1.8}

            rotationIntensity={0.4}

            floatIntensity={0.8}

        >

            <primitive

                object={scene}

                scale={2.3}

                position={[0,-2,0]}

                rotation={[0,0.35,0]}

            />

        </Float>

    );

}

useGLTF.preload(

    "/models/anime-boy.glb"

);

export default AnimeDeveloper;