import { useEffect, useRef, useState } from 'react'
import './UseEffectsHook.css'
import { useCallback } from 'react'

const UseEffectsHook = () => {
	// use Callback to avoid endless cycle
	const getResult = useCallback(() => {
		return 2*3
	}, [])
	const maxClicks = 5
	const alertCLicks = 2
	const minClicks = 0
	const [count, setCount] = useState(0)
	const [msg, setMsg] = useState('')
	const [style, setStyle] = useState('')
	const msgRef = useRef(null)
	const handleIncrease = () => count < maxClicks ? setCount(count + 1) : ''
	const handleDecrease = () => count > minClicks ? setCount(count - 1) : ''
	useEffect(() => {
		setCount((count) => count++)
	},[getResult])
	useEffect(() => {
		const alertMsg = `You click: ${count} times, try to stop!`
		const finalMsg = 'Too much clicks! No more!'
		if (count > alertCLicks && count < maxClicks) {
			setMsg(alertMsg);
			setStyle('use-effects__msg--alert')
			msgRef.current.style.backgroundColor = 'grey'
		}
		else if (count >= maxClicks) {
			setMsg(finalMsg)
			setStyle('use-effects__msg--final')
		}
		else {
			setMsg('')
			setStyle('')
		}
	}, [count])
	return (
	  <div className={'use-effects'}>
		  <span>{count}</span>
		  <p ref={msgRef} className={'use-effects_msg ' + style}>{msg ? msg : ''}</p>
		  <button onClick={handleIncrease}>Increase Count</button>
		  <button onClick={handleDecrease}>Decrease Count</button>
	  </div>
	)
}

export default UseEffectsHook