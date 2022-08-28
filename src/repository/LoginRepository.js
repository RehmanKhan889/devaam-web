import Repository from './Repository';

export default {
	get(payload) {
		console.log('=>', payload);
		return Repository.post(`/users`, payload);
	},
};
