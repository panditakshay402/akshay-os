function GridFloor() {

    const lines = [];

    for (let i = -10; i <= 10; i++) {

        lines.push(

            <mesh

                key={`x-${i}`}

                position={[i, -3.22, 0]}

                rotation={[-Math.PI / 2, 0, 0]}

            >

                <planeGeometry args={[0.03, 20]} />

                <meshStandardMaterial

                    color="#00E5FF"

                    emissive="#00E5FF"

                    emissiveIntensity={1.2}

                    transparent

                    opacity={0.45}

                />

            </mesh>

        );

        lines.push(

            <mesh

                key={`z-${i}`}

                position={[0, -3.22, i]}

                rotation={[-Math.PI / 2, 0, Math.PI / 2]}

            >

                <planeGeometry args={[0.03, 20]} />

                <meshStandardMaterial

                    color="#8B5CF6"

                    emissive="#8B5CF6"

                    emissiveIntensity={1.2}

                    transparent

                    opacity={0.45}

                />

            </mesh>

        );

    }

    return <>{lines}</>;

}

export default GridFloor;