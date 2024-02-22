function TextInput({handleChange}){

    return(
        <input id="text-input" data-testid="text-input" onChange={handleChange}></input>
    )
}

export default TextInput