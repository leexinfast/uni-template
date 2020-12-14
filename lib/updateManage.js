// #ifndef H5
// 更新版本提示
if (uni.canIUse('getUpdateManager')) {
	const updateManager = uni.getUpdateManager()
	updateManager.onCheckForUpdate(function(res) {
		// 请求完新版本信息的回调
		if (res.hasUpdate) {
			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
		}
	})

    updateManager.onUpdateFailed(function(res) {
        // 新的版本下载失败
        uni.showModal({
            title: '提示',
            content: '检查到有新版本，但下载失败，请检查网络设置',
            success(res) {
                if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                }
            }
        });
    });
}
// #endif
