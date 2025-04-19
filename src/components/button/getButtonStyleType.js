function getButtonStyling(styleType){
    const primaryButtonStyling="bg-red-500 border border-blue-700 text-white hover:bg-red-700 border-blue-900 rounded-md transition-all";
    const secondaryButtonStyling="bg-gray-500 border border-gray-700 text-white hover:bg-gray-700 border-gray-900 rounded-md transition-all";
    if(styleType === "primary") return primaryButtonStyling;
    else if(styleType === "secondary") return secondaryButtonStyling;
} // function to get button styling based on type

export default getButtonStyling; //to make sure can access our app function