import getButtonStyling from "./getButtonStyleType";
function Button({text,buttonType='button',styleType,onClickHandler}){ // destructuring props
    
    return(
        <button
        type={buttonType} 
        className={`px-4 py-2 ${getButtonStyling(styleType)} bg-blue-500 border border-blue-700 text-white hover:bg-blue-700 border-blue-900 rounded-md transition-all`}
        onClick={onClickHandler}
        >
            {/*{X()} {10*3} {EvenOrOdd(5)}jsx curlies*/}
            {text}
        </button>
    );
}
// function X(){
//     return 'hi';
// }
// function EvenOrOdd(num){
//     if(num % 2 === 0) return 'even';
//     else return 'odd';
// }
export default Button; //to make sure can access our app function