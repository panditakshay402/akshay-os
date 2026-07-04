import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import Cube from "../Character/Cube";

import Lights from "../Environment/Lights";

import "./Scene.css";

function Scene() {

    return (

        <div className="scene-container">

            <Canvas

                shadows

                dpr={[1,2]}

                camera={{

                    position:[0,0,6],

                    fov:50,

                }}

            >

                <Lights/>

                <Cube/>

                <OrbitControls

                    enableZoom={false}

                    enablePan={false}

                    enableRotate={true}

                    autoRotate

                    autoRotateSpeed={2}

                />

            </Canvas>

        </div>

    );

}

export default Scene;