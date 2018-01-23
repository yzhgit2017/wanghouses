<template>
	<div class="anchor-nav-wrapper">
		<div class="swiper-container anchor-nav-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="(item,index) in anchorArray" @click="goAnchor(index)" v-bind:class="{'active': isIndex == index}">{{item}}</div>	          
	        </div>	       
	    </div>
	    <buildings-detail></buildings-detail>
	    <adsense-one></adsense-one>
		<watch-houses></watch-houses>
		<adsense-two></adsense-two>
		<adsense-three></adsense-three>
		<special-offer-houses></special-offer-houses>
		<best-houses-type></best-houses-type>
	</div>
</template>

<script>
	import buildingsDetail from './buildingsDetail'
	import adsenseOne from './adsenseOne'
	import watchHouses from './watchHouses'
	import adsenseTwo from './adsenseTwo'
	import adsenseThree from './adsenseThree'
	import specialOfferHouses from './specialOfferHouses'
	import bestHousesType from './bestHousesType'
	export default {
		name: 'anchorNav',
		data(){
			return {
				isIndex: 0,
				anchorArray: ['楼盘详情','视频看房','特价房源','精品户型','时惠资讯','价格走势','周边配套','电子沙盘','图库','推荐楼盘']
			}
		},
		components: {buildingsDetail,adsenseOne,watchHouses,adsenseTwo,adsenseThree,specialOfferHouses,bestHousesType},
		mounted(){
			this.newSwiper();			
		},
		methods:{
			newSwiper: function(){
				var swiper = new Swiper('.anchor-nav-swiper', {			        
			        slidesPerView: 4.5,
			        freeMode: true
			    });
			},			
			goAnchor(index) {
				this.isIndex = index;
				var selector = '#anchor-' + index;
		        var anchor = this.$el.querySelector(selector)
		        console.log(anchor.offsetTop)
		        document.body.scrollTop = anchor.offsetTop
		        document.documentElement.scrollTop = anchor.offsetTop
		    }
		}
	}
</script>

<style scoped lang="scss">
	.anchor-nav-swiper{
		margin-top: .5rem;
		background-color: #fff;
		.swiper-wrapper{
			border-bottom: 1px solid #ececec;
			.swiper-slide{
				height: 2rem;
				line-height: 2rem;
				text-align: center;
			}
			.swiper-slide:before{
				content: '';
				position: absolute;
				left: 100%;
				width: 1px;
				height: 1rem;
				top: 50%;
				transform: translateY(-50%);
				background-color: #ececec;
			}
			.swiper-slide.active{
				color: #2bddbe;
			}
			.swiper-slide.active:after{	
				content: '';			
				position: absolute;
				top: 1.9rem;
				left: 50%;
				width: 30%;
				height: 2px;
				background-color: #2bddbe;
				transform: translateX(-50%);
			}			
		}
	}
</style>