<template>
    <view class="app-container">
        <tui-navigation-bar splitLine @init="initNavigation" @change="opacityChange" :scrollTop="scrollTop" title="我的" backgroundColor="#fff" color="#333"></tui-navigation-bar>
        <view class="tui-mybg-box">
            <image src="https://www.thorui.cn/wx/static/images/mall/my/img_bg_3x.png" class="tui-my-bg" mode="widthFix"></image>
            <view class="tui-header-center">
                <image src="/static/images/facebook.png" class="tui-avatar"></image>
                <view class="tui-info font-size-28 color-white">
                    <view>昵称</view>
                    <view>手机号</view>
                </view>
            </view>
        </view>

        <view class="tui-content-box">
            <view class="tui-box" v-for="(item,index) in 3" :key="index">
                <tui-list-cell :arrow="true" padding="0" :lineLeft="false">
                    <view class="tui-cell-header" @click="toOrderList">
                        <view class="tui-cell-title">我的订单</view>
                        <view class="tui-cell-sub">查看全部订单</view>
                    </view>
                </tui-list-cell>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            top: 0,
            opacity: 0,
            scrollTop:0,
        }
    },
    methods: {
        initNavigation(e) {
            this.opacity = e.opacity;
            this.top = e.top;
        },
        opacityChange(e) {
            this.opacity = e.opacity;
        },
        toOrderList(){
            uni.navigateTo({url:'/pagesA/order/list/list'})
        }
    },
    onPullDownRefresh(){
          setTimeout(() => {
              uni.stopPullDownRefresh();
          },1000)
    },
    onPageScroll(e) {
        this.scrollTop = e.scrollTop;
    }
}
</script>

<style lang="scss" scoped>
.app-container{
    .tui-mybg-box {
        width: 100%;
        height: 464rpx;
        position: relative;
        background: #f7f7f7;
        .tui-my-bg {
            width: 100%;
            //height: 464rpx;
            height: 100%;
            display: block;
        }
        .tui-header-center {
            position: absolute;
            width: 100%;
            height: 128rpx;
            left: 0;
            top: 120rpx;
            padding: 0 30rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .tui-avatar {
                flex-shrink: 0;
                width: 128rpx;
                height: 128rpx;
                display: block;
            }
            .tui-info{
                padding-left: 20rpx;
            }
        }
    }

    .tui-content-box {
        width: 100%;
        padding: 0 30rpx;
        box-sizing: border-box;
        position: relative;
        top: -72rpx;
        z-index: 10;
        //background: #ff7900;
        .tui-box {
            width: 100%;
            background: #fff;
            box-shadow: 0 3rpx 20rpx rgba(183, 183, 183, 0.1);
            border-radius: 10rpx;
            overflow: hidden;
            height: 208rpx;
            margin-bottom: 20rpx;
            .tui-cell-header {
                width: 100%;
                height: 74rpx;
                padding: 0 26rpx;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .tui-cell-title {
                    font-size: 30rpx;
                    line-height: 30rpx;
                    font-weight: 600;
                    color: #333;
                }

                .tui-cell-sub {
                    font-size: 26rpx;
                    font-weight: 400;
                    color: #999;
                    padding-right: 28rpx;
                }
            }
        }
    }
}

</style>

<style>
 page{
     background: #f7f7f7;
 }
</style>
