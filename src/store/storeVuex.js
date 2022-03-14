import { createStore } from 'vuex'

export const storeVuex = createStore({
    state() {
        return {
            count: 5
        }
    },
    actions: {
        update({ commit, state }, k) {
            state.count = k;
        }
    }
})