<template>
	<div class="container">
		<my-header homeHeader="true"></my-header>
		<div class="banner-wrapper">
			<img src="static/images/banner@3x.png">
		</div>
		<events-announce></events-announce>
		<tab></tab>
		<information></information>
		<quick-look></quick-look>
		<ten-buildings></ten-buildings>
	</div>
</template>

<script>
    import myHeader from '@/components/public/header'
    import eventsAnnounce from './eventsAnnounce'
    import tab from './tab'
    import information from './information'
    import quickLook from './quickLook'
    import tenBuildings from './tenBuildings'
    import {mapGetters} from 'vuex'
	export default{
		name: 'homeIndex',
		components: {eventsAnnounce,tab,information,quickLook,tenBuildings,myHeader},		
		mounted(){
			
		},
		methods:{
			
		},
		watch:{

		},
		// beforeRouteEnter (to, from, next) {
	    	
	    // 	next(vm => {
	    // 		vm.aa();
	    // 	})
	    // }
	}
</script>

<style scoped lang="scss">
	.container{		
		.banner-wrapper{
			padding-top: 2rem;
			img{
				width: 100%;
				display: block;
			}
		}
	}
</style>