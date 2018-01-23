<template>
	<div class="container">
		<div class="swiper-container detailSwiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><router-link to=""><img src="static/images/banner@3x.png"></router-link></div>
				<div class="swiper-slide"><router-link to=""><img src="static/images/banner@3x.png"></router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'swiperDetail',
		mounted(){
			this.lunbo();
		},
		methods: {
			lunbo(){
            	var banner = new Swiper('.detailSwiper',{
            		autoplay: 3000,
            		loop: true,
            		autoplayDisableOnInteraction: false
            	})
            },
		}
	}
</script>

<style scoped lang="scss">
	.detailSwiper{
		.swiper-wrapper{
			.swiper-slide{
				a{
					display: block;
					width: 100%;
					height: 100%;
					img{
						display: block;
						width: 100%;
					}
				}
			}
		}
	}
</style>