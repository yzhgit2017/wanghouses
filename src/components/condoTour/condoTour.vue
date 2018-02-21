<template>
	<div class="condo-tour-wrapper">
	    <header>
			<span class="back" @click="goBack()"><i class="iconfont icon-arrow"></i></span>
			<p>看房团</p>
			<div class="take-place"></div>
		</header>
		<div class="banner"><img src="static/images/kftbanner.png"></div>
		<div class="rolling-wrapper">
		    <div class="label"><i style="color:#2bddbe">已报名</i></div>
			<div class="rolling" ref="rolling">
				<div class="swiper-container enter-swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><span>张**</span><span>150****6666</span></div>
						<div class="swiper-slide"><span>张**</span><span>150****6666</span></div>
						<div class="swiper-slide"><span>张**</span><span>150****6666</span></div>
					</div>
				</div>
			</div>
		</div>
		<ul class="card-list">
			<li>
				<router-link to="">
					<p class="p1">						
						<span class="span1">大型看房团</span>
						<span class="span2">8月20日</span>
				    </p>
					<p class="p2">
					    <span>距结束：</span>
					    <span>10 天</span>
					    <span>12 时</span>
					    <span>24 分</span>
					    <span>40 秒</span>						
					</p>
					<p class="p3">
						<span style="color:#999;">历下区-县西巷北口1200号</span>
						<span>已有<span style="color:red;">100</span>人报名</span>
					</p>
					<p class="p4">
						<span style="color:#cd8902;background-color:#ffaa01;">区域热盘</span>
						<span style="color:#00cc87;background-color:#00ffab;">大品牌盘</span>
						<span style="color:#0088ce;background-color:#00aaff;">高关注度</span>
					</p>
					<div class="xian"></div>
					<div class="destination">
						<p><span class="span1">1.绿地新里程</span><span style="color:red;">16000</span><span>元/㎡</span></p>
						<p><span class="span1">2.公元世家</span><span style="color:red;">16000</span><span>元/㎡</span></p>
						<p><span class="span1">3.贤文世家</span><span style="color:red;">16000</span><span>元/㎡</span></p>
					</div>
					<router-link to="/condoTourEnter" class="enter-btn">免费报名</router-link>		
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'condoTour',
		data(){
			return {
				
			}
		},
		mounted(){
            this.rolling();
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
            rolling(){ 
                let h = (document.documentElement.clientWidth / 320) * 20 * 2              	
            	new Swiper('.enter-swiper',{
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
	.condo-tour-wrapper{
		header{
			height: 2rem;
			border-bottom: 1px solid #ececec;
			@include flex(space-between,center);			
			padding: 0 .75rem;
			.back{
				color: #3c3f46;				
				i{
					font-size: .8rem;
				}
			}
			p{
				font-size: .7rem;
				color: #3c3f46;
			}
			.take-place{
				width: .8rem;
				height: .8rem;
			}
		}
		.banner{
			img{
				display: block;
				width: 100%;
			}
		}
		.rolling-wrapper{
			height: 2rem;
			width: 100%;
			padding: 0 .75rem;
			box-sizing: border-box;
			overflow: hidden;
			background-color: #fff;
			.label{
				width: 20%;
				height: 100%;
				float: left;
				font-size: .7rem;
                font-weight: bold;
				@include flex(left,center);
			}
			.rolling{
				width: 80%;
				height: 100%;
				overflow: hidden;
				.enter-swiper{
					.swiper-wrapper{
						.swiper-slide{
							line-height: 2rem;
							span{
								margin-left: 1rem;
								color: #666;
							}
						}
					}
				}
			}
		}
		.card-list{
			li{
				@include pad;
				margin-top: .5rem;
				a{
					color: $mainFontSizeColor;
					display: block;
					position: relative;
					.p1{
						margin-bottom: .5rem;
						.span1{
							font-size: .8rem;
							font-weight: bold;
						}
					}
					.p2{
						margin-bottom: .5rem;
						span{
							color: #999;
						}
					}
					.p3{
						margin-bottom: .5rem;
						@include flex(space-between,center);
					}
					.p4{
						margin-bottom: .5rem;
						span{
							display: inline-block;
							padding: .1rem .4rem;
							border-radius: 2px;
						}
					}
					.xian{
						height: 1px;
						background-color: #ececec;
					}
					.destination{
						p{
							margin-top: .5rem;
							.span1{
								margin-right: 1rem;
							}
						}
					}
					.enter-btn{
						position: absolute;
						width: 3.5rem;
						height: 1.3rem;
						border-radius: .65rem;
						background-color: $mainColor;
						color: #fff;
						@include flex(center,center);
						right: 0;
						bottom: 0;
					}
				}
			}
		}
	}
</style>