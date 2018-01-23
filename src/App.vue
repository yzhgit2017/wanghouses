<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app',
    mounted(){
    	this.refresh();
    },
    methods:{
    	refresh:function(){
    		window.onpopstate = function(){
    			document.location.reload();
    		}
    	}
    }
}
</script>

<style lang="scss">
	@import 'static/css/common.scss';
    #app{
        background-color: #f7fbfc;
    }
</style>
