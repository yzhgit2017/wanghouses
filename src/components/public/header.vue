<template>
	<div class="header-wrapper">
		<header class="header">
			<div class="header-container" v-if="selfHomeHeader">
				<router-link to="/cityChange" class="geolocation">{{cityName}}<i class="iconfont icon-arrow-down-new"></i></router-link>
				<router-link to="" class="search"><i class="iconfont icon-sousuo-copy"></i>请输入楼盘名</router-link>
				<router-link to="" class="personal"><i class="iconfont icon-gerenzhongxin1"></i><br>我的</router-link>
			</div>
			<div class="header-container" v-if="selfBuildingsListHeader">
				<router-link to="" class="geolocation"><i class="iconfont icon-arrow"></i>返回</router-link>
				<router-link to="" class="search"><i class="iconfont icon-sousuo-copy"></i>请输入小区名称或地址</router-link>
				<router-link to="" class="map"><i class="iconfont icon-chakantiezidingwei"></i></router-link>
			</div>
			<div class="header-container details-header-wrapper" v-if="selfBuildingsDetailsHeader">
				<div>
					<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
				</div>
				<div>
					<router-link to="" class="collect"><i class="iconfont icon-shoucang"></i></router-link>
					<router-link to="" class="share"><i class="iconfont icon-fenxiang"></i></router-link>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default{
		name: 'myHeader',
		props: ['homeHeader','buildingsListHeader','buildingsDetailsHeader','paramCityName'],
		data(){
			return {
				selfHomeHeader: this.homeHeader,
				selfBuildingsListHeader: this.buildingsListHeader,
				selfBuildingsDetailsHeader: this.buildingsDetailsHeader,
				cityName: null,
			}
		},
		computed: {
	        ...mapGetters({
	            updatedCityName: 'updatedCityName'
	        }),
	    },
		mounted(){
			this.cityName = this.updatedCityName;
		},
		methods:{
			
		},
		watch:{
            paramCityName: function(){
            	this.cityName = this.paramCityName;
            }
        }
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin';
	.header-wrapper{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		.header{			
			@include wh(100%,2rem);			
			.header-container{
				padding: 0 15px;
				box-sizing: border-box;
			    background-color: #fff;
			    width: 100%;			
				height: 2rem;
				z-index: 14;
				position: fixed;
				top: 0;
				left: 0;				
				@include flex(space-between,center);
				a{
					i{
						font-size: .8rem;
					}
				}
				.geolocation{
					color: #3c3f46;
					.icon-arrow-down-new{
						vertical-align: middle;
					}
					.icon-arrow{
						vertical-align: middle;
						position: relative;
						top: -1px;
					}
				}
				.search{
					color: #999;
					@include wh(60%,1.2rem);
					border: 1px solid #ccc;
					border-radius: .6rem;
					text-align: center;
					line-height: 1.2rem;
					i{
						vertical-align: middle;
                        position: relative;
                        top: -1px;
					}
				}
				.personal{
					text-align: center;
				    width: 1.5rem;				   
				    line-height: 0.7rem;
				    color: #3c3f46;
				    i{
				    	font-size: 0.7rem;
				    }
				}
				.map{
					color: #3c3f46;
					i{
						font-size: 1rem;
					}
				}
				.back,.collect,.share{
					display: block;
					float: left;
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 0.75rem;
					background-color: rgba(0,0,0,0.3);
					line-height: 1.5rem;
					text-align: center;
					color: #fff;
				}
				.collect{
					margin-right: .5rem;
				}			
			}
			.details-header-wrapper{
				background-color: rgba(0,0,0,0);
				position: absolute;
			}			
		}
	}
</style>