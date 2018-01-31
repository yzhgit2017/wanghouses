<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
            
        }
    },
    // beforeRouteEnter (to, from, next) {
         
    //     next(vm => {
    //          alert(2)
    //          vm.aa();
    //     })
    // }, 
    beforeCreate(){
        
    },
    mounted(){
    	
    },
    methods:{
       
    },

}
</script>

<style lang="scss">
	@import 'static/css/common.scss';
    #app{
        background-color: #f7fbfc;
    }
</style>
