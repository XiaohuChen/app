<template>
	<view class="content">
		<view class="recommend-product">
			<view class="hot">
				V1
			</view>
			<view class="title">
				1
			</view>
			<view>
				<text class="percent">2%</text><text class="font-gray">月利率</text>
			</view>
			<view class="profit">
				周期10天
			</view>
		</view>
		<view class="bgbox">

		</view>
		<view class="padding border-bottom">
			<view class="font-middle rule">
				交易规则
			</view>
			<view class="rule flex-between">
				<text class="width100">报单</text>
				<text class="ruled-detail">本日18:00之前 花费等额EVC激活广告包</text>
				<text class="width100 font-blue">每天18:00</text>
			</view>
			<view class="rule flex-between">
				<text class="width100">产生收益</text>
				<text class="ruled-detail">报单成功后开始锁仓 并按T+1产生收益</text>
				<text class="font-blue width100">次日</text>
			</view>
			<view class="rule flex-between">
				<text class="width100">收益发放</text>
				<text class="ruled-detail">收益在锁仓时间(10天)到期后 返还本金和保证金</text>
				<text class="font-blue width100">10天后</text>
			</view>
		</view>
		<view class="padding book">
			<view class="flex-between margin-top">
				<text class="font-middle ">预约</text> <text class="font-red">请仔细阅读交易规则！</text>
			</view>
			<view class="">
				<view class="">
					1、用户可以在指定时间段（卯定每天10:00-17:00），申请预约时，需交纳10USDT的保证金（冻结）。
				</view>
				<view class="">
					2、若该用户存在预约或者报单的订单，则无法再次预约。
				</view>
				<view class="">
					3、若当日预约金额（当日预约订单面值总和）已达后台设置的上限，则无法进行预约。
				</view>
				<view class="">
					4、预约后不可撤销。
				</view>
			</view>
		</view>
		<view class="padding book">
			<view class="flex-between margin-top">
				<text class="font-middle ">放行</text>
			</view>
			<view class="">
				<view class="">
					1、系统根据预约时间放行，先预约的先放。
				</view>
				<view class="">
					2、若当日已放行的订单面值总和与最早一条未放行订单的面值总和小于后台设置的每日放行金 额，则自动放行。
				</view>
				<view class="">
					3、后台可手动放行。
				</view>
				<view class="">
					4、放行后，修改状态，并视为预约成功。
				</view>
			</view>
		</view>
		<view class="padding book">
			<view class="flex-between margin-top">
				<text class="font-middle ">报单</text>
			</view>
			<view class="">
				<view class="">
					1、请在预约成功当日18:00之前花费等额EVC激活广告包，成功激活广告包即视为成功报单。
				</view>
				<view class="">
					2、如预约成功后，未在当日18:00之前购买并激活广告包，系统将对此账号进行禁封；禁封后此账号所有收益停止，并清空收益账户，如需解封须支付50USDT的解封费用，解封后收益正常产生，且保证金不退。
				</view>
				<view class="">
					3、账号封禁导致收益停止的，后面不补。
				</view>
				<view class="">
					4、报单时需支付与订单面值等额的EVC，支付数量根据EVC的行情实时计算。
				</view>
				<view class="">
					5、报单时累计上级业绩。
				</view>
			</view>
		</view>
		<view class="bgbox">
		</view>
		<view class="padding font-middle flex-between rule">
			<text>常见问题</text> <text class="iconfont">&#xea25;</text>
		</view>
		<view class="">
			<button class="blue width100%">立即预约</button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {

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

		.recommend-product {
			position: relative;
			margin: 20rpx 0;
			height: 262rpx;
			width: 100%;
			text-align: center;
			line-height: 60rpx;

			.percent {
				margin-top: 20rpx;
				font-size: 58rpx;
				color: #FF3400;
				font-weight: bold;
			}

			.title {
				padding-top: 30rpx;
				font-weight: bold;
				font-size: 30rpx;
			}

			.profit {
				font-size: 24rpx;
			}

			.hot {
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 84rpx;
				height: 34rpx;
				background: linear-gradient(#FF727C, #FFA8AE);
				border-bottom-right-radius: 10rpx;
				border-top-left-radius: 10rpx;
				font-size: 20rpx;
				color: #fff;
				text-align: center;
				line-height: 34rpx;
			}
		}



		.rule {

			height: 100rpx;
			line-height: 100rpx;

			.ruled-detail {
				display: inline-block;
				word-wrap: break-word;
				width: 280rpx;
				height: 100rpx;
				line-height: 40rpx;
				text-align: center;
			}

			.width100 {
				width: 150rpx;
			}
		}

		.book {
			line-height: 60rpx;
		}
	}
</style>
