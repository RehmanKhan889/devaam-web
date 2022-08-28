import axios from 'axios';

const baseURL = `https://davaam-life.herokuapp.com`;

export default axios.create({
	baseURL,
	headers: {
		'Cache-Control': 'no-cache',
		'Content-Type': 'application/json',
	},
});
