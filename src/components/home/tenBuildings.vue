<template>
	<div class="tenBuildings-wrapper">
		<div class="top-title">
			<span>十盘必看</span>
		</div>
		<ul class="tenBuildings-list">
			<li v-for="(item,index) in tenBuildingsList">
				<router-link to="/buildingsDetails">
					<div class="img-wrapper">
						<img :src="'http://wangwu.lami360.com' + item.houses_img">
					</div>
					<div class="text-wrapper">
						<p><span class="self-title">{{item.houses_name}}</span><span class="sub-title">{{item.subTitle}}</span></p>
						<p class="address">{{item.houses_address}}</p>
						<p class="p3"><span class="price">{{item.houses_price}}/㎡</span><!-- 佣金：<span class="commission">{{item.commission}}</span>&nbsp;元 --></p>
						<p class="p4">							
						    <span v-if="item.houses_type != ''" style="color: #44cc00;" v-bind:class="{'active': item.houses_type != null}">{{item.houses_type}}</span>	
							<span v-if="item.finish_statu != ''" style="color: #00cccb;" v-bind:class="{'active': item.finish_statu != null}">{{item.finish_statu}}</span>
							<span v-if="item.sale_type != ''" style="color: #cd8902;" v-bind:class="{'active': item.sale_type != null}">{{item.sale_type}}</span>
							<span v-if="item.jiaotong != ''" style="color: #0044cb;;" v-bind:class="{'active': item.jiaotong != null}">{{item.jiaotong}}</span>
						</p>						
					</div>
					<div class="icon-label">					    
					    <img src="static/images/remai@3x.png" v-if="item.is_hou == '1'">
					    <img v-else style="display: none;">
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import qs from 'qs'
	export default {
		name: 'tenBuildings',
		props: ['paramCityName'],
		data(){
			return {
				tenBuildingsList: [],					
			}
		},
		mounted(){
			
		},
		methods: {
			getTenBuildings(cityNmme){
				this.$http.post('http://wangwu.lami360.com/Jiekou/index',qs.stringify({city_name: cityNmme})).then(response => {
				    console.log(response.data)				
					this.tenBuildingsList = response.data;
				})			    
			}
		},
		watch:{
            paramCityName: function(){
            	let cityNmme = this.paramCityName;
            	this.getTenBuildings(cityNmme);
            }
        }
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.tenBuildings-wrapper{
		margin-top: .5rem;
		background-color: #fff;
		.top-title{
			height: 2rem;
			border-bottom: 1px solid #ececec;
			text-align: center;
			line-height: 2rem;
			span{
				display: inline-block;
				height: 100%;
				position: relative;
			}
			span:after{	
				content: '';			
				position: absolute;
				top: 1.9rem;
				left: 50%;
				width: 50%;
				height: 2px;
				background-color: #2bddbe;
				transform: translateX(-50%);
			}			
		}
		.tenBuildings-list{
			padding: 0 .75rem .75rem .75rem;
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
						.title{
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
								display: none;
								padding: 1px 8px;
								border: 1px solid #ececec;
								border-radius: 2px;
								margin-right: 5px;
								margin-bottom: 5px;
							}
							span.active{
								display: inline-block;
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
	}
</style>