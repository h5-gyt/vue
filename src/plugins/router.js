import Vue from  'vue'
import VueRouter from 'vue-router';

// 安装插件
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Follow from '../pages/Follow.vue';
import Column from '../pages/Column.vue';
import Detail from '../pages/Detail.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import User from '../pages/User.vue';
import NoPage from '../pages/Nopage.vue';

let routes = [
	{path:'/home',component:Home},
	{path:'/Follow',component:Follow},
	{path:'/Column',component:Column},
	{path:'/Detail/:_id',component:Detail,name:'detail'},
	{path:'/Login',component:Login},
	{path:'/Reg',component:Reg},
	{path:'/User',component:User},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
	
	
];

let router = new VueRouter({
	routes
})

export default router;