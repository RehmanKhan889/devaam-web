import Repository from './Repository';

const USER = '/users';

export default {
	get(payload) {
		return Repository.post(`${USER}`, payload);
	},
};
