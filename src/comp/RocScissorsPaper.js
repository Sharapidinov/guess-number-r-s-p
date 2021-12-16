import rock from "../img/rock.png"
import paper from "../img/paper.png"
import scissors from "../img/scissors.png"

import React, {useState} from "react"
// import {nanoid} from "nanoid";
// import Card from "./comp/Card";
// import user from "./data/users";






const RockPaperScissors = () => {
    const [p1 , setP1] = useState("")
    const [p2, setP2] = useState("")
    const [res, setRes] = useState("")
    const [p1Points, setP1Points] = useState(0)
    const [p2Points, setP2Points] = useState(0)





    const game = (p1Action) => {
        const images = {
            "Камень": rock,
            "Ножницы": scissors,
            "Бумага": paper
        }
        const actions = ["Камень", "Ножницы", "Бумага"]
        const p2Action = actions[Math.floor(Math.random() *3)]

        if (p1Action === p2Action ){
            setRes("Ничья")
        }else if( (p1Action === "Камень" && p2Action === "Ножницы")
            || (p1Action === "Ножницы" && p2Action === "Бумага" )
            ||(p1Action === "Бумага" && p2Action === "Камень"  )){
            setRes("Вы выйграли")
            setP1Points(p1Points + 1 )
        } else {
            setRes("Вы проиграли")
            setP2Points(p2Points + 1)
        }

        setP1(images[p1Action])
        setP2(images[p2Action])
    }

    return (
        <div className="rsp">
            <div className="row">
                <div className="col-6">
                    <button onClick={() => game("Камень")} type="button">Камень</button>
                    <button onClick={() => game("Ножницы")} type="button">Ножницы</button>
                    <button onClick={() => game("Бумага")} type="button">Бумага</button>
                    <span>{res}</span>
                </div>
                <div className="col-6">
                    p1 = {p1Points}
                    <br/>
                    p2 = {p2Points}
                </div>
            </div>
            <br/>
            <hr/>

            <div className="row">
                <div className="col-6">
                    <div>P1:</div>
                    <img width={300} height={500} src={p1} alt=""/>
                </div>
                <div className="col-6">
                    <div>P2:</div>
                    <img width={300} height={500} src={p2} alt=""/>
                </div>
            </div>


        </div>
    )
}

export default RockPaperScissors;