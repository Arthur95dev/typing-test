import React from "react";
import initialState from "./initialState";
import ACTIONS from "./actions";

export const Reducer = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_LANG:
            return {
                ...state,
                lang: action.lang
            }
        case ACTIONS.SET_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ACTIONS.SET_INDEX:
            return {
                ...state,
                charIndex: state.charIndex + 1
            }
        case ACTIONS.SET_START:
            return {
                ...initialState,
                lang: state.lang,
                text: state.text,
                isStart: !state.isStart,
            }
        case ACTIONS.SET_FINISH:
            return {
                ...state,
                isFinish: true,
                finishTime: action.time
            }
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                errors: state.errors + 1
            }
        case ACTIONS.SET_ACCURACY:
            return {
                ...state,
                accuracy: (100 - (state.errors / (Number(state.charIndex) + 1) * 100)).toFixed(2),
            }
        case ACTIONS.SET_STARTTIME: 
            return {
                ...state,
                startTime: action.time,
            }
        case ACTIONS.SET_SPEED: 
            return {
                ...state,
                speed: action.speed
            }
        case ACTIONS.SET_RESET:
            return {
                ...initialState
            }
    }
}

export default reducer;