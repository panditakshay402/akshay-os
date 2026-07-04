import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import Glow from "../Effects/Glow";

import Lights from "../Environment/Lights";

import Fog from "../Environment/Fog";

import CameraRig from "../Environment/CameraRig";

import MouseGlow from "../Environment/MouseGlow";

import Room from "../Environment/Room";

import Workspace from "../Environment/Workspace";

import GridFloor from "../Environment/GridFloor";

import CeilingLights from "../Environment/CeilingLights";

import HologramPanels from "../Environment/HologramPanels";

import HologramRing from "../Environment/HologramRing";

import HologramLogo from "../Environment/HologramLogo";

import FloatingParticles from "../Environment/FloatingParticles";

import FloatingCode from "../Environment/FloatingCode";

import CyberStars from "../Environment/Stars";

import CodeRain from "../Environment/CodeRain";

import "./Scene.css";

function Scene() {

    return (

        <div className="scene-container">

            <Canvas

                shadows

                dpr={[1,2]}

                camera={{

                    position:[0,2.8,10],

                    fov:45,

                }}

            >

                {/* ===================== */}
                {/* ENVIRONMENT */}
                {/* ===================== */}

                <Fog/>

                <Glow/>

                <Lights/>

                <CyberStars/>

                <MouseGlow/>

                {/* ===================== */}
                {/* WORLD */}
                {/* ===================== */}

                <CameraRig>

                    <Room/>

                    <GridFloor/>

                    <CeilingLights/>

                    <Workspace/>

                    <HologramPanels/>

                    <HologramRing/>

                    <HologramLogo/>

                    <FloatingParticles/>

                    <FloatingCode/>

                    <CodeRain/>

                </CameraRig>

                {/* ===================== */}
                {/* CONTROLS */}
                {/* ===================== */}

                <OrbitControls

                    enableZoom={false}

                    enablePan={false}

                    enableRotate={true}

                    autoRotate

                    autoRotateSpeed={0.18}

                    target={[0,1.2,0]}

                    minPolarAngle={Math.PI/2.9}

                    maxPolarAngle={Math.PI/2.05}

                />

            </Canvas>

        </div>

    );

}

export default Scene;