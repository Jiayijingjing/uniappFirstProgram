<template>
	<view class="content">
		<view class="uni-margin-wrap">
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
				<view class="tab_1" @tap="gotoTab('/pages/feeds/feeds')">精彩动态</view>
				<view class="tab_2" @tap="gotoTab('/pages/me/me')">个人中心</view>
		</view>
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
		             duration: 500
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
				gotoTab(url){
					uni.switchTab({
						url
					})
				}
		     },
		onLoad() {

		},
		
	}
</script>

<style>
	.uni-margin-wrap {
			width: 690rpx;
			width: 100%;
		}
		.swiper {
			height: 300rpx;
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
</style>
