import { useState, useEffect } from 'react'

const withData = (getData) => (View) => (props) => {
	const [data, setData] = useState([])
	useEffect(() => {
		getData().then(res => {
			setData(res)
		})
	}, [])
	return (
	   <View {...props} data={data}/>
	)
}

const withSpinner = (Spinner) => (View) => (props) => {
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		if (props.data.length) setLoaded(true)
	},[props.data.length])
	return (
	  (!props.data.length && !loaded) ?
		<Spinner/> :
		<View {...props}/>
	)
}

const withDataAndSpinner = (getData, Spinner) => (View) => (props) => {
	const [data, setData] = useState([])
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		getData().then(res => {
			setData(res)
			setLoaded(true)
		})
	}, [])
	return (
	  (!loaded) ?
		<Spinner/>:
		<View {...props} data={data}/>
	)
}

const withListOptions = (options) => (View) => (props) => {
	return (
	  <View {...props} options={options}/>
	)
}

export {
	withData,
    withSpinner,
	withDataAndSpinner,
	withListOptions
}
