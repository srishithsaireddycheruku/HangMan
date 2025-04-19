//presentation component

import TextInput from "../TextInput/TextInput";
import Button from "../button/button";
function TextInputForm({handleFormSubmit,handleTextInputChange,handleToggleInputType,value,inputType}){
    return(
        <form action="" className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label="enter a word or phrase"
                    type={inputType}
                    onChange={handleTextInputChange}
                    value={value}
                />
            </div>
            <div>
                <Button styleType="warning"
                        text={inputType === 'password' ? 'show':'hide'}
                        onClickHandler={handleToggleInputType}></Button>
            </div>
            <div>
                    <Button
                       text="Okay"
                       buttonType="submit" />
                </div>
        </form>
    );
}
export default TextInputForm;
//to make sure can access our app function