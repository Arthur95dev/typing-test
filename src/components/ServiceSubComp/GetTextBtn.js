import React, { useContext } from "react";
import getText from '../functions/getText';
import { Reducer } from '../reducerComp/reducer';

function GetTextBtn() {
    const {state, dispatch} = useContext(Reducer);

    function clickHundler() {
        getText(state.lang).then(text => {
            dispatch({type: 'SET_TEXT', text: text})
        })
    }
    return <button className="get_text-button button" onClick={clickHundler}>Получить текст</button>
}

export default GetTextBtn;
