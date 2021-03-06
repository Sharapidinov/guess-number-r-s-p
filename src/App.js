import React, {useState} from 'react'
import RockPaperScissors from "./comp/RocScissorsPaper"
import GuessNumber from "./comp/GuessNumber"
// import bg from "src/img/bg.jpg"


const App = () => {
    const [game, setGame] = useState(null)
    return (
        <div>
            {
                !game && <div  className="menu">
                    <button onClick={() => setGame(1)}>RockPaperScissors</button>
                    <button onClick={() => setGame(2)}>GuessNumber</button>
                </div>

            }
            <button onClick={() => setGame(null)} className="exit">Назад</button>

            {(game === 1) && <RockPaperScissors/> }
            {(game === 2) && <GuessNumber/> }
        </div>
    )
}

export default App
