<template>
	<view class="top">
		<image src="../static/zhutu02.jpg" class="detailtu"></image>
		<image src="../static/icon_home_white.png" class="gohome" @tap="goindex"></image>
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
	.top{
		position: relative;
	}
	.detailtu{
		width: 100%;
		height: 240px;
	}
	.gohome{
		width: 26px;
		height: 26px;
		position: absolute;
		top: 10px;
		left: 20px;
	}
</style>