<template>
	<view class="top">
		<image src="../static/datu.jpg" class="detailtu"></image>
		<image src="../static/icon_home_white.png" class="gohome" @tap="goindex"></image>
		<view>马克·洛厄尔·安德森（Marc Lowell Andreessen）出生于 1971 年 7 月 9 日，他是美国的企业家、投资者和软件工程师。安德森是世界上第一个被广泛使用的浏览器 Mosaic 的共同开发者，也是网景通讯公司的创始人；安德森还是硅谷风险投资公司 Andreessen Horowitz 创始人，他创立了软件公司 Opsware，随后出售给惠普（Hewlett-Packard）。安德森也是 Ning 的联合创始人，这是一家为社交网站提供平台的公司。他是 Facebook、eBay、惠普等公司的董事会成员，是硅谷会议的常驻主讲人和特邀来宾。

安德森出生于爱荷华州锡达福尔斯，在威斯康辛州新里斯本长大。1993 年 12 月，他在伊利诺伊大学香槟分校获得了计算机科学学士学位。身为一名大学生，他在德克萨斯州奥斯汀的 IBM 实习了一个暑假。他还曾在伊利诺伊大学的国家超级电脑应用中心（NCSA）工作，在那里，他熟知了蒂姆·伯纳斯-李对万维网的开放标准。安德森和一位全职受薪同事埃里克·比纳致力于创建一个图形化并易于使用的浏览器，能够在各种计算机上工作，这便是 Mosaic 网页浏览器的雏形。
</view>
	</view>
</template>

<script>
	export default {
		  data() { 
			  return{
				  
			  }
		  },
		  methods:{
			  goindex(){
				  uni.switchTab({
				  	url:'/pages/index/index'
				  })
			  }
		  },
		  }
</script>

<style scoped>
	.detailtu{
		width: 100%;
		height: 240px;
	}
	.top{
		position: relative;
	}
	
	.gohome{
		width: 26px;
		height: 26px;
		position: absolute;
		top: 10px;
		left: 20px;
	}
</style>