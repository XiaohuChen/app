<template>
	<view class="content">
		<view class="bgbox">		
		</view>
		<view class="input-wrap padding">
			<view class="">
				<input class="input-left" type="password" placeholder="请输入原密码" placeholder-class="input-placeholder" v-model="emailNum" @input="change">
			</view>
			<view class="">
				<input class="input-left" type="password" placeholder="请输入新密码" placeholder-class="input-placeholder"  >
			</view>
			<view class="">
				<input class="input-left" type="password" placeholder="再次输入新密码" placeholder-class="input-placeholder"  >
			</view>
		</view>
		<view>
			<button class="blue" hover-class="none" :style="{opacity:opcity}" @click="backupMnemonic">提交</button>	
				<view class="font-small text-center">
					<text class="font-gray">找回密码后24小时内无法提币</text>
				</view>
		</view>
	</view>
</template>

<script>

	export default {
		
		data() {
			return {
				
				emailNum: '',
				password: '',
				opcity: 0.5,
				check:false
	
			}
		},
		onLoad() {

		},
		onReady() {

		},
		methods: {
			backupMnemonic() {
				uni.navigateTo({
					url: "backupMnemonic1"
				})
			},
			change(e) {
				console.log(e.detail.value.length)
				if (e.detail.value.length >= 3) {
					this.opcity = 1
				} else {
					this.opcity = 0.5
				}
			},
			checked(){
				this.check =!this.check
			}

		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-color: #fff;
		font-size: 24rpx;
		color: #999999;
		height: 1334rpx;

		.logo {
			width: 86px;
			height: 86rpx;
			margin: 60rpx auto 50rpx;
		}

		.logo-img {
			width: 160rpx;
			height: 160rpx;
		}

		.forget-password {
			margin-left: 500rpx;
		}

		.bottom {
			margin-top: 280rpx;
			text-align: center;
		}

		.get-indentify {
			height: 70rpx;
			line-height: 70rpx;
			width: 180rpx;
			padding: 0;
			border: none;
			color: #007AFF;
		}

	}
	.input-wrap {
		margin-top: 40rpx;
	}

	.input-wrap>view {
		border-bottom: 1px solid #ECECEC;
		padding: 20rpx 0;
		margin-bottom: 40rpx;
		display: flex;
		align-items: center;
	}

	.input-wrap input {
		flex: 1;
	}

	button.blue {
		margin-bottom: 20rpx;
		margin-top: 80rpx;
		opacity: 0.5;
	}

	.footer {
		position: fixed;
		width: 100%;
		text-align: center;
		bottom: 60rpx;
	}
</style>
