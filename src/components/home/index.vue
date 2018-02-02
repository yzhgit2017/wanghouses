<template>
	<div class="container">
		<my-header homeHeader="true" :paramCityName="cityName"></my-header>
		<div class="banner-wrapper">
			<img src="static/images/banner@3x.png">
		</div>
		<events-announce></events-announce>
		<tab></tab>
		<information></information>
		<quick-look></quick-look>
		<ten-buildings :paramCityName="cityName"></ten-buildings>
		<!-- <div class="footer-bar"></div> -->
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
		data(){
			return {
				cityName: 'aa',
			}
		},
		components: {eventsAnnounce,tab,information,quickLook,tenBuildings,myHeader},		
		mounted(){
			this.geolocation();
		},
		methods:{
			geolocation: function(){
				let _this = this;
				function myFun(result){
					let cityName = result.name;		
					_this.cityName = cityName;
					console.log(cityName)
					localStorage.cityName = cityName;
				}
				let myCity = new BMap.LocalCity();
				myCity.get(myFun);

			}
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
		.footer-bar{
			position: fixed;
			bottom: 0;
			height: 2rem;
			background-color: red;
			width: 100%;
			left: 0;
		}
	}
</style>