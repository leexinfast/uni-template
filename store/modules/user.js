const state = {
    userInfo: null, // 用户数据
}

const mutations = {
	updateUserInfo(state, newVal) {
		state.userInfo = newVal
	}
}

export default {
	state,
	mutations
}
