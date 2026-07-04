import {

    EffectComposer,

    Bloom,

} from "@react-three/postprocessing";

function Glow() {

    return (

        <EffectComposer

            multisampling={4}

        >

            <Bloom

                intensity={0.75}

                luminanceThreshold={0.35}

                luminanceSmoothing={0.95}

                mipmapBlur

            />

        </EffectComposer>

    );

}

export default Glow;