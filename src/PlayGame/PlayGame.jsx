import { Link } from "react-router-dom"; // Import Link from react-router-dom
function PlayGame(){
    return(
        <div>
            <h1>Play Game</h1>

            <Link to={'/start'}>StartGame</Link>
        </div>
    )
}
export default PlayGame;