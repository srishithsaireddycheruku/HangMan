import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
function App(){
  return(
    <>
      <h1 className="font-semibold text-3xl">Welcome to HangMan!!</h1>
      <TextInputFormContainer onSubmit={(value)=> console.log('value coming from hidden form is ', value)}/>
    </>
  );
}

export default App; //to make sure can access our app function