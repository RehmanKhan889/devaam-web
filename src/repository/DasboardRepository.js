import Repository from './Repository';

export default {
	get(payload) {
		return Repository.post(`/metrics`, payload);
	},
	getNotifications(payload) {
		return Repository.post('/notifications', payload);
	},
};
