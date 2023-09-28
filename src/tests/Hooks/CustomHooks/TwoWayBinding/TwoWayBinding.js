import { useState } from 'react'

const useModel = (str = null) => {
	const [value, setValue] = useState(str)
	const handler = (e) => setValue(e.target.value)
	const model = {
		value,
		onChange: handler,
	}
	return {
		model,
		setModel: setValue,
	}
}

const TwoWayBinding = () => {
	const { model, setModel } = useModel('Tony')
	const reset = () => setModel('')
	return (
		<>
			<h2>{model.value}</h2>
			<input {...model}/>
			<button onClick={reset}>Reset</button>
		</>
	)
}

export default TwoWayBinding