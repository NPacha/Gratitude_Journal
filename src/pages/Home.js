import React, { useState, useRef } from 'react';
import Form from '../components/Form';

export default function Home(props) {
	let currentDate = new Date().toLocaleDateString();
	console.log(currentDate);

	return (
		<div className="HomePage">
			<h1>Be the Best You</h1>
			<p>{currentDate}</p>
			<h3>
				Strive to be the best version of yourself in life, and take steps each
				day towards this.
			</h3>
			<h3>
				Ask yourself today- what actions have I done to be closer to a better
				me?
			</h3>
			<form>
				<label>
					<input type="text" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<h3>List three things you are grateful for:</h3>
			<Form />
		</div>
	);
}
