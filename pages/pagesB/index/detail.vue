<template>
	<view class="content">
		<view class="padding top">
			<view class="product-list-item">
				<view class="title flex-between">
					<view class="font-bold font-middle">
						产品一号
					</view>
					<view class="desc">
						放行
					</view>
				</view>
				<view class="flex-between">
					<view class="">
						<text class="percent percent-small">29.2%</text> <text class="font-gray font-small">年利率</text>
					</view>
					<view class="">
						周期10天
					</view>
				</view>
			</view>
		</view>

		<view class="bgbox">

		</view>

		<view class="list-item font26">
			<view class="rule padding flex-between">
				<view class="font-gray">
					投资时间
				</view>
				<view class="">
					2019-09-03 14:23:12
				</view>
			</view>
			<view class="rule padding flex-between">
				<view class="font-gray">
					投资金额
				</view>
				<view class="">
					200 USDT
				</view>
			</view>
			<view class="rule padding flex-between">
				<view class="font-gray">
					放行时间
				</view>
				<view class="">
					2019-09-03 14:23:12
				</view>
			</view>
			<view class="rule padding flex-between">
				<view class="font-gray">
					报单时间
				</view>
				<view class="">
					2019-09-03 14:23:12
				</view>
			</view>
			<view class="rule padding flex-between">
				<view class="font-gray">
					锁仓数量
				</view>
				<view class="">
					210 USDT
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
				showPinMask: true,
				productList: [{
					dayText: '产品一号',
					Yield: '2',
					IsDay: '产品一号',
					NodeDay: '放行',
					PenalSumRatio: '5'
				}]
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
			padding: 20rpx 20rpx;
			box-sizing: border-box;
		}

		.list-item {
			line-height: 50rpx;
		}
		.font26{
			font-size: 26rpx;
		}

		.product-list-item {
			height: 120rpx;
			width: 100%;

			.title {
				line-height: 60rpx;
			}

			.desc {
				display: inline-block;
				text-align: center;
				line-height: 36rpx;
				font-size: 22rpx;
				width: 88rpx;
				height: 36rpx;
				border-radius: 18rpx;
				color: #38C262;
				background-color: rgba(56, 194, 98, 0.1);
				border: 2rpx solid #38C262;
			}
		}

		.percent {
			margin-top: 20rpx;
			font-size: 36rpx;
			color: #FF3400;
			font-weight: bold;
		}
		.rule {
			height: 100rpx;
		}

	}
</style>
