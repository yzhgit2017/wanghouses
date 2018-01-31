<template>	
	<div class="events-wrapper">
		<div class="img-wrapper">
			<img src="static/images/hdygaoi@3x.png">
		</div>
		<div class="rolling" ref="rolling">
			<div class="swiper-container events-swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><router-link to=""><span class="title-label" style="background-image:url(static/images/pic_fcq.png)"></span>从世界经济局势看中国炒房连接的杀跨列附近的</router-link></div>
					<div class="swiper-slide"><router-link to=""><span class="title-label" style="background-image:url(static/images/pic_fcq.png)"></span>从世界经济局势看中国炒房龙卷风贷款</router-link></div>
					<div class="swiper-slide"><router-link to=""><span class="title-label" style="background-image:url(static/images/pic_fcq.png)"></span>从世界经济局势看中国炒房框架的路径</router-link></div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	export default{
		name: 'eventsAnnounce',
		data(){
			return {
				
			}
		},
		mounted(){
            this.rolling();
            console.log(this.$refs.rolling.offsetHeight)
		},
		methods:{
            rolling(){ 
                let h = (document.documentElement.clientWidth / 320) * 20 * 2              	
            	new Swiper('.events-swiper',{
            		direction: 'vertical',
            		autoplay: 2500,
            		loop: true,
            		height: h,
            		autoplayDisableOnInteraction: false
            	})
            }
		},
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.events-wrapper{
		height: 2rem;
		width: 100%;
		padding: 0 .75rem;
		box-sizing: border-box;
		overflow: hidden;
		background-color: #fff;
		.img-wrapper{
			width: 30%;
			height: 100%;
			float: left;
			@include flex(inherit,center);
			img{
				width: 80%;
				display: block;
			}
		}
		.rolling{
			width: 70%;
			height: 100%;
			overflow: hidden;
			.events-swiper{
				.swiper-wrapper{
					.swiper-slide{
						line-height: 2rem;
						a{
							display: inline-block;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							color: #3c3f46;
							.title-label{
								display: inline-block;
								width: 1.7rem;
								height: .6rem;
								background-size: 100%;
								background-repeat: no-repeat;
								background-position: center;
								position: relative;
								top: 2px;
								margin-right: 5px;
							}
						}
					}
				}
			}
		}
	}	
</style>