<template>
	<view class="content">
		<view class="text-center top">
			<view class="">
				<view class="">
					总资产(USDT)
				</view>
			</view>
			<view class="">
				<view class="font-big font-bold margin-top">
					00000.0000
				</view>
			</view>
			<view class="flex-between margin-top padding">
				<view class="">
					<view class="iconfont font-bold font-big font-blue">
						&#xe7e4;
					</view>
					<view class="font-small">
						充值
					</view>
				</view>
				<view class="">
					<view class="iconfont font-bold font-big font-blue">
						&#xe7e5;
					</view>
					<view class="font-small">
						提现
					</view>
				</view>
				<view class="">
					<view class="iconfont font-bold font-big font-blue">
						&#xe7e3;
					</view>
					<view class="font-small">
						账单
					</view>
				</view>
			</view>
		</view>
		
		<view class="bgbox">

		</view>
		<view class="font-bold flex title padding font-middle flex-between">
			<text class="font-bold">我的资产</text> <text class="iconfont">&#xea25;</text>
		</view>
		<view class="padding">
			<view class="list-item border-bottom flex-between flex">
				<view class="flex-row flex">
					<view class="">
						<image class="img" src="../../../static/images/BTC@2x.png" mode=""></image>
					</view>
					<view class="">
						<view class="">
							BTC
						</view>
						<view class="">
							0.000
						</view>
					</view>
				</view>
				<view class="">
					<view class="">
						<view class="">
							冻结
						</view>
						<view class="">
							0.000
						</view>
					</view>
				</view>
				<view class="">
					<view class="">
						<view class="">
							折合(CNY)
						</view>
						<view class="">
							0.000
						</view>
					</view>
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
	

	.content {
		background-color: #fff;
		font-size: 24rpx;
		color: #333;
		height: 1334rpx;
		.top {
			height: 318rpx;
			font-size: 30rpx;
			margin-top: 20rpx;
			padding: 40rpx 20rpx;
			box-sizing: border-box;
			
		}
		.list-item{
			height: 134rpx;
			.img{
				height: 72rpx;
				width: 72rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 20rpx;
			}
		}
		.title{
			height: 100rpx;
		}
		.rule{
			height: 140rpx;
		}
		
	}
</style>
