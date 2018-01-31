<template>
	<div class="map-storage-nav-wrapper" id="anchor-8">
		<div class="title">
			<h2>图库</h2>			
		</div>
		<div class="swiper-container map-storage-nav-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="(item,index) in mapStorageSortArray" @click="tab(index)" v-bind:class="{'active': isIndex == index}">{{item}}&nbsp;({{2}})</div>	          
	        </div>	       
	    </div>
	    <div class="swiper-container map-storage-detail-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="(item,index) in mapStorageImageArray" @click="tab(index)" v-bind:class="{'active': isIndex == index}">
	            	<router-link to="">
	            		<div class="img-wrapper"><img :src="item.imgSrc"></div>
	            		<p>{{item.desc}}</p>
	            	</router-link>
	            </div>	          
	        </div>	       
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'bestHousesType',
		data(){
			return {
				mapStorageSortArray: ['配套图','配套图','实景图'],
				isIndex: 0,
				mapStorageImageArray: [
					{
						imgSrc: 'static/images/mapStorage_img1.png',
						desc: '旁边街景'
					},
					{
						imgSrc: 'static/images/mapStorage_img2.png',
						desc: '线路'
					},
					{
						imgSrc: 'static/images/mapStorage_img3.png',
						desc: '开盘大典'
					},
					{
						imgSrc: 'static/images/mapStorage_img1.png',
						desc: '旁边街景'
					},
				],
				chage: [
					{
						imgSrc: 'static/images/mapStorage_img3.png',
						desc: 'aa'
					},
					{
						imgSrc: 'static/images/mapStorage_img2.png',
						desc: 'bb'
					},
					{
						imgSrc: 'static/images/mapStorage_img1.png',
						desc: 'cc'
					},
					{
						imgSrc: 'static/images/mapStorage_img3.png',
						desc: 'dd'
					},
				]
			}
		},
		mounted(){
			this.newSwiper();			
		},
		methods:{
			newSwiper: function(){
				var navSwiper = new Swiper('.map-storage-nav-swiper', {			        
			        slidesPerView: 3,	       
			        freeMode: true
			    });
			    var detailSwiper = new Swiper('.map-storage-detail-swiper', {			        
			        slidesPerView: 2.5,
			        spaceBetween: 10,			        				       
			        freeMode: true
			    });
			},
			tab: function(index){
				this.isIndex = index;
				this.mapStorageImageArray = this.chage;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-8{
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
		.map-storage-nav-swiper{
			.swiper-wrapper{
				border-bottom: 1px solid #ececec;
				.swiper-slide{
					height: 2rem;
					line-height: 2rem;
					text-align: center;
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
		.map-storage-detail-swiper{
			margin-top: 1rem;
			.swiper-wrapper{
				.swiper-slide{
					a{
						display: block;
						width: 100%;
						height: auto;
						background-color: #f3f9fa;
						.img-wrapper{
							overflow: hidden;
							@include flex(center,center);
							width: 100%;
							height: 4rem;
						}
						p{
							text-align: center;
							color: #333;
							font-size: .7rem;
							padding: .5rem;
						}
					}
				}
			}
		}
	}
</style>