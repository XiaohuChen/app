<template>
	<view class="content">
		<view class="flex-between top padding">
			<view class="flex-row flex">
				<view class="">
					<image class="logo-img" src="../../../static/images/BTC@2x.png" mode=""></image>
				</view>
				<view class="font-middle font-bold">
					BTC
				</view>
			</view>
			<view class="">
				<text class="font-gray font22">
					切换币种
				</text>
				<text class="iconfont">
					&#xea25;
				</text>

			</view>
		</view>

		<view class="bgbox ">

		</view>
		<view class="list padding">
			<view class="list-top">
				<text>转账数量</text><text class="font22">BTC可用: {{allmoneyNum}}</text>
			</view>
			<view class="list-input font-small">
				<input class="font-small" type="text" value="" v-model="money" placeholder="输入转账数量" />
				<text class="font-blue font-small" @tap="allmoney">全部</text>
			</view>
		</view>
		<view class="list padding">
			<view class="list-top">
				<text>接收地址</text>
			</view>
			<view class="list-input font-small">
				<input class="font-small" type="text" value="" v-model="address" placeholder="输入接收地址" />

			</view>
		</view>
		<view class="list padding">
			<view class="list-top">
				<text>备注</text>
			</view>
			<view class="list-input">
				<input class="font-small" type="text" value="" placeholder="填写备注" v-model="charge" />
			</view>

		</view>
		<view class="font-gray font22 padding">
			手续费：0.00051968 BTC≈1.3502 CNY
		</view>
		<view class="margin-top">
			<button class="blue" type="primary" @tap="sureTransfer">转账</button>
		</view>

	</view>
</template>

<script>
	export default {

		data() {
			return {
				showPinMask: false,
				coreId: '',
				money: '',
				address: '',
				charge: '',
				pin: '',
				allmoneyNum: ''
			}

		},
		onLoad(options) {
			if (!uni.getStorageSync("token") && !uni.getStorageSync("SecretKey")) {
				this.$base._isLogin()
			}
			console.log(options.coreId)
			this.coreId = options.coreId
			//core首页

		},
		methods: {
			allmoney() {
				this.allmoneyNum = 8
				this.money = this.allmoneyNum
			},
			sureTransfer() {
				this.showPinMask = true
			},
			closePinMask() {
				this.showPinMask = false
			},
			confirm() {
				//输入PIN之后确认转账
				//转账 旷工费=手续费 
				uni.request({
					url: this.baseUrl + "/core-send?Id=" + this.coreId + "&Money=" + this.money + "&Address=" + this.address +
						"&Charge=" + this.charge + "&Pin=" + this.pin,
					header: {
						//除注册登录外其他的请求都携带用户token和秘钥
						Authorization: uni.getStorageSync('token'),
						SecretKey: uni.getStorageSync('SecretKey')
					},
					success: (res) => {
						console.log(res.data)
						if (res.data.status == 1) {


						} else {
							//提示余额不足
							uni.showToast({
								title: res.data.message,
								icon: "none"
							})
							uni.showModal({
								title: '转账失败',
								content: "点击确认继续转账",
								success: function(res) {
									if (res.confirm) {
										uni.redirectTo({
											url: "./currency-detail"
										})
									} else if (res.cancel) {
										uni.redirectTo({
											url: "./currency-detail"
										})
									}
								}
							});
						}
					}
				})





			}
		}
	}
</script>

<style lang="scss">
	.bgbox {
		background-color: #F8F8F8;
		height: 20rpx;
	}

	.content {
		box-sizing: border-box;
		font-size: 30rpx;
		color: #333;
		background-color: #fff;
		height: 1334rpx;
		.top {
			font-size: 30rpx;
			margin-top: 20rpx;
			padding: 40rpx 20rpx;
			box-sizing: border-box;
		}

		.font22 {
			font-size: 22rpx;
		}

		.logo-img {
			width: 72rpx;
			height: 72rpx;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 20rpx;
		}

		.list-top {
			height: 80rpx;
			line-height: 80rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 28rpx;
			margin-top: 28rpx;
		}

		.list-input {
			height: 100rpx;
			line-height: 100rpx;
			background-color: #F5F5F5;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 26rpx;
			border-radius: 10rpx;
		}

	}
</style>
