import Repository from './Repository';

export default {
	get(payload) {
		return Repository.post(`/locations`, payload);
	},
	add(payload) {
		return Repository.post(`/locations`, payload);
	},
	update(payload) {
		return Repository.post(`/locations`, payload);
	},
	delete(payload) {
		return Repository.post(`/locations`, payload);
	},
};
