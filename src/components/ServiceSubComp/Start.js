import React, { useContext, useEffect } from "react";
import { Reducer } from "../reducerComp/reducer";

function Start() {
    
    const {state, dispatch} = useContext(Reducer);

    const startHundler = () => {
        let promise = new Promise((resolve, reject) => {
            if (state.text.length) {
                resolve()
            } else reject();
        })
        promise.then(() => {
            dispatch({type: 'SET_START'});
        })
    }
    return <button className="start-button button" onClick={startHundler}>Начать тест</button>
}

export default Start;