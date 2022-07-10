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
				<view class="tab_2" @tap="gotoTab('/pages/me/me')" >个人中心</view>
		</view>
		<view class="cho">
			<view class="cho1" @tap="oneye(0)" :class="pink == 0?'backred':''" >推荐</view>
			<view class="cho2" @tap="oneye(1)" :class="pink == 1?'backred':''">资讯</view>
		</view>
			<swiper  :current="curind" style="height: 2000rpx;" @animationfinish="qiehuan">
				<swiper-item >
					<view class="news" >
						<view class="ceshiajax">
								<view class="liu" > 
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
								<view class="liu" >
									<image src="../../static/datu.jpg" class="liu_tu" @tap="navito"/>
									<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
								</view>
						</view>
					</view>		
				</swiper-item>
				<swiper-item >
					<view class="food">
						<view class="ceshi_b" >
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
							<view class="liu_b" >
								<image src="../../static/zhutu02.jpg" class="liu_tu_b" @tap="navito"/>
								<text>浏览器会根据容器的空间大小来自动分配列的宽度</text>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
</template>

<script>
	import { getNews} from '../../config/api.js';
	
	
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
					 indexvalue:0,
		         }
		     },
			 onPullDownRefresh() {
			 	
			 },
			 onReachBottom() {
			 	
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
				},
				qiehuan(event){
					let index =event.detail.current;
					this.pink=index;
					
				},
				navito(){
					uni.$u.route('/subpages/newsinfo');
				}
		     },
			onLoad() {
			// uni.request({
			//     url: 'https://api.apiopen.top/api/sentences', //仅为示例，并非真实接口地址。
			//     success: (res) => {
			//         this.shuju= res.statusCode;
					
			//     }
			// });
			
		
			},
			onShow() {
				
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
			background-color:white;
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
		.ceshiajax{
			column-count: 2;
			column-gap: 2px;
			
		}
		.liu_tu{
			width: 100%;
			border-radius: 8px;
			vertical-align: bottom;
			height: 120px;
		}
		.liu{
			margin-bottom: 10px;
			height: 160px;
			padding: 2px;
			display: flex;
			flex-direction: column;

		}
		.ceshi_b{
			width: 100%;
			height: 40px;
			
		}
		.liu_b{
			padding-left: 4px;
			padding-right: 4px;
		
		}
		.liu_tu_b{
			width: 100%;
			border-radius: 8px;
			vertical-align: bottom;
			height: 120px;
			margin-top: 4px;
		}
</style>
