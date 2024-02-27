

function TextInput({value, handleChange}){

    return(
        <input id="text-input" data-testid="text-input" value={value} onChange={handleChange} ></input>
    )
}

export default TextInput