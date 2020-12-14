<template>
    <view class="demo-skeleton">
        <skeleton
            :loading="loading"
            :avatarSize="skeleton1.avatarSize"
            :row="skeleton1.row"
            :imgTitle="true"
            :animate="true"
        >
            <view class="section-content">我是段落1</view>
        </skeleton>

        <skeleton
            :loading="loading"
            :avatarSize="skeleton1.avatarSize"
            :nameRow="5"
            flexType="space-between"
        >
            <view class="section-content">我是段落2</view>
        </skeleton>

        <skeleton
            :loading="loading"
            :avatarSize="skeleton1.avatarSize"
            :nameRow="5"
            avatarShape="square"
            flexType="space-between"
        >
            <view class="section-content">我是段落3</view>
        </skeleton>

        <skeleton
            :loading="loading"
            :avatarSize="skeleton1.avatarSize"
            :row="skeleton1.row"
            :showTitle="true"
        >
            <view class="section-content">我是段落4</view>
        </skeleton>

        <skeleton
            :loading="loading"
            :row="16"
            :showAvatar="false"
            :showTitle="true"
            :animate="true"
        >
            <view class="section-content">我是段落5</view>
        </skeleton>

        <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
            <view v-for="(data,index) in dataList" :key="index"> 数据列表... </view>
        </mescroll-body>
    </view>
</template>

<script>
    import Skeleton from '../../../components/J-skeleton/J-skeleton.vue';
    import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";

    export default {
        mixins: [MescrollMixin],
        components:{
            Skeleton,
            MescrollBody
        },
        data() {
            return {
                loading: true,
                skeleton1 : {
                    avatarSize: '52rpx',
                    row: 3,
                    showTitle: true,
                },
                dataList:[]
            }
        },
        mounted(){
            this.reloadData();
        },
        methods: {
            reloadData() {
                this.loading = false
                // setTimeout(() => {
                //     this.loading = false
                // }, 30000)
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
