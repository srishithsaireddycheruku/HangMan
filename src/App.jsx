import { Routes,Route} from "react-router-dom";
// import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import PlayGame from "./PlayGame/PlayGame";
import StartGame from "./StartGame/StartGame";
function App(){
  return(
    // <>
    //   <h1 className="font-semibold text-3xl">Welcome to HangMan!!</h1>
    //   <TextInputFormContainer onSubmit={(value)=> console.log('value coming from hidden form is ', value)}/>
    // </>

    <Routes>
      <Route path="/play" element={<PlayGame/>}/>
      <Route path="/start" element={<StartGame/>}/>
      <Route path="*" element={<div>Page Not Found</div>}/>
    </Routes>
  );
}

export default App; //to make sure can access our app function