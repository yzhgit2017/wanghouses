<template>
	<div class="buildings-list-wrapper">
		<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
		    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
		        <ul class="page-loadmore-list buildings-list">
		            <li v-for="item in list">
						<router-link to="">
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
		        <div slot="bottom" class="mint-loadmore-bottom">
			        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">加载更多 ↑</span>
			        <span v-show="bottomStatus === 'loading'">
			            <mt-spinner type="snake"></mt-spinner>
			        </span>
		        </div>
		    </mt-loadmore>
	    </div>
    </div>
</template>

<script type="text/babel">
	import {mapGetters} from 'vuex'
	import qs from 'qs'
    export default {
	    data() {
	      return {
	      	labels: ['住宅','在售','精装','地铁','随时看房'],
	        list: [],
	        allList: [],
	        allLoaded: false,
	        bottomStatus: '',
	        wrapperHeight: 0,	        
	      };
	    },
	    props: ['paramStreet','paramPriceOption','paramArea','paramAreaSort','paramBuXian'],
	    computed: {
	        ...mapGetters({
	            updatedCityName: 'updatedCityName'
	        }),	    
	    },
	    methods: {
		    handleBottomChange(status) {
		        this.bottomStatus = status;
		    },
	        loadBottom() {
		        setTimeout(() => {
			        let listLength = this.list.length;
			        let tr = this.allList.length%10;
			        if (listLength < this.allList.length) {				            
			            if(listLength < this.allList.length - tr){
			            	for (let i = listLength; i < 10+ listLength; i++) {	
				                this.list.push(this.allList[i]);
				            }
			            }else{
			            	for (let i = listLength; i < this.allList.length; i++) {            	
				                this.list.push(this.allList[i]);
				            }
			            }    				           
			        } else {
			            this.allLoaded = true;
			        }
			        this.$refs.loadmore.onBottomLoaded();
		        }, 1500);
	        },
	        areaFilter(cityName,areaSort,areaName,streetName,priceOption) {
	        	let sn;
	        	if(this.paramBuXian){
	        		sn = '不限';
	        	}else{
	        		sn = streetName;
	        	}
		    	this.$http.post('http://wangwu.lami360.com/Jiekou/lists',qs.stringify({city_name: cityName, types_id: areaSort, area_name: areaName, street_name: sn, price: priceOption})).then(response => {
					    console.log(response.data)
					    this.allList = [];
					    for (var i = 0; i < response.data.length; i++) {
					    	this.allList.push(response.data[i]);
					    }
					    this.list = this.allList;				
				    })	
	        },
	        priceFilter(cityName,areaName,priceOption) {
		    	this.$http.post('http://wangwu.lami360.com/Jiekou/lists',qs.stringify({city_name: cityName,area_name: areaName,price: priceOption})).then(response => {
					    console.log(response.data)
					    this.allList = [];
					    for (var i = 0; i < response.data.length; i++) {
					    	this.allList.push(response.data[i]);
					    }
					    this.list = this.allList;				
				    })	
	        },
	        init(){
	        	let cityName = this.updatedCityName;
	    		this.$http.post('http://wangwu.lami360.com/Jiekou/lists',qs.stringify({city_name: cityName})).then(response => {
				    console.log(response.data)
				    for (var i = 0; i < response.data.length; i++) {
				    	this.allList.push(response.data[i]);
				    }					
			    })	
	        }
	    },
	    created() {
		    this.init();
	    },
	    mounted() {
	      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;	     
	    },
	    watch:{
	        paramStreet: function(){
	        	console.log(this.updatedCityName,this.paramAreaSort,this.paramArea,this.paramStreet)
	            this.areaFilter(this.updatedCityName,this.paramAreaSort,this.paramArea,this.paramStreet,this.paramPriceOption)	            
	        },       
	        paramPriceOption: function(){
	        	this.priceFilter(this.updatedCityName,this.paramAreaName,this.paramPriceOption);
	        }           
	    }
    };
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.buildings-list-wrapper{
		padding-top: 3.6rem;		
		.buildings-list{
			padding: 0 .75rem .75rem .75rem;
			margin-top: -1px;
			background-color: #fff;
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
							.address{
								display: inline-block;
								width: 6rem;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								margin-right: .6rem;
								vertical-align: middle;
							}
							.price{
								color: red;
								font-size: .65rem;
								vertical-align: middle;
							}
						}
						.price{
							color: red;
							font-size: .7rem;
							margin-right: 1rem;
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
		.mint-loadmore-bottom{
			text-align: center;
			color: #666;
			background-color: #fff;
			span{
				display: inline-block;
			}
			.mint-spinner {
		        display: inline-block;
		        vertical-align: middle;
		    }
		}
	}
</style>