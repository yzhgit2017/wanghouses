<template>
	<div class="function-swiper-wrapper">
		<div class="swiper-container function-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<router-link to="" class="function-item-link">
	            		<span class="icon-span"><i class="iconfont icon-zhuangxiugongcheng01"></i></span>
	            		<p>我要装修</p>
	            	</router-link>
	            </div>
	            <div class="swiper-slide">
	            	<router-link to="" class="function-item-link">
	            		<span class="icon-span"><i class="iconfont icon-icon-test"></i></span>
	            		<p>房贷计算</p>
	            	</router-link>
	            </div>
	            <div class="swiper-slide">
	            	<router-link to="" class="function-item-link">
	            		<span class="icon-span"><i class="iconfont icon-gongjiaoche"></i></span>
	            		<p>看房团</p>
	            	</router-link>
	            </div>	                        
	        </div>	        
	    </div>
	    <div class="privilege-wrapper">
	    	<p class="title"><i style="color:#dc884b">经纪人</i><i style="color:#2bddbe">特权区</i></p>
	    	<div class="privilege">
	    		<router-link to="" style="background-color:#01cc01;">微推广</router-link>
	    		<router-link to="" style="background-color:#0088ce;">海报生成器</router-link>
	    		<router-link to="" style="background-color:#cd8902;">网站推广</router-link>
	    	</div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'functionSwiper',
		mounted(){
			this.freemode();
		},
		methods:{
			freemode: function(){
				var swiper = new Swiper('.function-swiper', {			        
			        slidesPerView: 3,			       
			        freeMode: true
			    });
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
 	.function-swiper-wrapper{ 		
 		.function-swiper{
 		    border-top: 1px solid #ececec;			
			padding: .5rem 0;
			background-color: #fff;
			width: 100%;
			.function-item-link{				
				width: 100%;
				height: 1.2rem;
				border-right: 1px solid #ececec;
				@include flex(center,center);				
				img{
					width: 60%;
				}
				p{
					color: #565c67;
					padding-left: 5px;					
				}
				.icon-span{
					display: inline-block;
					width: 1rem;
					height: 1rem;
					line-height: 1rem;
					text-align: center;
					border-radius: 100%;
					background-color: #2bddbe;
					i{
						color: #fff;
						font-size: .7rem;
					}
				}
			}
		}
		.privilege-wrapper{
			margin-top: .5rem;
			@include pad;
			padding-top: .5rem;
			padding-bottom: .5rem;
			.title{
				padding-bottom: .5rem;
				i{
					font-weight: bold;
					font-size: .7rem;
				}
			}
			.privilege{
				overflow: hidden;
				a{
					display: block;
					float: left;
					width: 33.333%;
					height: 1.5rem;
					line-height: 1.5rem;
					text-align: center;
					color: #fff;
				}
			}
		}
 	}
	
</style>