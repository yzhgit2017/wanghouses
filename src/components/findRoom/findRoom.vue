<template>
	<div class="find-room-wrapper">
		<p class="header">帮我找房</p>
		<div class="banner"><img src="static/images/xbg@3x.png"></div>
		<ul class="conditions-list">
			<li>
				<label>当前位置</label>
				<span @click="popupShow1()">{{areaText}}<i class="iconfont icon-arrow-down-new"></i></span>
			</li>
			<li>
				<label>户型</label>
				<span @click="popupShow2()">{{houseTypeText}}<i class="iconfont icon-arrow-down-new"></i></span>
			</li>
			<li>
				<label>购房预算</label>
				<span @click="popupShow3()">{{budgetText}}<i class="iconfont icon-arrow-down-new"></i></span>
			</li>
			<li>
				<label>楼盘特色</label>
				<span @click="popupShow4()">{{propertyFeatures}}<i class="iconfont icon-arrow-down-new"></i></span>
			</li>
		</ul>
		<div class="send-btn-wrapper">
			<div class="send-btn">发送给置业管家</div>
		</div>
		<mt-popup v-model="popupVisible1" position="bottom" class="popup-visible">
	        <div class="popup-header">
	       	    <p>位置区域</p>
	       	    <span @click="popupHide1()" class="close">取消</span>
	        </div>
	        <ul class="popup-list">
	        	<li v-for="(item,index) in areaList" @click="popupChoice1(item.text)">{{item.text}}</li>
	        </ul>
	    </mt-popup>
	    <mt-popup v-model="popupVisible2" position="bottom" class="popup-visible">
	        <div class="popup-header">
	       	    <p>户型</p>
	       	    <span @click="popupHide2()" class="close">取消</span>
	        </div>
	        <ul class="popup-list">
	        	<li v-for="(item,index) in houseTypeList" @click="popupChoice2(item.text)">{{item.text}}</li>
	        </ul>
	    </mt-popup>
	    <mt-popup v-model="popupVisible3" position="bottom" class="popup-visible">
	        <div class="popup-header">
	       	    <p>户型</p>
	       	    <span @click="popupHide3()" class="close">取消</span>
	        </div>
	        <ul class="popup-list">
	        	<li v-for="(item,index) in budgetList" @click="popupChoice3(item.text)">{{item.text}}</li>
	        </ul>
	    </mt-popup>
	    <mt-popup v-model="popupVisible4" position="bottom" class="popup-visible">
	        <div class="popup-header">
	       	    <p>户型</p>
	       	    <span @click="popupHide4()" class="close">取消</span>
	        </div>
	        <ul class="popup-list">
	        	<li v-for="(item,index) in featuresList" @click="popupChoice4(item.text)">{{item.text}}</li>
	        </ul>
	    </mt-popup>
	</div>
</template>

<script>
	export default {
		name: 'findRoom',
		data(){
			return {
				popupVisible1: false,
				popupVisible2: false,
				popupVisible3: false,
				popupVisible4: false,
				areaText: '全济南',
				houseTypeText: '一室',
				budgetText: '不限',
				propertyFeatures: '大型社区',
				areaList:[
					{
						id:1,
						text:'历下区',
					},
					{
						id:2,
						text:'天桥区',
					},
					{
						id:3,
						text:'高新区',
					},
				],
				houseTypeList:[
					{
						id:1,
						text:'一室',
					},
					{
						id:2,
						text:'二室',
					},
					{
						id:3,
						text:'三室',
					},
					{
						id:4,
						text:'四室',
					},
					{
						id:5,
						text:'五室以上',
					},
				],
				budgetList:[
					{
						id:1,
						text:'70万以下',
					},
					{
						id:2,
						text:'70-100万',
					},
					{
						id:3,
						text:'100-150万',
					},
					{
						id:4,
						text:'150-200万',
					},
					{
						id:5,
						text:'200-250万',
					},
				],
				featuresList:[
					{
						id:1,
						text:'大型社区',
					},
					{
						id:2,
						text:'大型商场',
					},
					{
						id:3,
						text:'养老',
					},
					{
						id:4,
						text:'婚房/刚需',
					},
					{
						id:5,
						text:'低首付',
					},
				]
			}
		},
		methods:{
			popupShow1(){
				this.popupVisible1 = true;
			},
			popupHide1(){
				this.popupVisible1 = false;
			},
			popupChoice1(text){
				this.popupVisible1 = false;
				this.areaText = text;
			},
			popupShow2(){
				this.popupVisible2 = true;
			},
			popupHide2(){
				this.popupVisible2 = false;
			},
			popupChoice2(text){
				this.popupVisible2 = false;
				this.houseTypeText = text;
			},
			popupShow3(){
				this.popupVisible3 = true;
			},
			popupHide3(){
				this.popupVisible3 = false;
			},
			popupChoice3(text){
				this.popupVisible3 = false;
				this.budgetText = text;
			},
			popupShow4(){
				this.popupVisible4 = true;
			},
			popupHide4(){
				this.popupVisible4 = false;
			},
			popupChoice4(text){
				this.popupVisible4 = false;
				this.propertyFeatures = text;
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.find-room-wrapper{
		font-size: .6rem;
		.header{
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			background-color: #fff;
			color: $mainFontSizeColor;
			font-size: .7rem;
		}
		.banner{
			img{
				width: 100%;
				display: block;
			}
		}
		.conditions-list{
			@include pad;
			li{
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				font-size: .65rem;
				-webkit-box-align: center;
			    -ms-flex-align: center;
			    -webkit-align-items: center;
			    align-items: center;
			    height: 2rem;
			    border-bottom: 1px solid #ececec;
				label{
					-webkit-box-flex: 0.3;
				    -ms-flex: 0.3;
				    flex: 0.3;
				    font-size: .7rem;
				    height: 1.2rem;
				    line-height: 1.2rem;
				    padding-right: .5rem;
				    border-right: 1px solid #ececec;
				    text-align: right;
				    color: $mainColor;
				}
				span{
					-webkit-box-flex: 1;
				    -ms-flex: 1;
				    flex: 1;
				    font-size: .7rem;
				    height: 1.2rem;
				    line-height: 1.2rem;
				    padding-left: .5rem;
				    position: relative;
				    color: #999;
				    i{
				    	vertical-align: middle;
				    	position: absolute;
				    	right: 0;
				    }
				}
			}
		}
		.popup-visible{
			width: 100%;
			.popup-header{
				height: 2rem;
				line-height: 2rem;
				text-align: center;
				background-color: #eeeeee;
				color: $mainFontSizeColor;
				font-size: .7rem;
				padding: 0 .75rem;
				.close{
					position: absolute;
					right: .75rem;
					color: $mainColor;
					top: 0;

				}
			}
			.popup-list{
				padding: 0 .75rem;
				margin-top: -1px;
				li{
					height: 2rem;
					line-height: 2rem;
					border-top: 1px solid #ececec;
			    }

			}
		}
		.send-btn-wrapper{
			@include pad;
			background: none;
			.send-btn{
				width: 100%;
				height: 1.5rem;
				background-color: $mainColor;
				color: #fff;
				font-size: .65rem;
				// @include flex(center,center);
				border-radius: .75rem;
				text-align: center;
				line-height: 1.5rem;
			}
		}
	}
</style>