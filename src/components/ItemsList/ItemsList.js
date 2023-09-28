import './ItemsList.css'
import { Item } from '../Item/Item'
import { useState } from 'react'

const ItemsList = ({ data, options = {} }) => {
	const [currentData, setData] = useState(data)
	const handleDelete = (id) => setData(
		currentData.filter(item => item.id !== id))
	return (
		(!currentData.length) ?
		'Empty list!' :
		<ul className={'items-list'}>
			{currentData.map(item =>
				<Item key={item.id}
				      item={item}
				      handleDelete={handleDelete}
				      options={options}
				/>
			)}
		</ul>
	)
}

export default ItemsList