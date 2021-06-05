import React, { useState } from 'react';

export default function Form(props) {
	return (
		<>
			<div className={'form'}>
				<form>
					<label>
						1.
						<input type="text" />
					</label>
					<label>
						2.
						<input type="text" />
					</label>
					<label>
						3.
						<input type="text" />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	);
}
