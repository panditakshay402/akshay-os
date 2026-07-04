function Monitor({

    position = [0,0,0],

    rotation = [0,0,0],

    scale = 1,

    color = "#00E5FF",

}){

    return(

        <group

            position={position}

            rotation={rotation}

            scale={scale}

        >

            {/* Screen */}

            <mesh castShadow>

                <boxGeometry args={[1.8,1.1,.08]} />

                <meshStandardMaterial

                    color="#111827"

                    metalness={.8}

                    roughness={.15}

                />

            </mesh>

            {/* Display */}

            <mesh position={[0,0,.045]}>

                <planeGeometry args={[1.55,.85]} />

                <meshStandardMaterial

                    color={color}

                    emissive={color}

                    emissiveIntensity={1.2}

                />

            </mesh>

            {/* Stand */}

            <mesh position={[0,-.8,0]}>

                <boxGeometry args={[.08,.7,.08]} />

                <meshStandardMaterial

                    color="#555"

                    metalness={1}

                />

            </mesh>

            {/* Base */}

            <mesh position={[0,-1.15,0]}>

                <boxGeometry args={[.55,.05,.45]} />

                <meshStandardMaterial

                    color="#444"

                />

            </mesh>

        </group>

    );

}

export default Monitor;