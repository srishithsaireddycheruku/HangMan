//container component for the TextInputForm

import { useState } from "react";
import TextInputForm from "./TextInputForm"; // import the presentation component
function TextInputFormContainer({onSubmit}) {
        const [value,setValue]=useState(''); // state to hold the input value
        const [inputType,setInputType]=useState('password'); // state to hold the input type
        function handleFormSubmit(event){
            event.preventDefault(); // prevent the default form submission behavior
            console.log('form submitted',value);
            onSubmit?.(value); // call the onSubmit function passed as a prop with the current value
        }
        function handleTextInputChange(event){
            console.log('text input changed');
            console.log(event.target.value);
            setValue(event.target.value); // update the state with the new value
        }
        function handleToggleInputType() {
            setInputType(inputType === 'password' ? 'text' : 'password');
        }
        return(
            //calling presentation layer
            <TextInputForm
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleToggleInputType={handleToggleInputType}
                value={value}
                inputType={inputType}
            />
        );
}
export default TextInputFormContainer;