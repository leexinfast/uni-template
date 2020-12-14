const state = {
	systemInfo: uni.getSystemInfoSync(),
	isPhoneX: false,
    navBarHeight: 0,//标题栏目高度
    statusBarHeight: 0,//系统状态栏高度
    boundingRight:0,//胶囊距右边距离
    padTop:0,//除去标题栏目的内容距顶部高度
    boundingHeight:0,//胶囊高度
}

const mutations = {
	setIphoneX(state, newVal) {
		state.isPhoneX = newVal
	},
    updateConfig(state, newVal) {
        state.config = newVal
    },
    updateNavBarHeight (state, newVal) {
        state.navBarHeight = newVal
    },
    updateStatusBarHeight(state, newVal) {
        state.statusBarHeight = newVal
    },
    updateBoundingRight(state, newVal) {
        state.boundingRight = newVal
    },
    updatePadTop(state, newVal) {
        state.padTop = newVal
    },
    updateBoundingHeight(state, newVal) {
        state.boundingHeight = newVal
    },
}

export default {
	state,
	mutations
}
