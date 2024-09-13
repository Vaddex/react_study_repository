import { useState } from "react";

const ToggleButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleTogle}>{isOpen ? "Hide" : "Show"}</button>
            <h3>{isOpen && "now youy can see me"}</h3>
            <hr />
        </div>
    );
};
export default ToggleButton;
