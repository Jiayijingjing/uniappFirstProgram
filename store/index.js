import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		num:0,
		price:10
	},
	mutations:{
		
	},
	actions:{
		
	},
	getters:{
		
	},
})
export default store

