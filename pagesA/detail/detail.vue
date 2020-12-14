<template>
    <view class="app-container">
<!--        <tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>-->
        <!--header-->
        <view class="tui-header-box" :style="{ height: height + 'px', background: 'rgba(255,255,255,' + opcity + ')' }">
            <view class="tui-header" :style="{ paddingTop: top + 'px', opacity: opcity }">商品详情</view>
            <view class="tui-header-icon" :style="{ marginTop: top + 'px' }">
                <view class="tui-icon-box" :style="{ backgroundColor: 'rgba(0, 0, 0,' + iconOpcity + ')' }" @tap="back">
                    <tui-icon name="arrowleft" :size="30" :color="opcity >= 1 ? '#000' : '#fff'"></tui-icon>
                </view>

                <view class="tui-icon-box tui-icon-ml" :style="{backgroundColor: 'rgba(0, 0, 0,' + iconOpcity + ')'}">
                    <tui-icon name="more-fill" :size="20" :color="opcity >= 1 ? '#000' : '#fff'"></tui-icon>
                    <tui-badge type="red" :scaleRatio="0.8" absolute top="0" right="-4rpx">5</tui-badge>
                </view>

            </view>
        </view>
        <!--header-->
<!--        <view class="list-content">-->
<!--            <view class="list-item">-->

<!--            </view>-->
<!--        </view>-->
<!--        <image class="logo" src="../../static/logo.png" v-for="(item,index) in 10" :key="index"></image>-->
<!--        <tui-button margin="0 20rpx 26rpx 0" type="danger" shadow width="100rpx" height="50rpx" :size="24">small</tui-button>-->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                height: 64, //header高度
                top: 26, //标题图标距离顶部距离
                scrollH: 0, //滚动总高度
                opcity: 0,
                iconOpcity: 0.5,
                scrollTop:0,
                skeletonShow:true
            }
        },
        onLoad() {
            // setTimeout(() => {
            //     this.skeletonShow = false
            // }, 3000);
            let obj = {};
            // #ifdef MP-WEIXIN
            obj = wx.getMenuButtonBoundingClientRect();
            // #endif
            // #ifdef MP-BAIDU
            obj = swan.getMenuButtonBoundingClientRect();
            // #endif
            // #ifdef MP-ALIPAY
            my.hideAddToDesktopMenu();
            // #endif
            setTimeout(() => {
                uni.getSystemInfo({
                    success: res => {
                        this.width = obj.left || res.windowWidth;
                        this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
                        this.top = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
                        this.scrollH = res.windowWidth;
                        // console.log(this.scrollH,'leexin')
                    }
                });
            }, 0);
        },
        methods: {
            back: function() {
                uni.navigateBack();
            },
        },
        onPageScroll(e) {
            // console.log(e,'lee')
            this.scrollTop = e.scrollTop
            let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
            let opcity = scroll / this.scrollH;
            if (this.opcity >= 1 && opcity >= 1) {
                return;
            }
            this.opcity = opcity;
            this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity);
        }
    }
</script>

<style lang="scss" scoped>
    .app-container{
        .tui-header-box {
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 995;
            .tui-header {
                width: 100%;
                font-size: 18px;
                line-height: 18px;
                font-weight: 500;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .tui-header-icon {
                position: fixed;
                top: 0;
                left: 10px;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                height: 32px;
                transform: translateZ(0);
                z-index: 9999;
                .tui-icon-box {
                    position: relative;
                    height: 20px !important;
                    width: 20px !important;
                    padding: 6px !important;

                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .tui-icon-ml {
                    margin-left: 20rpx;
                }
            }
        }

        .logo{
            width: 150rpx;
            height: 150rpx;
        }

        .sticky-item{
            width: 100%;
            height: 104rpx;
            padding: 20rpx 30rpx;
            background-color: #fafafa;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            .date {
                height: 54rpx;
                font-size: 28rpx;
                background-color: #fff;
                padding: 0 28rpx;
                border-radius: 25rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                /* box-shadow: 0 0 1rpx #7A7A7A; */
                &::after {
                    content: '';
                    position: absolute;
                    height: 200%;
                    width: 200%;
                    border: 1rpx solid #eaeef1;
                    border-radius: 60rpx;
                    -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
                    -webkit-transform: scale(0.5);
                    transform: scale(0.5);
                    left: 0;
                    top: 0;
                }
            }
            .amount {
                text-align: right;
                color: #7A7A7A;
                font-size: 24rpx;
            }
        }

        .list-view{
            position: relative;
            width: 100%;
            overflow: hidden;
            &::after {
                content: '';
                position: absolute;
                border-top: 1rpx solid #eaeef1;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
                top: 0;
                right: 0;
                left: 0;
            }
            .tui-list-item {
                width: 100%;
                padding: 30rpx 28rpx;
                box-sizing: border-box;
                background: #fff;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                &::after {
                    left: 120rpx
                }
                .content-box {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    .des-box{
                        min-height: 130rpx;
                        padding-left: 28rpx;
                        box-sizing: border-box;
                        vertical-align: top;
                        color: #333;
                        font-size: 24rpx;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .tit {
                            font-size: 32rpx;
                            max-width: 420rpx;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .time {
                            color: #888
                        }
                    }
                }
                .money {
                    font-size: 38rpx;
                    font-weight: 500;
                    color: #000;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-left: 20rpx;
                }
                .add {
                    color: #5677FC !important;
                }
            }
        }
    }
</style>
