<template>
	<div class="banner">
	  <ul class="clearfix">
			<router-link
				tag="li"
				v-for="item of data"
				:key="item._id"
				:to="{name:'detail',params:{_id:item._id},query:{apiName:apiName}}"
			>
				<img :src="$baseUrl + item.banner" alt=""/>
				<div class="text-box">
					<h2>{{item.title}}</h2>
					<p>{{item.sub_title}}</p>
				</div>
			</router-link>
	  </ul>
	</div>
</template>

<script>
	import Swipe from './assets/js/swipe.js'
	// import $ from '../assets/js/jquery-1.7.2.js'
	import $ from 'jquery';  // npm i jquery@1.7.2 -S
	export default {
	  name:'swiper',
	  props:['data','apiName'],
	  data(){
	    return {
	      
	    }
	  },
	  components:{},
	  mounted(){
	  },
	  updated(){
		  
		  //js 控制 轮播图，计算横向长度=item*num
		  
		  var mySwipe=new Swipe($('.banner')[0],{
		    auto:2000,
		    continuous:true,
		    stopPropation:true,
		    callback:function (index,element){
		      $('.banner ol li').removeClass('active');
		      $('.banner ol li').eq(index).addClass('active');
		    }
		  })
	  },
	  methods:{}
	}
</script>

<style scoped>
	.banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
	.banner ul li{width:6.4rem;float:left;position: relative;}
	.banner ul li img{width:100%; display:block;}
	.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
	.text-box h2{text-align: left; font-size:0.2rem; font-weight:normal; margin:0.22rem 0 0.22rem 0; line-height:100%; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
	.text-box p{text-align: left; line-height:100%;}
	</style>
</style>
