<template>
	<div class="container">
		<my-header buildingsListHeader="true"></my-header>
		<section class="sort_container">
			<div class="sort_item">
				<div class="sort_item_container" @click="chooseType('area')">
					<div class="sort_item_border">
					    <span>区域</span>
		    			<i class="iconfont icon-arrow-down-new"></i>
					</div>
				</div>
				<transition name="showlist">
					<section v-show="sortBy == 'area'" class="category_container sort_detail_type">
						<section class="category_left">
						    <ul>
						    	<li class="category_li" v-for="(item,index) in areaFilterItemArray" @click="getAreaList(index,item.id)" v-bind:class="{'active':areaItemIndex==index}">
						    		<section>
										<span>{{item.name}}</span>
									</section>
									<section>
										<i class="iconfont icon-arrow1"></i>
									</section>									
						    	</li>						    	
						    </ul>
						</section>
						<section class="category_center">
							<ul>
								<li class="category_li" @click="getAllAreaChild()" v-bind:class="{'active':areaIndex==0}">
						            <section>
						                <span>不限</span>
						            </section>
								</li>
						    	<li class="category_li" v-bind:class="{'active':areaIndex==index+1}" v-for="(item,index) in areaFilterDetailArray" @click="getAreaChild(index+1,item.name,item.id)">
						    		<section>
										<span>{{item.name}}</span>
									</section>
									<section>
	    								<i class="iconfont icon-arrow1"></i>
									</section>
						    	</li>
						    </ul>
						</section>						
						<section class="category_right">
							<ul>
								<li class="category_li" @click="getAllAreaBuildings()">								    
									<span>不限</span>									
								</li>
								<li class="category_li" v-for="(item,index) in districtList" @click="filterAreaBuildings(item.name)">
									<span>{{item.name}}</span>
								</li>
							</ul>
						</section>
					</section>
				</transition>
			</div>
			<div class="sort_item">
				<div class="sort_item_container" @click="chooseType('price')">
					<div class="sort_item_border">
					    <span>价格</span>
		    			<i class="iconfont icon-arrow-down-new"></i>
					</div>
				</div>
				<transition name="showlist">
					<section v-show="sortBy == 'price'" class="category_container sort_detail_type">
						<section class="category_left price_left">
						    <ul>
						    	<li class="category_li" v-for="(item,index) in priceFilterItemArray" @click="getPriceList(index)" v-bind:class="{'active':priceItemIndex==index}">
						    		<section>
										<span>{{item}}</span>
									</section>
									<section>
										<i class="iconfont icon-arrow1"></i>
									</section>									
						    	</li>						    	
						    </ul>
						</section>	
						<section class="category_right">
						    <ul>
						        <li class="category_li">
						            <section>
									    <span>不限</span>
									</section>
								</li>
						    	<li class="category_li" v-for="(item,index) in priceList" @click="filterPriceList(index,item.option)">
						    		<section>
										<span>{{item.text}}</span>
									</section>
									
						    	</li>
						    </ul>
						</section>
					</section>
				</transition>
			</div>
			<div class="sort_item">
				<div class="sort_item_container" @click="chooseType('room')">
					<div class="sort_item_border">
					    <span>户型</span>
		    			<i class="iconfont icon-arrow-down-new"></i>
					</div>
				</div>
				<transition name="showlist">
					<section v-show="sortBy == 'room'" class="category_container sort_detail_type">
						<section class="category_right">
						    <ul>
						        <li class="category_li">
						            <section>
						                <span>不限</span>
						            </section>
								</li>
						    	<li class="category_li" v-for="(item,index) in roomList" @click="getRoomList(index,item.option)">
						    		<section>
										<span>{{item.text}}</span>
									</section>									
						    	</li>
						    </ul>
						</section>
					</section>
				</transition>
			</div>
			<div class="sort_item">
				<div class="sort_item_container" @click="chooseType('more')">
					<div class="sort_item_border" style="border-right:0px;">
					    <span>更多</span>
		    			<i class="iconfont icon-arrow-down-new"></i>
					</div>
				</div>
				<transition name="showlist">
					<section v-show="sortBy == 'more'" class="category_container sort_detail_type">
						<section class="category_more">
						    <ul>
						        <p>类型</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsTypeList" v-bind:class="{'active':buildingType==item.option}" @click="getBuilingsType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>活动</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsActiveList" v-bind:class="{'active':activeType==item.option}" @click="getActiveType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>面积</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsAreaList" v-bind:class="{'active':areaType==item.option}" @click="getAreaType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>特色</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsFeatureList" v-bind:class="{'active':featureType==item.option}" @click="getFeatureType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>排序</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsSortList" v-bind:class="{'active':sortType==item.option}" @click="getSortType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>装修状况</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsDecorationList" v-bind:class="{'active':decorationType==item.option}" @click="getDecorationType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>性质</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsNatureList" v-bind:class="{'active':natureType==item.option}" @click="getNatureType(item.option)">{{item.text}}</li>
						    </ul>
						    <ul>
						        <p>性质</p>
						    	<li class="category_more_li" v-for="(item,index) in buildingsOpenList" v-bind:class="{'active':openType==item.option}" @click="getOpenType(item.option)">{{item.text}}</li>
						    </ul>
						    <div class="btn_wrapper">
						    	<div class="clear_btn" @click="clearCondition()">清空条件</div>
						    	<div class="confirm_btn" @click="confirm()">确定</div>
						    </div>
						</section>
					</section>
				</transition>
			</div>
		</section>
		<transition name="showcover">
    		<div class="back_cover" v-show="sortBy"></div>
    	</transition>
    	<buildings-list :paramAreaSort="areaLeftId" :paramArea="areaCenterName" :paramStreet="areaName" :paramPriceOption="priceOption" :paramBuXian="buxian"></buildings-list>
	</div>
</template>

<script>
    import myHeader from '@/components/public/header'
    import buildingsList from './test'
    import {mapGetters} from 'vuex'
    import qs from 'qs'
	export default {
		name: 'newHousesIndex',
		data(){
			return {
				areaFilterItemArray: [
					{
						id: '3',
						name: '区域'
					},
					{
						id: '2',
						name: '学校'
					},
					{
						id: '1',
						name: '商圈'
					}
				],
				priceFilterItemArray: ['单价','总价'],
				areaFilterDetailArray: [],				
				sortBy: '',				
				areaItemIndex: 0,
				priceItemIndex: 0,
				buildingType:null,
				activeType:null,
				areaType:null,
				featureType:null,
				sortType:null,
				decorationType:null,
				natureType:null,
				openType:null,
				// 修改
				areaName: null,
				priceOption: null,
				areaIndex: 0,
				districtList:[],
				areaLeftId: '3',
				areaCenterId: null,
				areaRightId: null,
				areaCenterName: '不限',
				buxian_id: 0,
				buxian: false,
				// 修改
				priceList: [
					{
				    	'option': 1,
				    	'text': '3000元/㎡以下' 
				    },
				    {
				    	'option': 2,
				    	'text': '3000-4000元/㎡' 
				    },
				    {
				    	'option': 3,
				    	'text': '4000-5000元/㎡' 
				    },
				    {
				    	'option': 4,
				    	'text': '5000-6000元/㎡' 
				    },
				    {
				    	'option': 5,
				    	'text': '6000元/㎡以上' 
				    },
				],
				priceItemList:[
				    [
					    {
					    	'option': 1,
					    	'text': '3000元/㎡以下' 
					    },
					    {
					    	'option': 2,
					    	'text': '3000-4000元/㎡' 
					    },
					    {
					    	'option': 3,
					    	'text': '4000-5000元/㎡' 
					    },
					    {
					    	'option': 4,
					    	'text': '5000-6000元/㎡' 
					    },
					    {
					    	'option': 5,
					    	'text': '6000元/㎡以上' 
					    },
					],
					[
					    {
					    	'option': 1,
					    	'text': '80万以下' 
					    },
					    {
					    	'option': 2,
					    	'text': '80-100万' 
					    },
					    {
					    	'option': 3,
					    	'text': '100-150万' 
					    },
					    {
					    	'option': 4,
					    	'text': '150-200万' 
					    },
					    {
					    	'option': 5,
					    	'text': '200万以上' 
					    },
					],
				],
				roomList:[
                    {
				    	'option': 1,
				    	'text': '一室' 
				    },
				    {
				    	'option': 2,
				    	'text': '二室' 
				    },
				    {
				    	'option': 3,
				    	'text': '三室' 
				    },
				    {
				    	'option': 4,
				    	'text': '四室' 
				    },
				    {
				    	'option': 5,
				    	'text': '五室' 
				    },
				    {
				    	'option': 6,
				    	'text': '五室以上' 
				    },
				],
				buildingsTypeList:[
					 {
				    	'option': 1,
				    	'text': '普通住宅' 
				    },
				    {
				    	'option': 2,
				    	'text': '厂房' 
				    },
				    {
				    	'option': 3,
				    	'text': '别墅' 
				    },
				    {
				    	'option': 4,
				    	'text': '商住楼' 
				    },
				    {
				    	'option': 5,
				    	'text': '仓库' 
				    },
				    {
				    	'option': 6,
				    	'text': '写字楼' 
				    },
				    {
				    	'option': 7,
				    	'text': '商铺' 
				    },
				    {
				    	'option': 8,
				    	'text': '普通公寓' 
				    },
				    {
				    	'option': 9,
				    	'text': 'loft' 
				    },

				],
				buildingsActiveList:[
					{
				    	'option': 1,
				    	'text': '优惠楼盘' 
				    },
				    {
				    	'option': 2,
				    	'text': '优惠团购' 
				    },
				    {
				    	'option': 3,
				    	'text': '特价房' 
				    },
				],
				buildingsAreaList:[
				    {
				    	'option': 1,
				    	'text': '50㎡以下' 
				    },
				    {
				    	'option': 2,
				    	'text': '50-70㎡' 
				    },
				    {
				    	'option': 3,
				    	'text': '70-90㎡' 
				    },
				    {
				    	'option': 4,
				    	'text': '90-110㎡' 
				    },
				    {
				    	'option': 5,
				    	'text': '110-130㎡' 
				    },
				    {
				    	'option': 6,
				    	'text': '130-150㎡' 
				    },
				    {
				    	'option': 7,
				    	'text': '150-200㎡' 
				    },
				    {
				    	'option': 8,
				    	'text': '200㎡以上' 
				    },
				],
				buildingsFeatureList:[
					{
				    	'option': 1,
				    	'text': '小户型' 
				    },
				    {
				    	'option': 2,
				    	'text': '现房' 
				    },
				    {
				    	'option': 3,
				    	'text': '品牌地产' 
				    },
				    {
				    	'option': 4,
				    	'text': '不限购' 
				    },
				    {
				    	'option': 5,
				    	'text': '花园洋房' 
				    },
				    {
				    	'option': 6,
				    	'text': '养老旅游' 
				    },
				    {
				    	'option': 7,
				    	'text': '视频看房' 
				    },
				],
				buildingsSortList:[
					{
				    	'option': 1,
				    	'text': '综合排序' 
				    },
				    {
				    	'option': 2,
				    	'text': '价格顺序' 
				    },
				    {
				    	'option': 3,
				    	'text': '价格倒序' 
				    },
				    {
				    	'option': 4,
				    	'text': '开盘顺序' 
				    },
				    {
				    	'option': 5,
				    	'text': '开盘倒序' 
				    },
				    {
				    	'option': 6,
				    	'text': '入住顺序' 
				    },
				    {
				    	'option': 7,
				    	'text': '入住倒序' 
				    },
				    {
				    	'option': 8,
				    	'text': '评分' 
				    },
				    {
				    	'option': 9,
				    	'text': '点评数' 
				    },
				],
				buildingsDecorationList:[
					{
				    	'option': 1,
				    	'text': '毛坯' 
				    },
				    {
				    	'option': 2,
				    	'text': '中等装修' 
				    },
				    {
				    	'option': 3,
				    	'text': '精装修' 
				    },
				],
				buildingsNatureList:[
					{
				    	'option': 1,
				    	'text': '出租' 
				    },
				    {
				    	'option': 2,
				    	'text': '出售' 
				    },
				],
				buildingsOpenList:[
					{
				    	'option': 1,
				    	'text': '已开盘' 
				    },
				    {
				    	'option': 2,
				    	'text': '本月开盘' 
				    },
				    {
				    	'option': 3,
				    	'text': '下月开盘' 
				    },
				    {
				    	'option': 4,
				    	'text': '三个月内' 
				    },
				    {
				    	'option': 5,
				    	'text': '六个月内' 
				    },
				],
				moreChoice:{
					'buildingType':null,
					'activeType':null,
					'areaType':null,
					'featureType':null,
					'sortType':null,
					'decorationType':null,
					'natureType':null,
					'openType':null,
				},
			}
		},
		computed: {
	        ...mapGetters({
	            updatedCityName: 'updatedCityName'
	        }),
	    },
		mounted(){
	    	this.init();
	    },
	    components:{myHeader,buildingsList},
	    methods:{
	    	init(){
	    		let cityName = this.updatedCityName;
	    		console.log(cityName)
	    		this.$http.post('http://wangwu.lami360.com/Jiekou/area',qs.stringify({city_name: cityName})).then(response => {
				    console.log(response.data)				  
				    for (var i = 0; i < response.data.length; i++) {
				    	this.areaFilterDetailArray.push(response.data[i]);
				    }
				    this.areaCenterId = this.areaFilterDetailArray[0].name;				
			    })
	    		this.$http.post('http://wangwu.lami360.com/Jiekou/buxian',qs.stringify({city_name: cityName, types_id: '3',res: '0'})).then(response => {
					    console.log(response.data)			  
					    for (var i = 0; i < response.data.length; i++) {
					    	this.districtList.push(response.data[i]);
					    }					
				    })	

			    
	    	},
	    	chooseType(type){
	    		if (this.sortBy !== type) {
	    			this.sortBy = type;
	    		}else{
	    			this.sortBy = '';
	    		}
	    	},
	    	getAreaList(index,id){
	    		this.areaItemIndex = index;
	    		let cityName = this.updatedCityName;	    		
	    		this.areaLeftId = id;
	    		this.$http.post('http://wangwu.lami360.com/Jiekou/area',qs.stringify({city_name: cityName})).then(response => {
				    console.log(response.data)
				    this.areaFilterDetailArray = [];
				    for (var i = 0; i < response.data.length; i++) {
				    	this.areaFilterDetailArray.push(response.data[i]);				    	
				    }												
			    })			   
			    if(this.areaCenterId == 0){
			    	this.$http.post('http://wangwu.lami360.com/Jiekou/buxian',qs.stringify({city_name: cityName, types_id: this.areaLeftId,res: '0'})).then(response => {
					    console.log(response.data)
					    this.districtList = [];			  
					    for (var i = 0; i < response.data.length; i++) {
					    	this.districtList.push(response.data[i]);
					    }					
				    })
			    }else{
			    	this.$http.post('http://wangwu.lami360.com/Jiekou/jiedao',qs.stringify({types_id: id,area_id:this.areaCenterId})).then(response => {
					    console.log(response.data)
					    this.districtList = [];			  
					    for (var i = 0; i < response.data.length; i++) {
					    	this.districtList.push(response.data[i]);
					    }					
				    })
			    }
			    this.buxian = false;

	    	},
	    	// 修改
	    	filterAreaBuildings(name){
	    		this.areaName = name;
	    		this.buxian = false;	    		
	    	},
	    	filterPriceList(index,option){
	    		this.priceOption = option;
	    	},
	    	getAllAreaChild(){
	    		this.areaIndex = 0;
	    		this.areaCenterId = 0;
	    		this.areaCenterName = '不限';
	    		this.$http.post('http://wangwu.lami360.com/Jiekou/buxian',qs.stringify({city_name: this.updatedCityName, types_id: this.areaLeftId ,res: '0'})).then(response => {
					    console.log(response.data)
					    this.districtList = [];				  
					    for (var i = 0; i < response.data.length; i++) {
					    	this.districtList.push(response.data[i]);
					    }					
				    })
	    		this.buxian = false;
	    	},
	    	getAreaChild(index,name,id){
	    		this.areaIndex = index;
	    		this.areaCenterName = name;
	    		this.areaCenterId = id;
	    		this.$http.post('http://wangwu.lami360.com/Jiekou/jiedao',qs.stringify({types_id: this.areaLeftId,area_id:id})).then(response => {
					    console.log(response.data)
					    this.districtList = [];				  
					    for (var i = 0; i < response.data.length; i++) {
					    	this.districtList.push(response.data[i]);
					    }					
				    })
	    		this.buxian = false;
	    	},
	    	getAllAreaBuildings(){
	    		this.buxian_id++;
	    		this.areaName = '不限_' + this.buxian_id;
	    		this.buxian = true;
	    	},
	    	// 修改
	    	getPriceList(index){
	    		this.priceItemIndex = index;
	    		this.priceList = this.priceItemList[index];
	    	},
	    	getRoomList(index,option){
                this.room_id = option;
                this.sortBy = '';
	    	},
	    	getBuilingsType(option){
                this.buildingType = option;
	    	},
	    	getActiveType(option){
	    		this.activeType = option;
	    	},
	    	getAreaType(option){
	    		this.areaType = option;
	    	},
	    	getFeatureType(option){
	    		this.featureType = option;
	    	},
	    	getSortType(option){
	    		this.sortType = option;
	    	},
	    	getDecorationType(option){
	    		this.decorationType = option;
	    	},
	    	getNatureType(option){
                this.natureType = option;
	    	},
	    	getOpenType(option){
 				this.openType = option;
	    	},
	    	clearCondition(){
	    		this.buildingType = null;
				this.activeType = null;
				this.areaType = null;
				this.featureType = null;
				this.sortType = null;
				this.decorationType = null;
				this.natureType = null;
				this.openType = null;
	    	},
	    	confirm(){
                this.moreChoice.buildingType = this.buildingType;
                this.moreChoice.activeType = this.activeType;
                this.moreChoice.areaType = this.areaType;
                this.moreChoice.featureType = this.featureType;
                this.moreChoice.sortType = this.sortType;
                this.moreChoice.decorationType = this.decorationType;
                this.moreChoice.natureType = this.natureType;
                this.moreChoice.openType = this.openType;
	    	}
	    },
	   
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.container{
		.sort_container{
			background-color: #fff;		   		    
		    width: 100%;		    
		    box-sizing: border-box;
		    position: relative;
		    border-bottom: 1px solid #ececec;
		    border-top: 1px solid #ececec;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;		  
		    box-sizing: border-box;
		    position: fixed;
		    top: 2rem;
		    z-index: 12;	  
		    .sort_item{
		    	font-size: .6rem;
			    color: #565c67;
			    width: 25%;
			    height: 1.6rem;
			    text-align: center;
			    line-height: 1rem;
			    
			    .sort_item_container{
			    	width: 100%;
				    height: 100%;				    
				    background-color: #fff;
				    box-sizing: border-box;
				    padding-top: .3rem;	
				    z-index: 12;			   
				    .sort_item_border{
				    	height: 1rem;
                        border-right: 1px solid #ececec;
                        i{
                        	vertical-align: middle;
                        }
				    }
			    }
			 //    .showlist-enter-active, .showlist-leave-active {
				// 	transition: all .3s;
				// 	transform: translateY(0);
				// }
				// .showlist-enter, .showlist-leave-active {
				// 	opacity: 0;
				// 	transform: translateY(-100%);
				// }
			    .sort_detail_type{
			    	z-index: 11;
			    	width: 100%;
				    position: fixed;
				    display: -webkit-box;
				    display: -ms-flexbox;
				    display: flex;
				    top: 3.6rem;
				    left: 0;				    
				    background-color: #fff;
				    overflow-y: scroll;
				    height: 16rem;
				    border-top: 1px solid #ececec;
				    .category_left{
						-webkit-box-flex: 1;
					    -ms-flex: 1;
					    flex: 1;
					    height: 16rem;
					    overflow-y: auto;
					    border-right: 1px solid #ececec;
					    .category_li.active{
					    	color: #2bddbe;
					    }
					    .category_li.active:before{
							content: '';
						    position: absolute;
						    width: 2px;
						    height: .8rem;
						    background: #2bddbe;
						    left: 0;
						    top: 50%;
						    margin-top: -.4rem;
						}
					}
					.price_left{
						-webkit-box-flex: 0.5;
					    -ms-flex: 0.5;
					    flex: 0.5;
					}
					.category_center{
						-webkit-box-flex: 1;
					    -ms-flex: 1;
					    flex: 1;
					    height: 16rem;
					    overflow-y: auto;
					    border-right: 1px solid #ececec;
					    .category_li.active{
					    	color: #2bddbe;
					    }
					    .category_li.active:before{
							content: '';
						    position: absolute;
						    width: 2px;
						    height: .8rem;
						    background: #2bddbe;
						    left: 0;
						    top: 50%;
						    margin-top: -.4rem;
						}
					}
					.category_right{
						-webkit-box-flex: 1;
					    -ms-flex: 1;
					    flex: 1;
					    /*padding-left: .5rem;*/
					    height: 16rem;
					    overflow-y: auto;
					    .category_li{
					    	section{
					    		width: 100%;
					    	}
					    	text-align: center;
					    }
					}
					.category_li{
						box-sizing: border-box;
						padding: 0 .5rem;
					    height: 1.8rem;
					    line-height: 1.8rem;
					    border-bottom: 1px solid #ececec;
					    position: relative;
					    @include flex(space-between,center);
					    i{
					    	font-size: .8rem;
					    }
					}
					.category_more{
						width: 100%;
						ul{
							overflow: hidden;
							p{
								text-align: left;
								margin-bottom: 0.4rem;
								margin-top: 0.4rem;
								text-indent: 2.4%;
							}
							.category_more_li{
								float: left;
						        width: 22%;
						        height: 1.3rem;
						        line-height: 1.3rem;
						        box-sizing: border-box;
						        margin-left: 2.4%;
						        border: 1px solid #ececec;
						        border-radius: 3px;
						        margin-bottom: 0.4rem;
							}
							.category_more_li.active{
								border: 1px solid #2bddbe;
								color: #2bddbe;
							}
						}
						.btn_wrapper{
							overflow: hidden;
							margin-bottom: 0.4rem;
							.clear_btn{
								float: right;
								width: 40%;
								margin-right: 2.4%;
								height: 1.5rem;
								line-height: 1.5rem;
								box-sizing: border-box;
								border: 1px solid #ececec;
						        border-radius: 3px;
						        color: #999;
							}
							.confirm_btn{
								float: left;
								width: 50%;
								margin-left: 2.4%;
								height: 1.5rem;
								line-height: 1.5rem;
						        border-radius: 3px;
						        color: #fff;
						        background-color: #2bddbe;
							}
						}
					}
			    }			    
		    }
		}
		.back_cover{
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: 10;
			background-color: rgba(0,0,0,0.3);
		}
	}
</style>