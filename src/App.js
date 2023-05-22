import React, { useReducer, useEffect } from 'react';
import reducer, { Reducer } from './components/reducerComp/reducer';
import initialState from './components/reducerComp/initialState';
import getTime from './components/functions/getTime';
import resize from './components/functions/resize';
import './App.css';

import Title from './components/Title';
import ServiceMenu from './components/ServiceMenu';
import TypingText from './components/TypingText';
import Result from './components/Result';


function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	function keyDown(e) {
		if (!state.isStart) return
		if (e.key.length !== 1) return

		if (state.charIndex === 0) dispatch({type: 'SET_STARTTIME', time: getTime()})
		
		if (state.text[state.charIndex] === e.key) {
			dispatch({type: 'SET_INDEX'})
		} else if (state.text[state.charIndex] !== e.key) {
			dispatch({type: 'SET_ERROR'})
		}
		
		dispatch({type: 'SET_ACCURACY'})
		dispatch({type: 'SET_SPEED', speed: ((state.charIndex) / ((getTime() - state.startTime) / 60000)).toFixed(0)})
    }

	function keyUp() {
		if (state.charIndex === state.text.length && state.text.length !== 0) {
			//Для дополнительного рендеринга, что бы появилось меню скрытое сразу после ввода последнего символа
			dispatch({type: 'SET_FINISH', time: getTime()})
		}
	}

    useEffect(() => {
        window.addEventListener('keydown', keyDown);
		window.addEventListener('keyup', keyUp);
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('keydown', keyDown)
			window.removeEventListener('keyup', keyUp)
		}
    })


	return (
		<Reducer.Provider value={{state, dispatch}}>
			<Title/>
			<TypingText/>
			{!state.isStart && <ServiceMenu/>}
			{state.isFinish && <Result/>}
		</Reducer.Provider>
	)
}

export default App;