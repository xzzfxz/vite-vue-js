import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			count: 0,
		}
	},
	mutations: {
		increament(state) {
			state.count++
		},
	},
	actions: {
		increament(context) {
			context.commit('increament')
		},
	},
})

export default store