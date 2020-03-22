<template>
  <div id="app">
	 <loading v-if="$root.bLoading"/>
	<Header v-if="$root.bNav"/>
	<router-view></router-view>
	<Footer v-show="$root.bFoot"/>
  </div>
</template>

<script>
	
import Header from './Header.vue';
import Footer from './Footer.vue';
import loading from '../components/loading.vue'

export default {
  name: 'app',
  components: {
	  Header,Footer,loading
  },watch:{
  	$route:{//路由监听，属性检测
      handler(nextValue,PrevValue){
        // console.log('路由变化了',nextValue);
        
        let path = nextValue.path;
		
		if(/home|follow|column/.test(path)){
			this.$root.bNav=this.$root.bFoot=true;
		}else if(/detail|login|reg/.test(path)){
			this.$root.bNav=this.$root.bFoot=false;
		}else{
			this.$root.bNav=false;
			this.$root.bFoot=true;
		}
        
      },
      immediate:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:0.6rem;
}
</style>
