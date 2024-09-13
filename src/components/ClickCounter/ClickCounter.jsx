const ClickCounter = ({ value, onUpdate }) => {
    return (
        <div>
            <button onClick={onUpdate}>count click: {value} </button>
        </div>
    );
};
export default ClickCounter;
