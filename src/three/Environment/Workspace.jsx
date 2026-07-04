import CyberDesk from "./CyberDesk";

import MonitorSetup from "./MonitorSetup";

import Keyboard from "./Keyboard";

import Mouse from "./Mouse";

import Chair from "./Chair";

function Workspace() {

    return (

        <group>

            {/* ===================== */}
            {/* DESK */}
            {/* ===================== */}

            <CyberDesk />

            {/* ===================== */}
            {/* MONITORS */}
            {/* ===================== */}

            <group

                position={[0,-0.05,-0.68]}

            >

                <MonitorSetup />

            </group>

            {/* ===================== */}
            {/* KEYBOARD */}
            {/* ===================== */}

            <Keyboard

                position={[

                    0,

                    -2.82,

                    0.75

                ]}

                rotation={[

                    0,

                    0,

                    0

                ]}

            />

            {/* ===================== */}
            {/* MOUSE */}
            {/* ===================== */}

            <Mouse

                position={[

                    1.72,

                    -2.82,

                    0.78

                ]}

                rotation={[

                    0,

                    0.18,

                    0

                ]}

            />

            {/* ===================== */}
            {/* CHAIR */}
            {/* ===================== */}

            <Chair

                position={[

                    0,

                    -3.05,

                    2.35

                ]}

                rotation={[

                    0,

                    Math.PI,

                    0

                ]}

                scale={0.92}

            />

        </group>

    );

}

export default Workspace;