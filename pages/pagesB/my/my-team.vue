<template>
	<view class="content padding">
		<view class="middle text-center">
			<view class="all">
				<text>团队总业绩(社区收益10%)</text>
			</view>
			<view class="all-num ">
				<text class="font-bold">000000</text>  <text class="font-middle">USTD</text>
			</view>
			<view class="flex-between">
				<text>团队人数：123</text>｜<text>有效直推人数：16</text>
			</view>
		</view>
		<view class="team-text font-bold font-middle">
			团队列表
		</view>
		<view class="list">
			<view class="list-item">
				<view class="list-item-left">
					<image class="img" src="../../../static/images/BTC@2x.png" mode="widthFix"></image>
					<view class="">
						<view class="font-middle">
							嚣张的小张 
						</view>
						<view class="name-ch">
							185****8741
						</view>
					</view>
				</view>
				<view class="">
					<view class="">
						团队：16人
					</view>
				</view>
				
			</view>
			<view class="flex-between padding ">
				<view class="">
					<view class="">
						个人业绩
					</view>
					<view class="">
						<text class="orange font-bold">1000.00</text><text>USDT</text>
					</view>
				</view>
				<view class="">
					<view class="">
						团队业绩
					</view>
					<view class="">
						<text class="orange font-bold">1000.00</text><text>USDT</text>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {

		data() {
			return {
				imgUrl: '',
				nameEn: '',
				nameCh: '',
				allNum: '',
				allNumEqual: '',
				coreId: '',
				price: '',
				money: '',
				show: true,
				password: false,
			};
		},
		onLoad() {
			if (!uni.getStorageSync("token") && !uni.getStorageSync("SecretKey")) {
				this.$base._isLogin()
			}
			this.initData()

		},
		onReady() {
		},
		onPullDownRefresh() {
			this.initData()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			initData() {
				//core首页
				uni.request({
					url: this.baseUrl + "/core-list",
					header: {
						//除注册登录外其他的请求都携带用户token和秘钥
						Authorization: uni.getStorageSync('token'),
						SecretKey: uni.getStorageSync('SecretKey')
					},
					success: (res) => {
						console.log(res.data)
						if (res.data.status == 20003) {
							this.$base._isLogin()
						} else if (res.data.status == 1) {
							this.imgUrl = res.data.data.Logo
							this.nameEn = res.data.data.EnName
							this.nameCh = res.data.data.FullName
							this.coreId = res.data.data.Id
							this.price = res.data.data.Price
							this.money = res.data.data.Money
						} else {
							uni.showToast({
								title: res.data.message,
								icon: "none"
							})
						}
					}
				})
			},
			jumpToCurrencyDetail() {
				uni.navigateTo({
					url: './currency-detail?coreId=' + this.coreId
				})
			},
			scan() {
				//扫一扫		
				// 允许通过相机扫码和相册
				uni.scanCode({
					onlyFromCamera: false,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			noSee() {
				this.show = !this.show
				if (this.show == false) {
					this.password = true
				} else {
					this.password = false
				}
			},
		}
	}
</script>

<style lang="scss">
	.orange{
		color: #FF3400;
	}
	.content {
		background-color: #fff;
		height: 100%;
		box-sizing: border-box;
		font-size: 30rpx;
		
		.top {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-top: 68rpx;

			.logo {
				width: 180rpx;
				height: 48rpx;
			}

			.icon {
				font-weight: 600;
			}
		}

		.middle {
			height: 240rpx;
			background: linear-gradient(#5D3CFF, #6791F7);
			border-radius: 10rpx;
			margin-top: 24rpx;
			color: #fff;
			padding: 30rpx 36rpx;

			.all {
				font-size: 24rpx;
			}

			.all-num {
				font-size: 58rpx;
				line-height: 100rpx;
				margin-top: 30rpx;
			}

			.all-num-equal {
				font-size: 30rpx;
			}

			.icon {
				font-size: 32rpx;
			}
		}
		.team-text{
			height: 100rpx;
			line-height: 100rpx;
		}
		.list {
			font-size: 22rpx;

			.list-item {
				height: 160rpx;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.name-en {
					font-size: 36rpx;
					color: #333;
					font-weight: bold;
				}

				.name-ch {
					font-size: 22rpx;
					color: #999;
				}

				.list-item-left {
					display: flex;
					flex-direction: row;

					.img {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						overflow: hidden;
						margin-right: 20rpx;
					}
				}

			}
		}

	}
</style>
