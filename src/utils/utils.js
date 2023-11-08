import { nanoid } from 'nanoid'

const compose = (...fns) =>
	fns.reduceRight((prevFn, nextFn) =>
		(...args) => nextFn(prevFn(...args)), value => value,
	)

const checkValidUrl = urlString => {
	const urlPattern = new RegExp('^(https?:\\/\\/)?' +
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
		'((\\d{1,3}\\.){3}\\d{1,3}))' +
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
		'(\\?[;&a-z\\d%_.~+=-]*)?' +
		'(\\#[-a-z\\d_]*)?$', 'i')
	return !!urlPattern.test(urlString)
}

const checkNonEmptyObject = obj => (typeof obj === 'object' && obj.length)

const checkInnerRecords = (records) => {
	return checkNonEmptyObject(records) ? (
		<ul>{records.map(el =>
			<li key={nanoid()}>
				{checkNonEmptyObject(records) ? checkInnerRecords(el) : el}
			</li>)}
		</ul>) :
		checkValidUrl(records) ?
			<a href={records}>{records}</a> :
		records + ' '
}

const filteredData = (data) => {
	let temp = [];
	for (let key in data) {
		if (data[key]) temp.push(key)
	}
	return temp
}

const _extractId = (item) => {
	const idRegExp = /\/([0-9]*)\/$/;
	return item.url.match(idRegExp)[1];
};

export {
	compose,
	checkInnerRecords,
	filteredData,
	_extractId
}