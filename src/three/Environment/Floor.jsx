function Floor() {

    return (

        <mesh

            rotation={[-Math.PI / 2,0,0]}

            position={[0,-3.25,0]}

            receiveShadow

        >

            <planeGeometry args={[40,40]} />

            <meshStandardMaterial

                color="#0B1120"

                metalness={0.9}

                roughness={0.08}

                emissive="#00E5FF"

                emissiveIntensity={0.05}

            />

        </mesh>

    );

}

export default Floor;