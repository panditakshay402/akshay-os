import { useEffect, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {

        const moveCursor = (e) => {

            setPosition({
                x: e.clientX,
                y: e.clientY,
            });

            setCursorVisible(true);

        };

        const leaveWindow = () => {

            setCursorVisible(false);

        };

        window.addEventListener(
            "mousemove",
            moveCursor
        );

        window.addEventListener(
            "mouseleave",
            leaveWindow
        );

        return () => {

            window.removeEventListener(
                "mousemove",
                moveCursor
            );

            window.removeEventListener(
                "mouseleave",
                leaveWindow
            );

        };

    }, []);

    return (

        <>

            <div
                className={`cursor-dot ${cursorVisible ? "show" : ""}`}
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />

            <div
                className={`cursor-ring ${cursorVisible ? "show" : ""}`}
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />

        </>

    );

}

export default CustomCursor;