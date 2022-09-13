import Repository from "./Repository";

export default {
  get(payload) {
    return Repository.post(`/details/bottle`, payload);
  },
};
