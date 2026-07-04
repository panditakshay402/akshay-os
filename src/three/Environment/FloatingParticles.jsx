import { useMemo } from "react";

import { Points, PointMaterial } from "@react-three/drei";

function FloatingParticles() {

    const positions = useMemo(() => {

        const array = new Float32Array(3000 * 3);

        for (let i = 0; i < array.length; i += 3) {

            array[i] = (Math.random() - 0.5) * 18;

            array[i + 1] = (Math.random() - 0.5) * 12;

            array[i + 2] = (Math.random() - 0.5) * 18;

        }

        return array;

    }, []);

    return (

        <Points

            positions={positions}

            stride={3}

            frustumCulled={false}

        >

            <PointMaterial

                transparent

                color="#00E5FF"

                size={0.04}

                sizeAttenuation

                depthWrite={false}

                opacity={0.9}

            />

        </Points>

    );

}

export default FloatingParticles;