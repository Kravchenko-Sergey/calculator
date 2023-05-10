import './App.css'
import { useState } from 'react'

function App() {
	const [el1, setEl1] = useState('')
	const [symbol, setSymbol] = useState('')
	const [el2, setEl2] = useState('')
	const [res, setRes] = useState('0')

	const onChangeHandler = (e: any) => {
		e.currentTarget.value
	}

	const equalHandler = (symbol: any) => {
		switch (symbol) {
			case '+': {
				setRes(String(Number(el1) + Number(el2)))
				setEl1(String(Number(el1) + Number(el2)))
				setEl2('')
				setSymbol('')
				break
			}
			case '-': {
				setRes(String(Number(el1) - Number(el2)))
				setEl1(String(Number(el1) + Number(el2)))
				setEl2('')
				break
			}
			case '*': {
				setRes(String(Number(el1) * Number(el2)))
				setEl1(String(Number(el1) + Number(el2)))
				setEl2('')
				break
			}
			case '/': {
				if (el2 === '0') {
					setRes('Делить на 0 нельзя')
				}
				setRes(String(Number(el1) / Number(el2)))
				setEl1(String(Number(el1) + Number(el2)))
				setEl2('')
			}
		}
	}

	const numberHandler = (e: any) => {
		if (symbol === '') {
			el1 === '0' ? setEl1(el1.slice(0, 0) + e.currentTarget.value) : setEl1(el1 + e.currentTarget.value)
		} else {
			el2 === '0' ? setEl2(el2.slice(0, 0) + e.currentTarget.value) : setEl2(el2 + e.currentTarget.value)
		}
	}

	return (
		<div className='container'>
			<input
				value={res === '0' || el2 !== '' || symbol !== '' ? `${el1} ${symbol} ${el2}` : res}
				onChange={onChangeHandler}
				className='display'
			/>
			<div className='buttons'>
				<button
					className='operator'
					value='AC'
					onClick={() => {
						if (symbol === '') {
							setEl1('0')
						}
						setEl1('0')
						setSymbol('')
						setEl2('')
						setRes('0')
					}}
				>
					AC
				</button>
				<button
					className='operator'
					value='DEL'
					onClick={() => {
						if (symbol === '') {
							setEl1(String(el1).slice(0, -1))
						}
						setEl2(String(el2).slice(0, -1))
					}}
				>
					DEL
				</button>
				<button
					className='operator'
					value='%'
					onClick={() => {
						if (el2 === '') {
							setEl1(String(Number(el1) / 100))
						} else {
							setEl2(String((Number(el1) / 100) * Number(el2)))
						}
					}}
				>
					%
				</button>
				<button className='operator' value='/' onClick={() => setSymbol('/')}>
					÷
				</button>
				<button value='7' onClick={numberHandler}>
					7
				</button>
				<button value='8' onClick={numberHandler}>
					8
				</button>

				<button value='9' onClick={numberHandler}>
					9
				</button>
				<button className='operator' value='*' onClick={() => setSymbol('*')}>
					×
				</button>
				<button value='4' onClick={numberHandler}>
					4
				</button>
				<button value='5' onClick={numberHandler}>
					5
				</button>
				<button value='6' onClick={numberHandler}>
					6
				</button>
				<button className='operator' value='-' onClick={() => setSymbol('-')}>
					-
				</button>
				<button value='1' onClick={numberHandler}>
					1
				</button>
				<button value='2' onClick={numberHandler}>
					2
				</button>
				<button value='3' onClick={numberHandler}>
					3
				</button>
				<button className='operator' value='+' onClick={() => setSymbol('+')}>
					+
				</button>
				<button value='0' onClick={numberHandler}>
					0
				</button>
				<button value='00' onClick={numberHandler}>
					00
				</button>
				<button
					value='.'
					onClick={e => {
						if (!el1.includes('.')) {
							setEl1(el1 + e.currentTarget.value)
						} else if (!el2.includes('.')) {
							setEl2(el2 + e.currentTarget.value)
						}
					}}
				>
					.
				</button>
				<button className='operator equal' value='=' onClick={() => equalHandler(symbol)}>
					=
				</button>
			</div>
		</div>
	)
}

export default App
