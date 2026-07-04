import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import Lights from "../Environment/Lights";

import Glow from "../Effects/Glow";

import Fog from "../Environment/Fog";

import CameraRig from "../Environment/CameraRig";

import MouseGlow from "../Environment/MouseGlow";

import Workspace from "../Environment/Workspace";

import Room from "../Environment/Room";

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

                    position:[0,2,9],

                    fov:42,

                }}

            >

                <Fog/>

                <Glow/>

                <Lights/>

                <CyberStars/>

                <MouseGlow/>

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

                <OrbitControls

                    enableZoom={false}

                    enablePan={false}

                    autoRotate

                    autoRotateSpeed={0.15}

                    minPolarAngle={Math.PI/2.7}

                    maxPolarAngle={Math.PI/2}

                />

            </Canvas>

        </div>

    );

}

export default Scene;