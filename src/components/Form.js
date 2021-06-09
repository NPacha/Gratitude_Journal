import React, { useState, useRef } from 'react';

export default function Form(props) {
	const firstItem = useRef(null);
	const secondItem = useRef(null);
	const thirdItem = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/items', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstItem: firstItem.current.value,
					secondItem: secondItem.current.value,
					thirdItem: thirdItem.current.value
				})
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className={'form'}>
				<form onSubmit={handleSubmit}>
					<label>
						1.
						<input type="text" ref={firstItem} />
					</label>
					<label>
						2.
						<input type="text" ref={secondItem} />
					</label>
					<label>
						3.
						<input type="text" ref={thirdItem} />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	);
}
