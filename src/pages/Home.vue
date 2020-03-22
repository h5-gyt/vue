<template>
	
	<div class="Home">
	  
	  <Swiper
		:data="list"
		apiName="banner"
	  />
	  
	  <div class="home-m-l-r">
	    <!-- <Cell :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
	    <!-- <Cell :index="0" :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
	    <Cell
	      v-for="(item,index) of home"
	      :key="item._id"
	      :data="item"
	      :index="index"
	      api-name="home"
	    />
	  </div>
	</div>
</template>

<script>
	import Swiper from '../components/swiper/Swiper.vue';
	import Cell from '../components/Cell.vue';
	import axios from 'axios'
	
	export default {
	  name:'Home',
	  props:{},
	  data(){
	    return {
	      list:[],
		  home:[]
	    }
	  },
	  components:{
		  Swiper,Cell
	  },
	  mounted(){
			axios({
				url:'/api/goods/banner',
				params:{_page:1,_limit:3},
				headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imd5dCIsIl9pZCI6IjVlNzRiZjAzOTYxY2Q1NTVjY2U1MzUyMiIsImlhdCI6MTU4NDg0NjEwOSwiZXhwIjoxNTg0OTMyNTA5fQ.F1AEYEfgRhWnse3cMdycoHhNXTTouPvv-R3-feKP7d4'
				}
			}).then(
				res=>this.list = res.data.data
			 )
			 
			 axios({
				url:'/api/goods/home',
				params:{_page:1,_limit:10},
				headers:{
					token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imd5dCIsIl9pZCI6IjVlNzRiZjAzOTYxY2Q1NTVjY2U1MzUyMiIsImlhdCI6MTU4NDg0NjEwOSwiZXhwIjoxNTg0OTMyNTA5fQ.F1AEYEfgRhWnse3cMdycoHhNXTTouPvv-R3-feKP7d4'
				}
			 }).then(
				res=>this.home = res.data.data
			  )
			 },
		
		updated(){},
		methods:{},
	}
</script>

<style>
	.Home{
	/* background: #999999; */
	}
	.home-m-l-r{
	margin: 0 0.4rem;
	}
</style>
