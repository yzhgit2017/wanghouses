<template>
	<div class="property-comparison-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>楼盘对比</p>
			<div class="take-place"></div>
		</header>
		<div class="search-wrapper">
			<div class="search-container">
				<input type="search" name="" placeholder="请输入楼盘名称">
				<span class="comparison-btn" @click="addfuc()">对比</span>
			</div>
		</div>
		<table>
			<tr>
				<th>楼盘名称</th>
				<td v-for="(item,index) in ca">
					<img :src="item.imgSrc">
					<p>{{item.name}}</p>
					<span class="del" @click="deletefuc(index)" v-show="item.iconShow"><i class="iconfont icon-shanchu"></i></span>
				</td>
			</tr>
			<tr>
				<th>均价</th>
				<td v-for="(item,index) in ca">{{item.averagePrice}}</td>
			</tr>
			<tr><th colspan="3" class="title">基本信息</th></tr>
			<tr>
				<th>项目位置</th>
				<td v-for="(item,index) in ca">{{item.address}}<router-link to="" v-show="item.iconShow">查看地图</router-link></td>
			</tr>
			<tr>
				<th>项目特色</th>
				<td v-for="(item,index) in ca">{{item.feature}}</td>
			</tr>
			<tr>
				<th>物业类别</th>
				<td v-for="(item,index) in ca">{{item.type}}</td>
			</tr>
			<tr>
				<th>装修状况</th>
				<td v-for="(item,index) in ca">{{item.decoration}}</td>
			</tr>
			<tr>
				<th>产权年限</th>
				<td v-for="(item,index) in ca">{{item.propertyRight}}</td>
			</tr>
			<tr>
				<th>开发商</th>
				<td v-for="(item,index) in ca">{{item.developer}}</td>
			</tr>
			<tr><th colspan="3" class="title">销售情况</th></tr>
			<tr>
				<th>销售状态</th>
				<td v-for="(item,index) in ca">{{item.salesStatus}}</td>
			</tr>
			<tr>
				<th>开盘时间</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
			<tr>
				<th>交房时间</th>
				<td v-for="(item,index) in ca">{{item.takeHousesTime}}</td>
			</tr>
			<tr>
				<th>售楼地址</th>
				<td v-for="(item,index) in ca">{{item.sellAddress}}</td>
			</tr>
			<tr><th colspan="3" class="title">交通信息</th></tr>
			<tr>
				<th>轨道交通</th>
				<td v-for="(item,index) in ca">{{item.salesStatus}}</td>
			</tr>
			<tr>
				<th>公交线路</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
			<tr><th colspan="3" class="title">规划信息</th></tr>
			<tr>
				<th>占地面积</th>
				<td v-for="(item,index) in ca">{{item.salesStatus}}</td>
			</tr>
			<tr>
				<th>建筑面积</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
			<tr>
				<th>容积率</th>
				<td v-for="(item,index) in ca">{{item.salesStatus}}</td>
			</tr>
			<tr>
				<th>绿化</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
			<tr>
				<th>楼栋总数</th>
				<td v-for="(item,index) in ca">{{item.salesStatus}}</td>
			</tr>
			<tr>
				<th>户数</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
			<tr>
				<th>停车位</th>
				<td v-for="(item,index) in ca">{{item.salesStatus}}</td>
			</tr>
			<tr>
				<th>物业公司</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
			<tr>
				<th>物业费</th>
				<td v-for="(item,index) in ca">{{item.openTime}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'findRoom',
		data(){
			return {
				ca:[
					{
						imgSrc: 'static/images/loupantux.png',
						name: '新城香溢澜庭11',
						averagePrice: '22000元/㎡',
						address: '山东省济南市明湖广场2-924',
						iconShow: true,
						feature: '公园地产',
						type: '别墅',
						decoration: '毛坯',
						propertyRight: '70年',
						developer: '济南盛唐置业有限公司',
						salesStatus: '在售',
						openTime: '2017-05-02',
						takeHousesTime: '2017-05-02',
						sellAddress: '经十路88号',
					},
					{
						imgSrc: 'static/images/loupantux.png',
						name: '新城香溢澜庭22',
						averagePrice: '22000元/㎡',
						address: '山东省济南市明湖广场2-924',
						iconShow: true,
						feature: '公园地产',
						type: '写字楼',
						decoration: '精装',
						propertyRight: '70年',
						developer: '山东地平置业有限公司',
						salesStatus: '售完',
						openTime: '2017-05-02',
						takeHousesTime: '2017-05-02',
						sellAddress: '经十路88号',
					},
				],
				nullObj:{
					imgSrc: null,
					name: null,
					averagePrice: null,
					address: null,
					iconShow: false,
					feature: null,
					type: null,
					decoration: null,
					propertyRight: null,
					developer: null,
					salesStatus: null,
					openTime: null,
					takeHousesTime: null,
					sellAddress: null,
				},
				testObj:{
					imgSrc: 'static/images/loupantux.png',
					name: '新城香溢澜庭33',
					averagePrice: '22000元/㎡',
					address: '山东省济南市明湖广场2-924',
					iconShow: true,
					feature: '公园地产',
					type: '商铺',
					decoration: '简装',
					propertyRight: '70年',
					developer: '山东地平置业有限公司',
					salesStatus: '在售',
					openTime: '2017-05-02',
					takeHousesTime: '2017-05-02',
					sellAddress: '经十路88号',
				},

			}
		},
		methods:{
			deletefuc(index){
				this.ca.splice(index,1,this.nullObj);
				console.log(this.ca);
			},
			addfuc(){
				if (!this.ca[0].iconShow) {
					this.ca.splice(0,1,this.testObj);
				}else if(!this.ca[1].iconShow){
					this.ca.splice(1,1,this.testObj);
				}else{
					return;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.property-comparison-wrapper{		
		width: 100%;
		height: 100%;
		font-size: .6rem;
		header{
			height: 2rem;
			border-bottom: 1px solid #ececec;
			@include flex(space-between,center);			
			padding: 0 .75rem;
			background-color: #fff;
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
		.search-wrapper{
			@include pad;
			.search-container{
				width: 100%;
				height: 1.5rem;
				position: relative;
				input{
					display: inline-block;
					width: 100%;
					height: 1.5rem;
					border: none;
					border: 1px solid $mainColor;
				    border-radius: .75rem;				    
				    padding-left: 1rem;
				}
				.comparison-btn{
					position: absolute;
					right: .2rem;
					height: 1.1rem;
					width: 3rem;
					border-radius: .65rem;
					background-color: $mainColor;
					color: #fff;
					top: .2rem;
					@include flex(center,center);
				}
			}
		}
		table{  
            border-collapse: collapse;  
            border: none;  
            width: 100%;
            margin-top: .5rem;
            td,th{  
	            border: solid #ececec 1px;
	            background-color: #fff;
	        }
	        th{
	        	width: 20%;
	        	padding: .5rem 0;
	        	color: #999;
	        }
	        td{
	        	width: 40%;
	        	padding: .5rem 0;
	        	text-align: center;
	        	position: relative;
	        	img{
	        		width: 80%;
	        		border: none;
	        	}
	        	a{
	        		color: $mainColor;
	        	}
	        	.del{
	        		position: absolute;
	        		width: 1rem;
	        		height: 1rem;
	        		line-height: 1rem;
	        		text-align: center;
	        		color: #fff;
	        		background-color: $mainColor;
	        		top: .4rem;
	        		right: .4rem;
	        		border-radius: .5rem;
	        		i{
	        			font-size: .7rem;
	        		}
	        	}
	        } 
	        .title{
	        	height: 1.5rem;
	        	line-height: 1.5rem;
	        	background-color: #fff;
	        	text-align: left;
	        	font-size: .7rem;
	        	color: $mainFontSizeColor;
	        }
        }  
        
	}
</style>