// rafce -> snippet for react functional conponent
const TextArea = ({
    boxTitle = "New poste system",
    mailBoxCount = 0,
    boxUsers,
}) => {
    return (
        <div>
            <h2>{boxTitle}</h2>
            {mailBoxCount === 0 ? (
                <p>
                    <b>No one active mail boxes (maybe) </b>
                </p>
            ) : (
                <p>Count of active mail boxes: {mailBoxCount} </p>
            )}

            <ul>
                {boxUsers.map(({ id, userEmail }) => {
                    return <li key={id}>{userEmail} </li>;
                })}
            </ul>
            <hr />
        </div>
    );
};

export default TextArea;
