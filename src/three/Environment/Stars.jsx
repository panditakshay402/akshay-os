import { Stars } from "@react-three/drei";

function CyberStars() {

    return (

        <Stars

            radius={120}

            depth={80}

            count={5000}

            factor={5}

            saturation={0}

            fade

            speed={1}

        />

    );

}

export default CyberStars;