<template>
	<view class="content">
		<view class="flex-between top">
			<view class="">
				<view class="">
					可用余额(USDT)
				</view>
				<view class="font-big font-bold">
					00000.0000
				</view>
			</view>
			<view class="">
				<view class="iconfont font-big font-bold">
					&#xe7e5;
				</view>
				<view class="">
					提现
				</view>
			</view>
		</view>
		
		<view class="bgbox">

		</view>
		<view class="font-bold flex title padding font-middle border-bottom">
			我的资产
		</view>
		<view class="list-item font-middle">
			<view class="rule padding flex-between border-bottom">
				<view class="">
					<view class="">
						产品一号(静态收益)
					</view>
					<view class="font-gray font-small">
						2019-09-10 14:30:15
					</view>
				</view>
				<view class="">
					+1000 USDT
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				showPinMask:true,
				
			};
		},

		onLoad(options) {

		},
		onPullDownRefresh() {

		},
		methods: {
		
			
		}
	}
</script>

<style scoped lang="scss">
	.bgbox {
		background-color: #F8F8F8;
		height: 20rpx;
	}

	.content {
		background-color: #fff;
		font-size: 24rpx;
		color: #333;
		height: 1334rpx;
		.top {
			font-size: 30rpx;
			margin-top: 20rpx;
			padding: 40rpx 20rpx;
			box-sizing: border-box;
		}
		.list-item{
			line-height: 50rpx;
		}
		.title{
			height: 100rpx;
		}
		.rule{
			height: 140rpx;
		}
		
	}
</style>
