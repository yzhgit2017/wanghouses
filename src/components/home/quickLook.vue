<template>
	<div class="quickLook-wrapper">
		<div class="swiper-container quickLook-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<router-link to="" class="quickLook-link">
	            		<img src="static/images/zuixianjiaofang@3x.png">
	            		<p>最先交房</p>
	            	</router-link>
	            </div>
	            <div class="swiper-slide">
	            	<router-link to="" class="quickLook-link">
	            		<img src="static/images/zuixiankaipan@3x.png">
	            		<p>最先开盘</p>
	            	</router-link>
	            </div>
	            <div class="swiper-slide">
	            	<router-link to="" class="quickLook-link">
	            		<img src="static/images/xuexiaozhaofang@3x.png">
	            		<p>学校找房</p>
	            	</router-link>
	            </div>
	            <div class="swiper-slide">
	            	<router-link to="" class="quickLook-link">
	            		<img src="static/images/mashangkanfang@3x.png">
	            		<p>马上看房</p>
	            	</router-link>
	            </div>	            
	        </div>	        
	    </div>
	    <div class="quickLook-other">
	    	<div class="other-item"><router-link to=""><img src="static/images/goufangbaike@3x.png"></router-link></div>
	    	<div class="other-item"><router-link to=""><img src="static/images/fangchanwenda@3x.png"></router-link></div>
	    	<div class="other-item"><router-link to=""><img src="static/images/fangdaijisuan@3x.png"></router-link></div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'quickLook',
		mounted(){
			this.freemode();
		},
		methods:{
			freemode: function(){
				var swiper = new Swiper('.quickLook-swiper', {			        
			        slidesPerView: 4,			       
			        freeMode: true
			    });
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.quickLook-wrapper{		
		.quickLook-swiper{
			margin-top: .5rem;
			padding: .5rem 0;
			background-color: #fff;
			width: 100%;
			.quickLook-link{
				width: 100%;
				height: 100%;
				@include flex(center,center);
				flex-direction: column;
			    -webkit-flex-direction: column;
			    -ms-flex-direction: column;
				img{
					width: 60%;
				}
				p{
					color: #565c67;
					padding-top: 5px;					
				}
			}
		}
		.quickLook-other{
			width: 100%;
			padding: .5rem .75rem;
			margin-top: .5rem;
			background-color: #fff;
			box-sizing: border-box;
			@include flex(space-between,center);
			.other-item{
				width: 30%;
				a{ 
					display: block;
					width: 100%;
					img{
						display: block;
						width: 100%;
					}
				}
				
			}
		}
	}
</style>