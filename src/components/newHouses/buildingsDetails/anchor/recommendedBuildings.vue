<template>
	<div class="recommended-buildings-wrapper" id="anchor-9">
		<div class="title">
			<h2>推荐楼盘</h2>			
		</div>
		<div class="swiper-container recommended-buildings-nav-swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="(item,index) in recommendedBuildingsSortArray" @click="tab(index)" v-bind:class="{'active': isIndex == index}">{{item}}</div>	          
	        </div>	       
	    </div>
	    <ul class="recommended-item-list">
	    	<li v-for="(item,index) in recommendedBuildingsItemArray">
				<router-link to="">
					<div class="img-wrapper">
						<img :src="item.imgSrc">
					</div>
					<div class="text-wrapper">
						<p><span class="self-title">{{item.title}}</span><span class="sub-title">{{item.subTitle}}</span></p>
						<p class="address">{{item.address}}</p>
						<p class="p3"><span class="price">{{item.price}}</span>佣金：<span class="commission">{{item.commission}}</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in item.labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label">
					    <img src="static/images/tejia@3x.png" v-if="item.state == '特价'">
					    <img src="static/images/remai@3x.png" v-else-if="item.state == '热卖'">
					    <img v-else style="display: none;">
					</div>
				</router-link>
			</li>
	    </ul>
	    <div class="pagination">	    	
	    	<span>上一页</span>
	    	<template v-if="!ellipsis">
	    		<span v-for="(num,index) in pageNumArray" v-bind:class="{'active': pageIndex == index}">{{num}}</span>
	    	</template>
	    	<template v-else>
	    		<span>1</span>
		    	<span>2</span>
		    	<label v-show="ellipsis">...</label>
		    	<span>3</span>
		    	<span>4</span>
	    	</template>		    	
	    	<span>下一页</span>	    	
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'bestHousesType',
		data(){
			return {
				recommendedBuildingsSortArray: ['热门楼盘','同价位楼盘','周边楼盘'],
				isIndex: 0,
				pageIndex: 0,
				ellipsis: true,
				pageNumArray: [],
				recommendedBuildingsItemArray: [
					{
						imgSrc: 'static/images/loupantux.png',
						title: '全程一号院',
						subTitle: '昌乐首席5s社区',
						address: '历下区-县西巷北口1200号多福多寿范德萨范德萨发',
						price: '2200/㎡',
						commission: '6000',
						labels: ['住宅','在售','精装'],
						state: '热卖'
					},
					{
						imgSrc: 'static/images/loupantux.png',
						title: '全程一号院',
						subTitle: '昌乐首席5s社区',
						address: '历下区-县西巷北口1200号多福多寿范德萨范德萨发',
						price: '2200/㎡',
						commission: '6000',
						labels: ['住宅','在售','精装','地铁','随时看房'],
						state: '特价'
					},
					{
						imgSrc: 'static/images/loupantux.png',
						title: '全程一号院',
						subTitle: '昌乐首席5s社区',
						address: '历下区-县西巷北口1200号多福多寿范德萨范德萨发',
						price: '2200/㎡',
						commission: '6000',
						labels: ['住宅','在售','精装'],
						state: ''
					},
				],	
			}
		},
		mounted(){
			this.newSwiper();
			this.paging();			
		},
		methods:{
			newSwiper: function(){
				var navSwiper = new Swiper('.recommended-buildings-nav-swiper', {			        
			        slidesPerView: 3,	       
			        freeMode: true
			    });			   
			},
			tab: function(index){
				this.isIndex = index;				
			},
			paging: function(){
				var dataTotal = 9;
				var pageTotal = Math.ceil(dataTotal/3);
				if(pageTotal>4){
					this.ellipsis = true;
				}else{
					this.ellipsis = false;
					for (var i = 1; i <= pageTotal; i++) {
						this.pageNumArray.push(i);
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-9{
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
		.recommended-buildings-nav-swiper{
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
		.recommended-item-list{
			margin-top: -1px;
			li{
				padding: .75rem 0;
				border-top: 1px solid #ececec;
				a{
					position: relative;
					display: block;
					@include flex(left,normal);
					.img-wrapper{
						width: 28%;
						img{
							width: 100%;
							// height: 4rem;
							display: block;							
							margin-top: .5rem;
						}
					}
					.text-wrapper{						
						width: 72%;
						padding: 0 .5rem;
						box-sizing: border-box;
						.self-title{
							font-size: .7rem;
							font-weight: bold;
							color: #333;
						}
						.sub-title{
							margin-left: .5rem;
							color: #333;
						}
						.address{
							color: #999;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.p3{
							color: #999;
						}
						.price{
							color: red;
							font-size: .7rem;
							margin-right: 1rem;
						}
						.commission{
							color: red;
							font-size: .65rem;
						}
						.p4{
							span{
								display: inline-block;
								padding: 1px 8px;
								border: 1px solid #ececec;
								border-radius: 2px;
								margin-right: 5px;
								margin-bottom: 5px;
							}
						}						
					}
					.icon-label{
						position: absolute;
						top: 0;
						right: 0;
						width: 1.8rem;
						img{
							display: block;
							width: 100%;								
						}
					}
				}
			}
		}
		.pagination{
			text-align: center;
			font-size: 0;
			span{
				display: inline-block;
				padding: 2px 9px;
				border: 1px solid #ececec;
				color: #333;
				font-size: .6rem;
				margin: 10px 2px;
			}
			span.active{
				background-color: #2bddbe;
				border: 1px solid #2bddbe;
				color: #fff;
			}
			label{
				display: inline-block;
				color: #333;
				padding: 0 2px;
			}
		}		
	}
</style>