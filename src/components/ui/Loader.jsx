import { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {

    const [hide, setHide] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            setHide(true);

        }, 2800);

        return () => clearTimeout(timer);

    }, []);

    return (

        <div className={`loader ${hide ? "loader-hide" : ""}`}>

            <div className="loader-box">

                <h1>

                    AKSHAY<span>.OS</span>

                </h1>

                <p>

                    Booting Portfolio...

                </p>

                <div className="loader-bar">

                    <div className="loader-progress"></div>

                </div>

                <div className="loader-status">

                    Initializing Modules...

                </div>

            </div>

        </div>

    );

}

export default Loader;