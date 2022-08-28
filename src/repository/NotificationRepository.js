import Repository from './Repository';

const Notifications = '/notification';

export default {
	get(payload) {
		return Repository.post(`${Notifications}`, payload);
	},
};
