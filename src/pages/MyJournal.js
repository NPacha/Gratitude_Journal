import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyJournal(props) {
	const [myList, setMyList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/api/items');
			console.log(response);
			setMyList(response.data);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="MyJournal">This is the {props.page} page</div>
			<div className={'MyList'}>
				{myList.length ? (
					myList.map(item => {
						return (
							<div className={'item'} key={item._id}>
								<p>{item.firstItem}</p>
								<p>{item.secondItem}</p>
								<p>{item.thirdItem}</p>
							</div>
						);
					})
				) : (
					<p>No list items yet</p>
				)}
			</div>
		</>
	);
}
