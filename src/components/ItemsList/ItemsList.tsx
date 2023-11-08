import './ItemsList.css'
import { Item } from '../Item/Item'
import { useState } from 'react'
import { DataType, OptionsType, ItemType } from "../PropsTypesModel/PropsTypesModel";

const ItemsList = ({data, options} : DataType & OptionsType) => {
	const [currentData, setData] = useState<Array<object>>(data)
	const handleDelete = (id: string) => setData(
		currentData.filter((item: ItemType) => item.id !== id))
	return (
		(!currentData.length) ?
		'Empty list!' :
		<ul className={'items-list'}>
			{currentData.map((item: ItemType) =>
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