import { useFrame, useThree } from "@react-three/fiber";

import { useRef } from "react";

import * as THREE from "three";

function MouseGlow() {

    const light = useRef();

    const { mouse } = useThree();

    useFrame(() => {

        if (!light.current) return;

        light.current.position.x = THREE.MathUtils.lerp(

            light.current.position.x,

            mouse.x * 2.2,

            0.06

        );

        light.current.position.y = THREE.MathUtils.lerp(

            light.current.position.y,

            1.4 + mouse.y * 1.2,

            0.06

        );

        light.current.position.z = THREE.MathUtils.lerp(

            light.current.position.z,

            2.8,

            0.06

        );

        light.current.intensity =

            1.35 +

            Math.sin(performance.now() * 0.002) * 0.15;

    });

    return (

        <pointLight

            ref={light}

            position={[0,1.5,2.8]}

            color="#00E5FF"

            intensity={1.4}

            distance={8}

            decay={2}

        />

    );

}

export default MouseGlow;