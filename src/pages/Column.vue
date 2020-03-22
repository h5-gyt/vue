<template>
	<div class = "Column">
		<Cell 
			v-for="(item,index) of column"
			:key="item._id"
			:data="item"
			:index="index"
		/>
		
	</div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	export default {
	  name:'Column',
	  props:{},
	  data(){
	    return {
	      column:[]
	    }
	  },
	  components:{
	    Cell
	  },
	  mounted(){
		  axios({
			url: '/api/goods/column',
		  	params:{_page:1,_limit:12},
		  }).then(
		  	res=>this.column=res.data.data
		  )
	  },
	  updated(){},
	  methods:{}
	}
</script>

<style scoped>
	.Column{
	  margin-top: .6rem;
	  margin-left: 0.4rem;
	  margin-right: 0.4rem;
	}
</style>
