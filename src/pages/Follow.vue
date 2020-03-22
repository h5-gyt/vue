<template>
	<div class="Follow">
	 <Cell 
		v-for="(item,index) of follow"
		:key="item._id"
		:index="index"
		:data="item"
		apiName="follow"
	 />
	</div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	export default {
	  name:'Follow',
	  props:{},
	  data(){
	    return {
	      follow:[]
	    }
	  },
	  components:{
	    Cell
	  },
	  mounted(){
		  axios({
			  url: '/api/goods/follow',
			  params:{_page:1,_limit:12},
		  }).then(
			res=>this.follow=res.data.data
		  )
	  },
	  updated(){},
	  methods:{}
	}
</script>

<style>
	.Follow{
	  margin-top: .6rem;
	  margin-left: 0.4rem;
	  margin-right: 0.4rem;
	}
</style>
