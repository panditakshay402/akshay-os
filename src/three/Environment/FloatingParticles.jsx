import { Points, PointMaterial } from "@react-three/drei";

import { useMemo } from "react";

function FloatingParticles() {

    const particles = useMemo(() => {

        const positions = [];

        for (let i = 0; i < 3000; i++) {

            positions.push(

                (Math.random() - 0.5) * 18,

                (Math.random() - 0.5) * 18,

                (Math.random() - 0.5) * 18

            );

        }

        return new Float32Array(positions);

    }, []);

    return (

        <Points

            positions={particles}

            stride={3}

            frustumCulled={false}

        >

            <PointMaterial

                transparent

                color="#00E5FF"

                size={0.035}

                sizeAttenuation

                depthWrite={false}

            />

        </Points>

    );

}

export default FloatingParticles;