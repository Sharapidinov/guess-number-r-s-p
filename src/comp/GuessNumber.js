import {useState} from "react";

function GuessNumber() {
    const [pNum, setPNum] = useState('')
    const [compNum, setCompNum] = useState(Math.ceil(Math.random() * 10))
    const [message, setMessage] = useState('')
    const [lives, setLives] = useState(3)
    const [again, toggleAgain] = useState(false)
    const [wins, setWins] = useState(+localStorage.getItem(`wins`))
    const [lost, setLost] = useState(+localStorage.getItem(`fails`))
    const [rangeLives, setRangeLives] = useState(3)
    const [rangeNum, setRangeNum] = useState(10)
    const [help, setHelp] = useState(false)
    const [ofInp, setOfInp] = useState(false)

    const num = (e) => {
        const a = Math.min(Math.max(e.target.value, 0), rangeNum) || ""
        setPNum(a)

    }


    const onHelp = (e) => setHelp(e.target.checked)
    const resetLS = () => {
        localStorage.removeItem("wins")
        localStorage.removeItem("fails")
        setWins(0)
        setLost(0)
    }

    const liveRange = (e) => {
        setRangeLives(e.target.value)
        setLives(rangeLives)
    }
    const numRange = (e) => {
        const n = e.target.value
        setRangeNum(n)
        setCompNum(Math.ceil(Math.random() * n))


    }

    const playAgain = () => {
        setOfInp(false)
        setCompNum(Math.ceil(Math.random() * +rangeNum))
        toggleAgain(false)
        setLives(3)
        setMessage('')
        setPNum('')
    }

    const game = (e) => {
        setPNum("")
        setOfInp(true)

        if (+pNum === +compNum) {
            setMessage('Вы победили')
            setCompNum(Math.ceil(Math.random() * rangeNum))
            toggleAgain(false)
            setWins(+wins + 1)
            localStorage.setItem(`wins` , String(+wins + 1))

        } else {
            if (lives - 1 === 0) {
                setMessage(`Вы проиграли`)
                setLost(+lost + 1)
                toggleAgain(true)
                localStorage.setItem(`fails` , String(+lost + 1))
            }
            else {
                if (help) {
                    setMessage(compNum > pNum ? "upper": "lower" )
                }else {
                    setMessage(`Попробуйте еще раз`)
                }


            }

            setLives(lives - 1)
        }
    }


    return (
        <div className="guess-number">
            <div className="container">
                <div className="header">
                    <div>
                        Ваши победы: {wins}
                        <br/>
                        Ваши поражения:{lost}
                        <br/>
                        <button onClick={resetLS} type='button'>reset</button>
                    </div>
                    <div className="rang">
                        <label>
                            Количество попыток {lives || 3}

                            <input className="i-range" disabled={ofInp} value={lives} max={11} min={1} onChange={liveRange} type="range"/>
                        </label>
                        <br/>
                        <label htmlFor="">
                            От 0  до {rangeNum}

                            <input className="i-range" disabled={ofInp} value={rangeNum} max={30} min={10} onChange={numRange} type="range"/>
                        </label>
                        <label htmlFor="">
                            С подскасками
                            <input className="helper" onChange={onHelp} type="checkbox"/>
                        </label>
                    </div>
                </div>
                <div className="main">
                    <input className="pNum" value={pNum} onChange={num} type="number"/>
                    <br/>
                    {!again && <button disabled={!pNum} onClick={game}>Try</button>}
                    {again && <button onClick={playAgain}>New game</button>}
                    <div>Количество попыток {lives}</div>
                    <hr/>
                    <div className="mes">{message}</div>
                </div>
            </div>
        </div>
    )
}

export default GuessNumber;