
import { createStore } from 'vuex';

const store = createStore({
  state: {
    userId: ''
  },
  mutations: {
    setUserId(state, payload) {
        state.userId = payload
    }
  },
  getters: {
    getUserId: (state) => state.userId,
  },
});

export default store;