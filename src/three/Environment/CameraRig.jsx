import { useFrame, useThree } from "@react-three/fiber";

import { useRef } from "react";

import * as THREE from "three";

function CameraRig({ children }) {

    const group = useRef();

    const { mouse, camera } = useThree();

    const target = useRef(

        new THREE.Vector3(0, 1.2, 0)

    );

    useFrame(() => {

        if (!group.current) return;

        group.current.rotation.y = THREE.MathUtils.lerp(

            group.current.rotation.y,

            mouse.x * 0.08,

            0.025

        );

        group.current.rotation.x = THREE.MathUtils.lerp(

            group.current.rotation.x,

            -mouse.y * 0.03,

            0.025

        );

        camera.position.x = THREE.MathUtils.lerp(

            camera.position.x,

            mouse.x * 0.45,

            0.025

        );

        camera.position.y = THREE.MathUtils.lerp(

            camera.position.y,

            2.7 + mouse.y * 0.18,

            0.025

        );

        camera.position.z = THREE.MathUtils.lerp(

            camera.position.z,

            9.8,

            0.025

        );

        camera.lookAt(target.current);

    });

    return (

        <group ref={group}>

            {children}

        </group>

    );

}

export default CameraRig;