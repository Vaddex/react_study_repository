const AlerrtButton = ({ message, children }) => {
    // console.log(localStorage);
    return (
        <div>
            <button onClick={() => alert(message)}>{children}</button>
        </div>
    );
};

export default AlerrtButton;
