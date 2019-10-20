<template>
	<view class="content">
		<view class="page-head2-padding">
			<page-head2 :headerTitle="headerTitle"></page-head2>
			
		</view>
		<view class="bgbox">
		
		</view>
		<view class="padding">
			<view class="flex-row padding-top">
				<view class="name">
				<image class="logo-img" src="../../../static/images/BTC@2x.png" mode=""></image>
				</view>
				<view class="font-blue font-big font-bold">
					+0.6920USTD
				</view>
			</view>
			<view class="flex-between padding-bottom">
				<view class="">
					<view class="">
						冻结
					</view>
					<view class="font-bold font36">
						000.000BTC
					</view>
				</view>
				<view class="">
					<view class="">
						折合CNY
					</view>
					<view class="font-bold font36">
						000.000
					</view>
				</view>
			</view>
		</view>		
		
		<view class="bgbox">
			
		</view>
		<view class="nav padding">
			<view class="nav-text" v-for="(item,index) in list" :key="item.id" :class="currentNumber == index ? 'active' : ''"
			 @tap="currentInfo(index)">
				{{item.title}}
			</view>
		</view>
		
		<view class="padding">
			<view class="">
				简介
			</view>
			<view class="font-bold font-middle">
				BTC
			</view>
			<view class="font20">
				比特币(Bitcoin)
			</view>
			<view class="text">
				     比特币（BitCoin）的概念最初由中本聪在2008年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币。点对点的传输意味着一个去中心化的支付系统。
				     与大多数货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个p2p网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。
				     p2p的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付。这同样确保了货币所有权与流通交易的匿名性。比特币与其他虚拟货币最大的不同，是其总数量非常有限，具有极强的稀缺性。该货币系统曾在4年内只有不超过1050万个，之后的总数量将被永久限制在2100万个。
				     比特，是一种计算机专业术语，是信息量单位，是由英文BIT音译而来。二进制数的一位所包含的信息就是一比特，如二进制数0100就是4比特。那么，比特这个概念和货币联系到一起，不难看出，比特币非现实货币，而是一种计算机电子虚拟货币，存储在你的电脑上。
				      目前，这种崭新的虚拟货币不受任何政府、任何银行控制。因此，它还未被合法化。
				

			</view>
			
				<view class="list">
					<view class="list-item" v-for="item in nameList2" :key="item.id">
						
							<text>{{item.leftText}}</text><text>{{item.rightText}}</text>
						
					</view>
				</view>

			
		<view class="nav flot-bottom">
			<view class="nav-text nav-btn" v-for="(item,index) in twoBtn" :key="item.id" :class="currentNumberBtn == index ? 'active-btn' : ''"
			 @tap="currentInfo(index)">
				{{item.title}}
			</view>
		</view>
		
		
		</view>
	</view>
</template>

<script>
	import pageHead2 from '@/components/page-head2.vue';
	export default {
		components: {
			pageHead2
		},
		data() {
			return {
				currentNumber: 0, // 用来判断active样式类是否显示
				currentNumberBtn:0,
				headerTitle: 'BTC',
				statusChange: '',
				curPage: 1,
				status: 0,
				nameList: [
					{title:'充值',time:'2019-09-10 14:30:15',money:'+1000BTC',status:'已完成'}
				],
				id: '',
				acid:'',
				list: [{
						title: "币种详情"
					},
					{
						title: "充提记录"
					}
				],
				twoBtn:[{
					title:'转出'
				},{title:'转入'}],
				nameList2:[
					{leftText:'发行时间:',rightText:'2008-11-10'},
					{leftText:'发行总量:',rightText:'21,000,000'},
					{leftText:'流通总量：',rightText:'17,816,737'},
					{leftText:'众筹价格：',rightText:'17,816,737'},
					{leftText:'白皮书：',rightText:'17,816,737'},
					{leftText:'官网：',rightText:'17,816,737'},
					{leftText:'区块链查询：',rightText:'17,816,737'},
					{leftText:'手机钱包下载地址：',rightText:'17,816,737'},
					{leftText:'PC钱包下载地址：',rightText:'17,816,737'}
					
				],
			};
		},
		onLoad(options) {
			
			this.activityId = options.activityId
			console.log(this.activityId)
			this.getCoreDetail()
		},
		onPullDownRefresh() {
			this.getCoreDetail()
			  setTimeout(function () {
				  uni.stopPullDownRefresh();
			  }, 1000);
		  },
		methods: {
			currentInfo(index) {
				this.currentNumber = index;
				console.log(this.currentNumber)
				this.status = this.currentNumber
				//我的理财列表动态 显示
				uni.request({
					url: this.baseUrl + "/investment-list?status=" + this.status,
					header: {
						//除注册登录外其他的请求都携带用户token和秘钥
						Authorization: uni.getStorageSync('token'),
						SecretKey: uni.getStorageSync('SecretKey')
					},
					success: (res) => {
						console.log(res)
						if (res.data.status == 20003) {
							this.$base._isLogin()
						} else if (res.data.status == 1) {
							// this.nameList = res.data.data.data
							console.log(this.nameList)
						} else {
							uni.showToast({
								title: res.data.message,
								icon: "none"
							})
						}
					}
				})
			},
			currentBtnIndex(index){
				this.currentNumberBtn=index
			},
			//我的理财列表 显示全部
			getCoreDetail() {
				uni.request({
					url: this.baseUrl + "/investment-list?status=" + this.status,
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
							// this.nameList = res.data.data.data
							
						} else {
							uni.showToast({
								title: res.data.message,
								icon: "none"
							})
						}
					}
				})
			},
			showState(state){
				if(state==1){
					return  "待理财";
				}else if(state==2){
					return "理财中"
				}else if(state==3){
					return "已撤资"
				}else if(state==4){
					return "已完结"
				}
			},
			jumpToManage(index) {
				this.id = this.nameList[index].Id
				this.acid = this.nameList[index].ActivityId
				console.log(this.id)//我的理财id
				console.log(this.acid)//理财活动id
				uni.navigateTo({
					url: "./manage-in?id=" + this.id +"&acid="+this.acid//需要传一个investmentId过去,还需传一个acid过去获取天数
				})
			}
		}
	}
</script>

<style lang="scss">
	.active {
		color: #0099FF;
		font-weight: bold;
	}
	
	.font36{
		font-size: 36rpx;
	}
	.font20{
		font-size: 20rpx;
	}
	.logo-img{
		width: 52rpx;
		height: 52rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 20rpx;
	}
	.text{
		font-size: 26rpx;
		line-height: 60rpx;
		text-indent:40rpx;
	}
	.list{
		margin-bottom: 90rpx;
	}
	.content {
		box-sizing: border-box;
		color: #333;
		background-color: #fff;
		.nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.nav-text {
				height: 88rpx;
				line-height: 88rpx;
				width: 50%;
				background-color: #fff;
				text-align: center;
			}
			.nav-btn{
				background-color: #007AFF;
				color: #fff;
			}
			.active-btn{
				color: #007AFF;
				background-color: #fff;
			}
		}
		.list-item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 26rpx;
			line-height: 80rpx;
		}
	}
	.flot-bottom{
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
	}
</style>
