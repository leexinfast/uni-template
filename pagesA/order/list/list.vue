<template>
    <view class="app-container">
        <scroll-view id="tab-bar" scroll-with-animation class="tui-scroll-h" :scroll-x="true" :scroll-into-view="scrollInto" enable-back-to-top>
            <view v-for="(tab, index) in tabBars" :key="tab.id" class="tui-tab-item" :id="tab.id" :data-current="index" @click="tabClick">
                <view class="tui-tab-item-title" :class="{ 'tui-tab-item-title-active': tabIndex == index }">{{ tab.name }}</view>
            </view>
        </scroll-view>
    </view>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            tabBars: [
                {
                    name:'全部',
                    id:0
                },
                {
                    name:'待付款',
                    id:1
                },
                {
                    name:'待发货',
                    id:2
                },
                {
                    name:'待收货',
                    id:3
                },
                {
                    name:'待评价',
                    id:4
                },
                {
                    name:'已完成',
                    id:5
                },
            ],
            tabIndex:0,
            scrollInto:''
        }
    },
    methods: {
        tabClick(e) {
            this.tabIndex = index;
            let index = e.target.dataset.current || e.currentTarget.dataset.current;
            // console.log(index)
            let scrollIndex = index - 1 < 0 ? 0 : index - 1;
            this.scrollInto = this.tabBars[scrollIndex].id;
        }
    },
}
</script>

<style scoped>
.tui-scroll-h {
    width: 750rpx;
    height: 80rpx;
    background-color: #ffffff;
    flex-direction: row;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
    /* #ifdef H5 */
    position: fixed;
    top: 44px;
    left: 0;
    z-index:999;
    /* #endif */
}
.tui-tab-item {
    /* #ifndef APP-PLUS */
    display: inline-block;
    /* #endif */
    flex-wrap: nowrap;
    padding-left: 34rpx;
    padding-right: 34rpx;
}

.tui-tab-item-title {
    color: #555;
    font-size: 30rpx;
    height: 80rpx;
    line-height: 80rpx;
    flex-wrap: nowrap;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
}

.tui-tab-item-title-active {
    color: #5677fc;
    font-size: 36rpx;
    font-weight: bold;
    border-bottom-width: 6rpx;
    border-style: solid;
    border-color: #5677fc;
    text-align: center;
}
</style>
