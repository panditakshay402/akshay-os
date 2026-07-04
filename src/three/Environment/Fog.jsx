import { FogExp2 } from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function Fog() {

    const { scene } = useThree();

    useEffect(() => {

        scene.fog = new FogExp2(

            "#070B17",

            0.05

        );

        scene.background = null;

        return () => {

            scene.fog = null;

        };

    }, [scene]);

    return null;

}

export default Fog;