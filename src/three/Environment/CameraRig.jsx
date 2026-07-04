import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function CameraRig({ children }) {

    const group = useRef();

    const { mouse, camera } = useThree();

    useFrame(() => {

        if (!group.current) return;

        group.current.rotation.y = THREE.MathUtils.lerp(

            group.current.rotation.y,

            mouse.x * 0.18,

            0.05

        );

        group.current.rotation.x = THREE.MathUtils.lerp(

            group.current.rotation.x,

            -mouse.y * 0.08,

            0.05

        );

        camera.position.x = THREE.MathUtils.lerp(

            camera.position.x,

            mouse.x * 0.6,

            0.03

        );

        camera.position.y = THREE.MathUtils.lerp(

            camera.position.y,

            1.7 + mouse.y * 0.3,

            0.03

        );

        camera.lookAt(0,0.8,0);

    });

    return (

        <group ref={group}>

            {children}

        </group>

    );

}

export default CameraRig;