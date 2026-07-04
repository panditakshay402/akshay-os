import Monitor from "./Monitor";
import TerminalScreen from "./TerminalScreen";

function MonitorSetup() {

    return (

        <group position={[0,-0.15,-0.55]}>

            {/* Left Monitor */}

            <group

                position={[-1.9,1.45,0]}

                rotation={[0,0.22,0]}

            >

                <Monitor

                    color="#00E5FF"

                />

            </group>

            {/* Center Monitor */}

            <group

                position={[0,1.65,0]}

            >

                <Monitor

                    scale={1.25}

                    color="#8B5CF6"

                />

                <TerminalScreen/>

            </group>

            {/* Right Monitor */}

            <group

                position={[1.9,1.45,0]}

                rotation={[0,-0.22,0]}

            >

                <Monitor

                    color="#00E5FF"

                />

            </group>

        </group>

    );

}

export default MonitorSetup;