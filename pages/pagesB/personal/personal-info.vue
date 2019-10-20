<template>
	<view class="content">
		

		<view class="top top2 flex" @tap="jumpToBindingPhoneNum">
			<image class="user-photo" src="../../../static/images/BTC@2x.png" mode=""></image><text class="iconfont icon">&#xea25;</text>
		</view>
		<view class="top" @tap="jumpToSetPassword">
			<text>小吴小吴烦恼全无</text><text class="iconfont icon">&#xea25;</text>
		</view>
		<view class="top" @tap="jumpToResetPin">
			<text>账号:123456</text>
		</view>
		<view class="top top2" @tap="jumpToResetPin">
			<text>个人业绩：23655.236 USDT</text>
		</view>
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				headerTitle: '个人信息',
				phoneState: '',
				passwordState: '',
				unBindingPhone: false
			}
		},
		onLoad() {
			if (!uni.getStorageSync("token") && !uni.getStorageSync("SecretKey")) {
				this.$base._isLogin()
			}
			//判断是否绑定手机号
			uni.request({
				url: this.baseUrl + "/member-check_phone",
				header: {
					//除注册登录外其他的请求都携带用户token和秘钥		
					Authorization: uni.getStorageSync('token'),
					SecretKey: uni.getStorageSync('SecretKey')
				},
				success: (res) => {
					console.log(res.data)
					if (this.$base._indexOf(res.data.status)) {
						this.unBindingPhone = false
						this.$base._isLogin()
					} else if (res.data.status == 10003) {
						this.unBindingPhone = true
						this.phoneState = "未设置"
					} else if (res.data.status == 1) {
						this.phoneState = "修改"
						this.unBindingPhone = false
					} else {
						this.unBindingPhone = false
						uni.showToast({
							title: res.data.message
						})
					}
				}
			})
			//判断是否设置交易密码
			uni.request({
				url: this.baseUrl + "/member-check_pay_password",
				header: {
					//除注册登录外其他的请求都携带用户token和秘钥		
					Authorization: uni.getStorageSync('token'),
					SecretKey: uni.getStorageSync('SecretKey')
				},
				success: (res) => {
					console.log(res.data)
					if (res.data.status == 10003) {

						this.passwordState = "未设置"
					} else if (res.data.status == 1) {
						this.passwordState = "修改"
					} else {
						uni.showToast({
							title: res.data.message
						})
					}
				}
			})
		},
		methods: {
			jumpToBindingPhoneNum() {
				uni.navigateTo({
					url: "./binding-phonenum"
				})
			},
			jumpToSetPassword() {
				uni.navigateTo({
					url: "./authentication?id=6"
				})
			},
			jumpToResetPin() {
				if (this.unBindingPhone == true) {
					uni.showModal({
						title: '未绑定手机号',
						content: '点击确定跳转到绑定手机号',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: "./binding-phonenum"
								})
							} else if (res.cancel) {

							}
						}
					});
				} else {
					uni.navigateTo({
						url: "./authentication?id=1"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {
		box-sizing: border-box;
		font-size: 30rpx;
		color: #333;
		background-color: #F7F7F7;
		height: 1334rpx;

		.top {
			height: 110rpx;
			line-height: 110rpx;
			background-color: #fff;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			
			padding: 0 26rpx;
			box-sizing: border-box;

			.icon {
				color: #999;
				font-size: 30rpx;
				margin-left: 24rpx;
			}
		}

		.top2 {
			margin-top: 20rpx;
		}
		.user-photo{
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			overflow: hidden;
		}

	}
</style>
