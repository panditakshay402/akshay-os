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

            mouse.x * 5,

            0.08

        );

        light.current.position.y = THREE.MathUtils.lerp(

            light.current.position.y,

            mouse.y * 3,

            0.08

        );

    });

    return (

        <pointLight

            ref={light}

            position={[0,2,3]}

            color="#00E5FF"

            intensity={4}

            distance={10}

        />

    );

}

export default MouseGlow;