import "./App.css";
import TextArea from "./TextArea/TextArea";
import ClickCounter from "./ClickCounter/ClickCounter";
import ToggleButton from "./ToggleButton/ToggleButton";
import AlerrtButton from "./AlerrtButton/AlerrtButton";
import { useState } from "react";

const protonMailUsers = [
    { id: "1", userEmail: "Turc4@proton.me" },
    { id: "2", userEmail: "Ivan4ik@proton.me" },
    { id: "3", userEmail: "Semen4enko@proton.me" },
    { id: "4", userEmail: "userFromFuture@proton.me" },
];

const gmailUsers = [
    { id: "11", userEmail: "Turc4@gmail.com" },
    { id: "22", userEmail: "Ivan4ik@gmail.com" },
    { id: "33", userEmail: "Semen4enko@gmail.com" },
    { id: "44", userEmail: "userFromFuture@gmail.com" },
    { id: "55", userEmail: "yepikaYey@gmail.com" },
    { id: "66", userEmail: "userFromPast@gmail.com" },
];

const ukrNetMailUsers = [
    { id: "444", userEmail: "userFromFuture@ukr.net" },
    { id: "555", userEmail: "yepikaYey@ukr.net" },
    { id: "666", userEmail: "userFromPast@ukr.net" },
];

function App() {
    // click counter btn
    const [clicks, setClicks] = useState(0);

    const handleClicks = () => {
        setClicks(clicks + 1);
    };

    const [values, setValues] = useState({
        x: 0,
        y: 0,
    });

    const updateX = () => {
        setValues({
            ...values,
            x: values.x + 1,
        });
    };

    const updateY = () => {
        setValues({
            ...values,
            y: values.y + 1,
        });
    };
    return (
        <>
            {/* coordinate update btn */}
            <button onClick={updateX}>Update X</button>
            <button onClick={updateY}>Update Y</button>
            <p>
                x: {values.x}, y: {values.y}
            </p>
            <hr />
            <br />

            {/* click counter btn */}
            <ClickCounter value={clicks} onUpdate={handleClicks} />
            <br />
            <ClickCounter value={clicks} onUpdate={handleClicks} />
            <br />
            <hr />

            {/* toggle btn */}
            <br />
            <ToggleButton />

            {/* alert message btn */}
            <br />
            <AlerrtButton message="playing music!">
                Play some music
            </AlerrtButton>
            <br />
            <AlerrtButton message="uploading your data!">
                Upload data
            </AlerrtButton>
            <br />
            <hr />

            {/* text area */}
            <TextArea
                boxUsers={protonMailUsers}
                boxTitle="Proton Mail"
                mailBoxCount={4}
            />
            <TextArea boxUsers={gmailUsers} boxTitle="Gmail" mailBoxCount={6} />
            <TextArea boxUsers={ukrNetMailUsers} boxTitle="UkrNet" />
        </>
    );
}

export default App;
