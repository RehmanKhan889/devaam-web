import Repository from './Repository';

const Metrics = '/metrics';

export default {
	get(payload) {
		return Repository.post(`${Metrics}`, payload);
	},
};
