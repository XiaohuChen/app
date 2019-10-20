<template>
	<view>
		<view class="user-wrap">
			<view class="user-bg">
				<view class="top text-center">
					<view class="hot">
						V1
					</view>
					<image class="head-img" src="../../../static/images/BTC@2x.png" mode=""></image>
					<view class="padding-top margin-top font-middle">
						小吴小吴烦恼全无 <text class="iconfont">&#xe64a;</text>
					</view>
					<view class="flex-around">
						<view class="">
							<view class="">
								<image class="choice-img" src="../../../static/images/pagesA/my/re-name.png" mode=""></image>
							</view>
							<view class="font22">
								邀请好友
							</view>
						</view>
						<view class="">
							<view class="">
								<image class="choice-img"  src="../../../static/images/pagesA/my/invite.png" mode=""></image>
							</view>
							<view class="font22">
								实名认证
							</view>
						</view>
						<view class="">
							<view class="">
								<image class="choice-img" src="../../../static/images/pagesA/my/film.png" mode=""></image>
							</view>
							<view class="font22">
								我的账单
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<navigator class="block border-bottom flex-between item margin-top100" url="../wallet/manage">
			<view class="flex">
				<i class="iconfont font-big icon-RectangleCopy"></i>
				<text>安全中心</text>
			</view>
			<i class="iconfont icon-return-copy-copy-copy font-gray"></i>
			
		</navigator>
		
		<view class="block item-wrap ">
			<view class="item flex-between border-bottom">
				<view class="flex">
					<i class="iconfont font-big  icon-RectangleCopy2"></i>
					<text>绑定手机</text>
				</view>
				<i class="iconfont icon-return-copy-copy-copy font-gray"></i>
			</view>
			<view class="item flex-between border-bottom">
				<view class="flex">
					<i class="iconfont font-big  icon-bangzhu"></i>
					<text>帮助与反馈</text>
				</view>
				<i class="iconfont icon-return-copy-copy-copy font-gray"></i>
			</view>
			<view class="item flex-between border-bottom">
				<view class="flex">
					<i class="iconfont font-big  icon-RectangleCopy3"></i>
					<text>用户协议</text>
				</view>
				<i class="iconfont icon-return-copy-copy-copy font-gray"></i>
			</view>
			<view class="item flex-between border-bottom">
				<view class="flex">
					<i class="iconfont font-big  icon-wode"></i>
					<text>关于我们</text>
				</view>
				<i class="iconfont icon-return-copy-copy-copy font-gray"></i>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateTo({
					url: '../message/message'
				})
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.user-wrap {
		background-color: #0099FF;
		height: 400upx;
		padding-top: var(--status-bar-height);
	}

	.user-bg {
		height: 426rpx;
		background: linear-gradient(#0099FF,#C1E6FF, #FFFFFF);
	}
	
	.top{
		width: 686rpx;
		height: 306rpx;
		border-radius: 10rpx;
		background-color: #fff;
		position: absolute;
		top: 188rpx;
		left: 32rpx;
	}
	.hot {
		position: absolute;
		top: 0;
		right: 0;
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
	.head-img{
		height: 120rpx;
		width: 120rpx;
		border-radius: 50%;
		position: absolute;
		z-index: 3;
		top: -60rpx;
		left: 290rpx;
	}
	.choice-img{
		width: 60rpx;
		height: 60rpx;
	}
	.font22{
		font-size: 22rpx;
	}
	.user-bg .tx {
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
		overflow: hidden;
		background-color: #FFFFFF;
		margin: 0 auto 20upx;
	}

	.user-bg .tx image {
		width: 100%;
		height: 100%;
	}

	.user-bg .address {
		width: 65%;
		margin: 0 auto;
		color: #FFFFFF;
		text-align: center;
	}

	.block {
		background-color: #FFFFFF;
	}

	.item-wrap {
		margin-top: 20upx;
	}

	.item {
		
		padding: 30upx 24upx;
	}

	.item .flex .iconfont {
		margin-right: 16upx;
		position: relative;
		top: 4upx;
	}
	.margin-top100{
		margin-top: 100rpx;
	}
</style>
