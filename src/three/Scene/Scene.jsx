import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import Lights from "../Environment/Lights";

import FloatingParticles from "../Environment/FloatingParticles";

import FloatingCode from "../Environment/FloatingCode";

import CyberDesk from "../Environment/CyberDesk";

import HologramPanels from "../Environment/HologramPanels";

import AnimeDeveloper from "../Character/AnimeDeveloper";

import Glow from "../Effects/Glow";

import "./Scene.css";

function Scene() {

    return (

        <div className="scene-container">

            <Canvas

                shadows

                dpr={[1,2]}

                camera={{

                    position:[0,1.7,8],

                    fov:42,

                }}

            >

                <Glow/>

                <Lights/>

                <FloatingParticles/>

                <FloatingCode/>

                <CyberDesk/>

                <HologramPanels/>

                <AnimeDeveloper/>

                <OrbitControls

                    enableZoom={false}

                    enablePan={false}

                    enableRotate={true}

                    autoRotate

                    autoRotateSpeed={0.45}

                    minPolarAngle={Math.PI/2.7}

                    maxPolarAngle={Math.PI/2}

                />

            </Canvas>

        </div>

    );

}

export default Scene;