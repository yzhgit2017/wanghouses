<template>
	<div class="special-offer-houses-wrapper" id="anchor-2">
		<div class="title">
			<h2>特价房源</h2>
			<router-link to="">换一批</router-link>
		</div>
		<ul class="houses-list">
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="price">4755</span>&nbsp;元/㎡</p>	
					</div>
					<div class="icon-label"><img src="static/images/tejia@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="price">4755</span>&nbsp;元/㎡</p>	
					</div>
					<div class="icon-label"><img src="static/images/tejia@3x.png"></div>
				</router-link>
			</li>
		</ul>
		<div class="more">
			<router-link to="">价格不够低？点击获取底价</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'specialOfferHouses',
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-2{
		@include pad;
		margin-top: .5rem;
		.title{
			height: 2rem;
			@include flex(space-between,center);			
			a{
				color: #666;
			}
		}
		.houses-list{
			li{
				padding: 15px 0;
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
							// margin-top: .5rem;
						}
					}
					.text-wrapper{						
						width: 72%;
						padding: 0 .5rem;
						box-sizing: border-box;
						.p1{
							color: #333;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: .7rem;
						}
						.p2{
							color: #333;
							span{
								margin-right: .5rem;
								display: inline-block;
							}
						}
						.p3{
							color: #999;							
							.price{
								color: red;
								font-size: .65rem;								
							}
						}
						.price{
							color: red;
							font-size: .7rem;							
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
		.more{
			a{
				display: block;
				width: 12rem;
				height: 1.5rem;
				line-height: 1.5rem;
				text-align: center;
				color: #fff;
				font-size: .7rem;
				border-radius: 0.75rem;
				background-color: #2bddbe;
				margin: .5rem auto;
			}		
		}
	}
</style>