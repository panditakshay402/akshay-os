import CyberDesk from "./CyberDesk";

import MonitorSetup from "./MonitorSetup";

import Keyboard from "./Keyboard";

import Mouse from "./Mouse";

import Chair from "./Chair";

function Workspace() {

    return (

        <group>

            {/* Desk */}

            <CyberDesk />

            {/* Triple Monitor Setup */}

            <MonitorSetup />

            {/* Keyboard */}

            <Keyboard

                position={[0,-2.02,0.82]}

            />

            {/* Mouse */}

            <Mouse

                position={[1.6,-2.02,0.82]}

                rotation={[0,0.15,0]}

            />

            {/* Gaming Chair */}

            <Chair

                position={[0,-2.95,2.15]}

                rotation={[0,Math.PI,0]}

                scale={0.95}

            />

        </group>

    );

}

export default Workspace;