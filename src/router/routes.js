import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';
import MyJournal from '../pages/MyJournal';

const routes = [
	{
		Component: MyJournal,
		key: 'My Journal',
		path: '/myjournal'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
