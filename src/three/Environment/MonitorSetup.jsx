import Monitor from "./Monitor";

import TerminalScreen from "./TerminalScreen";

function MonitorSetup() {

    return (

        <group>

            {/* ================= LEFT MONITOR ================= */}

            <group

                position={[-2.15,1.35,-0.15]}

                rotation={[0,0.28,0]}

                scale={0.95}

            >

                <Monitor

                    color="#00E5FF"

                />

            </group>

            {/* ================= CENTER MONITOR ================= */}

            <group

                position={[0,1.55,-0.28]}

            >

                <Monitor

                    color="#8B5CF6"

                    scale={1.18}

                />

                <group

                    position={[0,0,0.055]}

                >

                    <TerminalScreen/>

                </group>

            </group>

            {/* ================= RIGHT MONITOR ================= */}

            <group

                position={[2.15,1.35,-0.15]}

                rotation={[0,-0.28,0]}

                scale={0.95}

            >

                <Monitor

                    color="#00E5FF"

                />

            </group>

        </group>

    );

}

export default MonitorSetup;