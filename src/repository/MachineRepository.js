import Repository from './Repository';

export default {
	get(payload) {
		return Repository.post(`/machines`, payload);
	},
};
