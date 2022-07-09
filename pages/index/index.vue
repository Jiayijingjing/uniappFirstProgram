<template>
	<view class="content">
		<view >
					<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item>
							<navigator :url="'/pages/webview/webview?url=' + encodeURI('http://baidu.com') ">
								<view class="swiper-item uni-bg-red aa" ></view>
							</navigator>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green bb"></view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue cc"></view>
						</swiper-item>
					</swiper>
		</view>
		<view class="tab">
				<view class="tab_1" @tap="gotoTab('/pages/feeds/feeds')" >精彩动态</view>
				<view class="tab_2" @tap="gotoTab('/pages/me/me')" >个人中心{{shuju}}</view>
		</view>
		<view class="cho">
			<view class="cho1" @tap="oneye(0)" :class="pink == 0?'backred':''" >推荐</view>
			<view class="cho2" @tap="oneye(1)" :class="pink == 1?'backred':''">咨询</view>
		</view>
			<swiper :current="curind" style="height: 1200rpx;">
				<swiper-item >
					<view class="news" ></view>		
				</swiper-item>
				<swiper-item >
					<view class="food"></view>
				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	export default {
		  data() {
		         return {
		             background: ['color1', 'color2', 'color3'],
		             indicatorDots: true,
		             autoplay: true,
		             interval: 2000,
		             duration: 500,
					 shuju:'',
					 curind:0,
					 pink:0*1,
		         }
		     },
		     methods: {
		         changeIndicatorDots(e) {
		             this.indicatorDots = !this.indicatorDots
		         },
		         changeAutoplay(e) {
		             this.autoplay = !this.autoplay
		         },
		         intervalChange(e) {
		             this.interval = e.target.value
		         },
		         durationChange(e) {
		             this.duration = e.target.value
		         },
				gotoTab(url){
					
					uni.switchTab({
						url
					})
					
				},
			
				oneye(index){
					this.curind=index;
					this.pink=index;
				}
		     },
		onLoad() {
			uni.request({
			    url: 'https://api.apiopen.top/api/sentences', //仅为示例，并非真实接口地址。
			    success: (res) => {
			        this.shuju= res.statusCode;
			    }
			});
		},
		
	}
</script>

<style>
		.swiper {
			height: 300rpx;
			width: 100%;
		}
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}
		.uni-common-mt {
			margin-top: 60rpx;
			position: relative;
		}
		.info {
			position: absolute;
			right: 20rpx;
		}
		.uni-padding-wrap {
			width: 550rpx;
			padding: 0 100rpx;
		}
		
		.aa{
			background-image: url("@/static/datu.jpg");
			background-size: 100% 100%;
		}
		.bb{
			background-image: url("@/static/zhutu02.jpg");
			background-size: 100% 100%;
		}
		.cc{
			background-image: url("@/static/zhutu03.jpg");
			background-size: 100% 100%;
		}
		.tab{
			display: flex;
			flex-direction: row;
			text-align: center;
			height: 60upx;
			line-height: 60upx;
		}
		.tab_1{
			flex: 1;
			background-color: aquamarine;
			border:1px solid #ccc;
		}
		.tab_2{
			flex: 1;
			background-color: aquamarine;
			border:1px solid #ccc;
		}
		
		.news{
			background-color:pink;
		    height: 2000rpx;
			
		}
		.food{
			background-color: yellowgreen;
			height: 2000rpx;
			
		}
		.cho{
			display: flex;
			flex-direction: row;
		}
		.cho1{
			flex: 1;
			text-align: center;
			height: 80upx;
			line-height: 80upx;
			border: 1px solid red;
		}
		.cho2{
			flex: 1;
			text-align: center;
			height: 80upx;
			line-height: 80upx;
			border: 1px solid red;
		}
		.backred{
			background-color: red;
		}
</style>
