<template>
	<div class="best-houses-type-wrapper" id="anchor-3">
		<div class="title">
			<h2>精品户型</h2>			
		</div>
		<div class="swiper-container best-houses-type-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<router-link to="">
	            		<div class="img-wrapper">
	            			<img src="static/images/huxingtu1.jpg">
	            		</div>
	            		<p class="p1">三室两厅两卫 180㎡</p>
	            		<p class="p2">均价：<span>2200/㎡</span></p>
	            	</router-link>
	            </div>     
	            <div class="swiper-slide">
	            	<router-link to="">
	            		<div class="img-wrapper">
	            			<img src="static/images/huxingtu1.jpg">
	            		</div>
	            		<p class="p1">两室一厅一卫 180㎡</p>
	            		<p class="p2">均价：<span>2200/㎡</span></p>
	            	</router-link>
	            </div>           
	        </div>	       
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'bestHousesType',
		mounted(){
			this.newSwiper();			
		},
		methods:{
			newSwiper: function(){
				var swiper = new Swiper('.best-houses-type-swiper', {			        
			        slidesPerView: 1.5,
			        spaceBetween: 20,				       
			        freeMode: true
			    });
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-3{
		@include pad;
		margin-top: .5rem;
		.title{
			height: 2rem;
			@include flex(space-between,center);
			border-bottom: 1px solid #ececec;
			a{
				color: #666;
			}
		}
		.best-houses-type-swiper{
			.swiper-wrapper{
				.swiper-slide{
					a{
						display: block;
						width: 100%;
						height: auto;
						.img-wrapper{
							width: 100%;
							img{
								display: block;
								width: 100%;
							}
						}
						.p1{
							margin-top: 1rem;
							text-align: center;
							color: #333;
						}
						.p2{
							margin: .5rem 0;
							text-align: center;
							color: #666;
							span{
								color: red;
							}
						}
					}
				}
			}
		}
	}
</style>