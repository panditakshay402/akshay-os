import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Glow() {

    return (

        <EffectComposer>

            <Bloom

                intensity={1.3}

                luminanceThreshold={0.15}

                luminanceSmoothing={0.9}

                mipmapBlur

            />

        </EffectComposer>

    );

}

export default Glow;