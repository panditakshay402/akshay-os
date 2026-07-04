import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";

import { Points, PointMaterial } from "@react-three/drei";

function FloatingParticles() {

    const ref = useRef();

    const positions = useMemo(() => {

        const array = new Float32Array(2000 * 3);

        for (let i = 0; i < array.length; i += 3) {

            array[i] = (Math.random() - 0.5) * 16;

            array[i + 1] = (Math.random() - 0.5) * 10;

            array[i + 2] = (Math.random() - 0.5) * 16;

        }

        return array;

    }, []);

    useFrame((state) => {

        if (!ref.current) return;

        ref.current.rotation.y =

            state.clock.elapsedTime * 0.015;

        ref.current.rotation.x =

            Math.sin(

                state.clock.elapsedTime * 0.2

            ) * 0.02;

    });

    return (

        <Points

            ref={ref}

            positions={positions}

            stride={3}

            frustumCulled={false}

        >

            <PointMaterial

                transparent

                color="#7DD3FC"

                size={0.035}

                sizeAttenuation

                depthWrite={false}

                opacity={0.75}

            />

        </Points>

    );

}

export default FloatingParticles;