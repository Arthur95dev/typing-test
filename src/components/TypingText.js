import React, { useContext } from "react";
import { Reducer } from './reducerComp/reducer';
import restart from './img/restart.svg';

function TypingText() {
    const {state, dispatch} = useContext(Reducer);

    let text = state.text.split('').map((char, index) => {
        return <span 
                key={index}
                className={state.charIndex > index ? 'true-char' : state.charIndex === index ? 'current-char' : ''}>
                {char}
                </span>
    })

    const restartHundler = () => {
        dispatch({type: 'SET_RESET'})
    }
    return (
        <div className='typing-test_container'>
            <div className="current-info">
                <p className="speed">Cкорость <br/>{state.speed} зн/мин.</p>
                <p className="accuracy">Точность <br/>{state.accuracy}%</p>
            </div>
            <div className="text-area_container">
                <p className="text-area">{text}</p>
                <div className="reset_container" onClick={restartHundler}>
                    <div className="resetBtn"><i className="fa-solid fa-repeat"></i></div>
                    <div className="progress_bar" style={{
                        background: `linear-gradient(to top, green ${(state.charIndex + 1) / state.text.length * 100}%, 
                        white ${(state.charIndex + 1) / state.text.length * 100}%)`}}></div>
                </div>
            </div>
        </div>
    )
}

export default TypingText;
