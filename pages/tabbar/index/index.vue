<template>
    <view class="app-container">
        <tui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></tui-skeleton>
<!--                <tui-button margin="0 0 30rpx 0" :size="34" bold @click="handleClick">页面主操作</tui-button>-->
<!--        <tui-navigation-bar splitLine @init="initNavigation" @change="opacityChange" :scrollTop="scrollTop" title="首页" backgroundColor="#fff" color="#333"></tui-navigation-bar>-->


        <!--banner-->
        <view class="tui-header-banner">
            <view class="tui-banner-bg">
<!--                <view class="tui-primary-bg tui-route-left"></view>-->
<!--                <view class="tui-primary-bg tui-route-right"></view>-->
                <!--banner-->
<!--                <view class="search-content">搜索搜</view>-->
<!--                <view class="tui-banner-box">-->
<!--                    <swiper-->
<!--                        :indicator-dots="true"-->
<!--                        :autoplay="false"-->
<!--                        :interval="5000"-->
<!--                        :duration="150"-->
<!--                        class="tui-banner-swiper"-->
<!--                        :circular="true"-->
<!--                        indicator-color="rgba(255, 255, 255, 0.8)"-->
<!--                        indicator-active-color="#fff"-->
<!--                    >-->
<!--                        <swiper-item v-for="(item, index) in bannerList" :key="index">-->
<!--                            <image :src="item" class="tui-slide-image" mode="scaleToFill" />-->
<!--                        </swiper-item>-->
<!--                    </swiper>-->
<!--                </view>-->
            </view>
        </view>
        <!--banner-->

        <view class="content tui-skeleton">
<!--            <tui-list-view title="1111">-->
<!--                <tui-list-cell @click="detail" :arrow="false" v-for="(item,index) in list" :key="index">-->
<!--                    {{item.content}}-->
<!--                </tui-list-cell>-->
<!--            </tui-list-view>-->
            <view class="title tui-skeleton-rect" @click="popupShow = true"><text>商品列表</text></view>
            <view class="list">
                <view class="list-container">
                    <block v-for="(item, index) in productList" :key="index" v-if="(index + 1) % 2 != 0">
                        <!--商品列表-->
                        <view class="list-item" hover-class="hover" :hover-start-time="150" @tap="handleDetail">
                            <image class="list-img tui-skeleton-rect" mode="widthFix" src="/static/images/facebook.png" ></image>
                            <view class="text-content">
                                <text class="font-size-32 color-blue tui-skeleton-rect">{{item.text1}}</text>
                                <text class="font-size-24 color-grey tui-skeleton-rect">{{item.text2}}</text>
                            </view>
                        </view>
                    </block>
                </view>
                <view class="list-container">
                    <block v-for="(item, index) in productList" :key="index" v-if="(index + 1) % 2 == 0">
                        <!--商品列表-->
                        <view class="list-item" hover-class="hover" :hover-start-time="150" @tap="handleDetail">
                            <image class="list-img tui-skeleton-rect" mode="widthFix" src="/static/images/facebook.png" ></image>
                            <view class="text-content">
                                <text class="font-size-32 color-blue tui-skeleton-rect">{{item.text1}}</text>
                                <text class="font-size-24 color-grey tui-skeleton-rect">{{item.text2}}</text>
                            </view>
                        </view>
                    </block>
                </view>
            </view>
        </view>

        <!--底部选择层-->
        <tui-bottom-popup :show="popupShow" @close="popupShow = false">
            <view class="tui-popup-box">
<!--                <view class="tui-product-box tui-padding">-->
<!--                    <image src="https://www.thorui.cn/img/product/11.jpg" class="tui-popup-img"></image>-->
<!--                    <view class="tui-popup-price">-->
<!--                        <view class="tui-amount tui-bold">￥49.00</view>-->
<!--                        <view class="tui-number">编号:4373299399393</view>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <scroll-view scroll-y class="tui-popup-scroll">-->
<!--                    <view class="tui-scrollview-box">-->
<!--                        <view class="tui-bold tui-attr-title">颜色</view>-->
<!--                        <view class="tui-attr-box">-->
<!--                            <view class="tui-attr-item">五角星钻耳线</view>-->
<!--                            <view class="tui-attr-item">米子珍珠耳线</view>-->
<!--                            <view class="tui-attr-item">花朵镶钻耳线</view>-->
<!--                            <view class="tui-attr-item">扇子珍珠流苏耳线</view>-->
<!--                            <view class="tui-attr-item tui-attr-active">扇子珍珠流苏耳线耳线</view>-->
<!--                        </view>-->

<!--                        <view class="tui-number-box tui-bold tui-attr-title">-->
<!--                            <view class="tui-attr-title">数量</view>-->
<!--                            <tui-numberbox :max="99" :min="1" :value="value" @change="change"></tui-numberbox>-->
<!--                        </view>-->
<!--                        <view class="tui-bold tui-attr-title">尺寸</view>-->
<!--                        <view class="tui-attr-box">-->
<!--                            <view class="tui-attr-item">5cm</view>-->
<!--                            <view class="tui-attr-item">8cm</view>-->
<!--                            <view class="tui-attr-item">12cm</view>-->
<!--                            <view class="tui-attr-item">16cm</view>-->
<!--                            <view class="tui-attr-item tui-attr-active">18cm</view>-->
<!--                        </view>-->

<!--                        <view class="tui-bold tui-attr-title">保障服务</view>-->
<!--                        <view class="tui-attr-box">-->
<!--                            <view class="tui-attr-item">半年掉钻保 ￥4.0</view>-->
<!--                        </view>-->

<!--                        <view class="tui-bold tui-attr-title">只换不修</view>-->
<!--                        <view class="tui-attr-box">-->
<!--                            <view class="tui-attr-item">三月意外换￥2.0</view>-->
<!--                            <view class="tui-attr-item">半年意外换￥2.0</view>-->
<!--                        </view>-->
<!--                    </view>-->
<!--                </scroll-view>-->
<!--                <view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn">-->
<!--                    <view class="tui-flex-1">-->
<!--                        <tui-button height="72rpx" :size="28" type="danger" shape="circle" @click="hidePopup">加入购物车</tui-button>-->
<!--                    </view>-->
<!--                    <view class="tui-flex-1">-->
<!--                        <tui-button height="72rpx" :size="28" type="warning" shape="circle" @click="submit">立即购买</tui-button>-->
<!--                    </view>-->
<!--                </view>-->
<!--                <view class="tui-right">-->
<!--                    <tui-icon name="close-fill" color="#999" :size="20" @click="hidePopup"></tui-icon>-->
<!--                </view>-->
            </view>
        </tui-bottom-popup>
        <!--底部选择层-->

        <tui-tips ref="toast"></tui-tips>
        <tui-loadmore v-if="loading" :index="3" type="red"></tui-loadmore>
        <tui-nomore v-if="!pullUpOn"></tui-nomore>
        <view class="tui-safearea-bottom"></view>
        <tui-scroll-top :scrollTop="scrollTop"></tui-scroll-top>
    </view>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            pullUpOn: true,
            skeletonShow:false,
            popupShow:false,
            list:[],
            top: 0, //标题图标距离顶部距离
            opacity: 0,
            pageIndex:1,
            dataSources:[
                {
                    text1:'标题1标题1标题1标题1标题1标题1',
                    text2:'副标题1',
                },
                {
                    text1:'标题2',
                    text2:'副标题2',
                },
                {
                    text1:'标题3',
                    text2:'副标题3',
                },
                {
                    text1:'标题4标题4标题4标题4标题4标题4',
                    text2:'副标题4',
                },
                {
                    text1:'标题5',
                    text2:'副标题5',
                },
            ],
            scrollTop:0,
            productList:[
                {
                    text1:'标题1标题1标题1标题1标题1标题1',
                    text2:'副标题1',
                },
                {
                    text1:'标题2',
                    text2:'副标题2',
                },
                {
                    text1:'标题3',
                    text2:'副标题3',
                },
                {
                    text1:'标题4标题4标题4标题4标题4标题4',
                    text2:'副标题4',
                },
                {
                    text1:'标题5',
                    text2:'副标题5',
                },
            ],
            bannerList:[
                '/static/images/banner/1.jpg',
                '/static/images/banner/2.jpg',
                '/static/images/banner/3.jpg',
                '/static/images/banner/4.jpg',
                '/static/images/banner/5.jpg',
            ]
        }
    },
    onLoad() {
        // setTimeout(() => {
        //     this.skeletonShow = false
        // }, 2000);
    },
    watch:{
        scrollTop(newVal,oldVal){
            // console.log(newVal,'newVal')
            // console.log(oldVal,'oldVal')
            if(newVal >= 60){
                uni.setNavigationBarTitle({
                    title: '首页'
                });
            }else{
                uni.setNavigationBarTitle({
                    title: ''
                });
            }
        }
    },
    methods: {
        handleClick() {

        },
        initNavigation(e) {
            this.opacity = e.opacity;
            this.top = e.top;
        },
        opacityChange(e) {
            this.opacity = e.opacity;
        },
        handleDetail(){
            uni.navigateTo({url:'/pagesA/detail/detail2'});
        }
    },
    onPullDownRefresh(){
        this.pageIndex = 1;
        this.productList = this.dataSources;
        this.pullUpOn = true;
        this.loading = false;
        uni.stopPullDownRefresh();
        let options = {
            msg: "刷新成功，为你更新了5条数据",
            duration: 2000,
            type: "translucent"
        };
        setTimeout(() => {
            this.$refs.toast.showTips(options);
        }, 300);
    },
    onReachBottom() {
        if (!this.pullUpOn) return;
        this.loading = true;
        if (this.pageIndex == 3) {
            this.loading = false;
            this.pullUpOn = false
        } else {
            setTimeout(() => {
                this.productList = [...this.productList,...this.dataSources];
                this.pageIndex++;
                this.loading = false;
            },2500)
        }
    },
    onPageScroll(e) {
        this.scrollTop = e.scrollTop;
    }
}
</script>

<style lang="scss" scoped>
    .app-container {
        //padding-bottom: env(safe-area-inset-bottom);
        //padding-bottom: 80rpx;
        .tui-header-banner{
            //padding-top: 100rpx;
            box-sizing: border-box;
            background: #ff7900;
            border-bottom-right-radius: 100rpx;
            border-bottom-left-radius: 100rpx;
            .tui-banner-bg {
                display: flex;
                height: 180rpx;
                background-color: #ff7900;
                position: relative;
                border-bottom-right-radius: 100rpx;
                border-bottom-left-radius: 100rpx;
                .tui-primary-bg {
                    width: 50%;
                    display: inline-block;
                    height: 224rpx;
                    border: 1px solid transparent;
                    position: relative;
                    z-index: 1;
                    background-color: #ff7900;
                }

                .tui-route-left {
                    transform: skewY(8deg);
                }

                .tui-route-right {
                    transform: skewY(-8deg);
                }

                .tui-banner-box{
                    width: 100%;
                    padding: 0 20rpx;
                    box-sizing: border-box;
                    position: absolute;
                    /* overflow: hidden; */
                    z-index: 99;
                    bottom: -80rpx;
                    left: 0;
                    .tui-banner-swiper {
                        width: 100%;
                        height: 240rpx;
                        border-radius: 12rpx;
                        overflow: hidden;
                        transform: translateY(0);
                        .tui-slide-image {
                            width: 100%;
                            height: 240rpx;
                            display: block;
                        }
                    }
                }
            }
        }
        .tui-safearea-bottom {
            width: 100%;
            height: env(safe-area-inset-bottom);
        }
        .content{
            margin-top: 20rpx;
            padding: 0 20rpx;
            box-sizing: border-box;
            .title{
                width: 100%;
                font-size: 32rpx;
                font-weight: bold;
                text-align: center;
                padding: 24rpx 0;
            }
            .list{
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: wrap;
                box-sizing: border-box;
                .list-container{
                    flex: 1;
                    margin-right: 2%;
                    &:last-child{
                        margin-right: 0;
                    }
                    .list-item{
                        width: 100%;
                        margin-bottom: 4%;
                        background: #fff;
                        box-sizing: border-box;
                        border-radius: 12rpx;
                        overflow: hidden;
                        .list-img{
                            width: 100%;
                            display: block;
                        }
                        .text-content{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            box-sizing: border-box;
                            padding: 20rpx;
                        }
                    }
                }
            }
        }

        .tui-popup-box{
            height: 500rpx;
        }
    }
</style>

<style>
    .tui-banner-swiper .wx-swiper-dot {
        width: 8rpx;
        height: 8rpx;
        display: inline-flex;
        background: none;
        justify-content: space-between;
    }

    .tui-banner-swiper .wx-swiper-dot::before {
        content: '';
        flex-grow: 1;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 16rpx;
        overflow: hidden;
    }

    .tui-banner-swiper .wx-swiper-dot-active::before {
        background-color: #fff;
    }

    .tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
        width: 16rpx;
    }

    >>> .tui-banner-swiper .uni-swiper-dot {
        width: 8rpx;
        height: 8rpx;
        display: inline-flex;
        background-color: none;
        justify-content: space-between;
    }

    >>> .tui-banner-swiper .uni-swiper-dot::before {
        content: '';
        flex-grow: 1;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 16rpx;
        overflow: hidden;
    }

    >>> .tui-banner-swiper .uni-swiper-dot-active::before {
        background-color: #fff;
    }

    >>> .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
        width: 16rpx;
    }
    page {
        background-color: #f7f7f7;
    }
</style>
