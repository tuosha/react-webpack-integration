import {nanoid} from 'nanoid'
import { checkInnerRecords } from '../../utils/utils'

export const Item = ({ item, handleDelete, options }) => {
	const { deleteBtn } = options
	const records =
		<li key={item.id}>
			{Object.entries(item).map(([, val]) =>
				<span key={nanoid()}>{checkInnerRecords(val)}</span>
			)}
			{(deleteBtn) ?
			 <button className={'btn btn-danger'} onClick={() => handleDelete(item.id)}>Delete</button> : ''}
		</li>
	return (
		records
	)
}