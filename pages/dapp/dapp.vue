<template>
	<view class="content">
		<view class="margin-top padding">
			<!-- 轮播 -->
			<swiper class="swiper" :autoplay="true" :interval="3000" :duration="1000" :current="swiperCurrent" @change="changeSwiper">
				<swiper-item v-for="item in swiperImg" :key="item.id">
					<image class="swiper-item" :src="domain + item.Img" mode="widthFix"></image>
				</swiper-item>
			</swiper>
			<!-- 轮播指示点样式修改 -->
			<view class="dots">
				<block v-for="(item,index) in swiperImg.length" :key="item">
					<view class="dot" :class="index==swiperCurrent ? ' active' : ''"></view>
				</block>
			</view>
		</view>
		
		<view class="bgbox">

		</view>
		
		<!-- DAPP -->
		<view>
			
			<web-view v-if="dappshow==1" :webview-styles="webviewStyles" src="https://dai.otcmaker.com/buy?locale=zh-CN&utm_source=evc"></web-view>
			<web-view v-else-if="dappshow==2" :webview-styles="webviewStyles" src="https://www.tokensets.com/?locale=zh-CN&utm_source=evc"></web-view>
			<web-view v-else-if="dappshow==3" :webview-styles="webviewStyles" src="https://www.hypersnakes.io/e/i/m/index.html?locale=zh-CN&utm_source=evc"></web-view>
			<web-view v-else-if="dappshow==4" :webview-styles="webviewStyles" src="https://kyberswap.com/swap/eth_knc?ref=0xb9E29984Fe50602E7A619662EBED4F90D93824C7&locale=zh-CN&utm_source=imtoken"></web-view>
			<web-view v-else-if="dappshow==5" :webview-styles="webviewStyles" src="https://cn.etherscan.com/address/0x76b7eD1068F1c85aB1D7c8615AB9e1BD3D4793EF?locale=zh-CN&utm_source=imtoken"></web-view>
			
		</view>
		
		
		<view class="recommend flex-between">
			<text>热门推荐</text>
		</view>

		<view class="flex-around">
			<image @tap="jumpToLogin" class="logo-img" src="../../static/images/pagesA/dapp/logo1.png" mode=""></image>
			<image @tap="jumpToDapp(1)" class="logo-img" src="../../static/images/pagesA/dapp/dapp1.jpg" mode=""></image>
			<image @tap="jumpToDapp(2)" class="logo-img" src="../../static/images/pagesA/dapp/dapp2.jpg" mode=""></image>
		</view>
		
		<view class="flex-around" @tap="waiting">
			<view class="logo-img-text text-center">
				Aggregate ecology
			</view>
			<view class="logo-img-text text-center"  @tap="waiting">
				U钱包
			</view>
			<view class="logo-img-text text-center"  @tap="waiting">
				平安壹钱包
			</view>
		</view>

		<view class="choice-type padding">
			<view class="choice-type1">最新</view>
			<view class="font-gray">
				<text>查看更多</text><text class="iconfont icon">&#xea25;</text>
			</view>
		</view>
		<view class="product-list ">
			<view class="product-list-item " v-for="(item,index) in applist" :key="item.id">
				<view class="flex padding" @tap="jumpToDapp(3+index)"> <!-- 前面有两个 -->
					<view>
						<image class="more-logo-img" :src= "item.img" mode=""></image>
					</view>
					<view class="">
						<view class="">
							{{item.title}}
						</view>
						<view class="font-gray">
							{{item.desc}}
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="choice-type padding">
			<view class="choice-type1">实时资讯</view>
			<!-- <view class="font-gray">
				<text>查看更多</text><text class="iconfont icon">&#xea25;</text>
			</view> -->
		</view>
		<view class="flex-between desc-box" v-for="(item,index) in newsList" :key="item.id" @tap="jumpToTextDetail(index)">
			<view class="">
				<view class="desc-text ">
					{{item.Title}}
				</view>
				<view class="flex-between font-gray desc-num">
					<view class="">{{$base1._formatDate(item.AddTime)}}</view>
					<view class="">{{item.ReadNum}}阅读</view>
				</view>
			</view>
			<view class="">
				<image class="desc-img" :src="domain + item.Imgs" mode=""></image>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hoverColor: '#4C70FF',
				swiperImg: [],
				current: 0,
				swiperCurrent: 0,
				applist:[
					{img:'../../static/images/pagesA/dapp/dapp3.jpg',title:'许多卡 Stocard',desc:'会员卡'},
					{img:'../../static/images/pagesA/dapp/dapp4.jpg',title:'许多卡 Stocard',desc:'会员卡'},
					{img:'../../static/images/pagesA/dapp/dapp5.jpg',title:'许多卡 Stocard',desc:'会员卡'}
				],
				newsList:[],
				domain:'',
				dappshow: 0,
				webviewStyles: {progress:false}
			};
		},
		onLoad() {
			this.domain = uni.getStorageSync('domain')
			//获取banner
			uni.request({
				url: this.baseUrl + "/banner-list",
				success: (res) => {
					console.log(res)
					if (res.data.status == 1) {
						this.swiperImg = res.data.data
					} else {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
					}
				}
			})
		
			//获取快讯列表
			uni.request({
				url: this.baseUrl + "/news-list",
				data:{
					page: 1,
					count: 10000
				},
				success: (res) => {
					console.log(res)
					 if(res.data.status==1){
						this.newsList = res.data.data.list
						
					}else{
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						})
					}
					
				}
			})
		},
		onNavigationBarButtonTap() {
			console.log("22222")
		},
		onPullDownRefresh() {

		},
		methods: {
			jumpToLogin(){
				if(uni.getStorageSync('token')){
					uni.navigateTo({
						url:"../pagesB/index/index"
					})
				}else{
					uni.navigateTo({
						url:"../pagesB/login/login"
					})
				}
				
			},
			jumpToDapp(n){				
				this.dappshow = n;				
			},
			
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current;
			},
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			},
			waiting(){
				uni.showToast({
					title:"正在开发中...",
					icon:'none'
				})
			},
			jumpToTextDetail(index){
				console.log(this.newsList[index].Id)
				uni.navigateTo({
					url:"./text-detail?id="+this.newsList[index].Id
				})
			}
		}

	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.content {
		font-size: 24rpx;
		color: #333;
		box-sizing: border-box;
		width: 750rpx;
		.percent {
			margin-top: 20rpx;
			font-size: 58rpx;
			color: #FF3400;
			font-weight: bold;
		}
		
		
		.percent-small {
			font-size: 36rpx;
		}

		.detail-btn {
			width: 140rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			font-size: 26rpx;
			margin: 0;
		}

		.logo-img {
			width: 172rpx;
			height: 172rpx;
		}

		.logo-img-text {
			width: 300rpx;
			font-size: 22rpx;
		}

		.swiper {
			width: 700rpx;
			height: 300rpx;
			border-radius: 16rpx;
			overflow: hidden;
			position: relative;

			.swiper-item {
				width: 700rpx;
				height: 240rpx;
				border-radius: 16rpx;
			}

		}

		.dots {
			position: absolute;
			top: 290rpx;
			left: 50%;
			transform: translate(-50% 0);
			-webkit-transform: translate(-50%, 0);
			z-index: 4;
			display: flex;
			justify-content: center;

			.dot {
				width: 24rpx;
				height: 6rpx;
				transition: all .6s;
				background: rgba(0, 0, 0, .3);
				margin-right: 10rpx;
			}

			.active {
				width: 24rpx;
				height: 6rpx;
				background: rgba(255, 255, 255, .8);
			}
		}

		.more-logo-img {
			width: 132rpx;
			height: 132rpx;
			margin-right: 14rpx;
		}

		.choice-type {
			height: 100rpx;
			line-height: 100rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-weight: bold;

			.choice-type1 {
				font-size: 32rpx;
				font-weight: bold;
			}

			.icon {
				font-size: 24rpx;
				margin-left: 20rpx;
				font-weight: 400;
			}
		}
		.desc-box{
			height: 240rpx;
			padding: 20rpx 30rpx;
			border-top: 2rpx solid #E6E6E6;
		}

		.desc-text {
			width: 392rpx;
			height: 76rpx;
			font-size: 28rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			margin-bottom: 30rpx;
		}
		.desc-num{
			// width: 680rpx;
		}
		.desc-img{
			width: 160rpx;
			height: 160rpx;
		}

		.notice {
			font-size: 26rpx;
			margin-top: 30rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;

			.icon2 {
				font-size: 24rpx;
			}
		}

		.recommend {
			font-size: 32rpx;
			font-weight: bold;
			margin: 20rpx;
		}

		.recommend-product {
			position: relative;
			display: inline-block;
			margin-top: 30rpx;
			height: 262rpx;
			width: 332rpx;
			box-shadow: 0 0 12rpx rgba(37, 144, 254, 0.1);
			text-align: center;
			line-height: 60rpx;

			.title {
				padding-top: 30rpx;
				font-weight: bold;
				font-size: 30rpx;
			}

			.desc {
				font-size: 24rpx;
				color: #999;
			}



			.profit {
				font-size: 24rpx;
				color: #999;
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
		}

		.product-list-item {
			height: 180rpx;
			width: 100%;
			padding: 26rpx 0;
			box-sizing: border-box;
			border-top: 2rpx solid #E6E6E6;
			line-height: 40rpx;
			font-size: 28rpx;

			.title {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
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
	}
</style>
