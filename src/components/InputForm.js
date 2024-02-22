import { useState } from "react";
import Button from "./atoms/Button";
import TextInput from "./atoms/TextInput";



function InputForm({setUserMessage}){
    const [text, setText] = useState("");

    function handleChange(e){
        setText(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        setUserMessage(text)

    }

    return(
        <form id= "input-form" onSubmit={handleSubmit}>
            <TextInput handleChange={handleChange}/>
            <Button text="Submit" />
        </form>
    )
}

export default InputForm;