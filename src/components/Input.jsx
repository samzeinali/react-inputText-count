
const Input = ({ value, onChangeData }) => {
    return (
        <textarea className="textarea" type="text" value={value} onChange={(e) => { onChangeData(e.target.value) }} />
    )
}

export default Input;