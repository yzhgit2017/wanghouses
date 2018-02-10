<template>
	<div class="map-around-wrapper" id="map-around-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>周边配套</p>
			<div class="take-place"></div>
		</header>
		<div class="center" id="map-around-container"></div>
		<footer>
			<div class="swiper-container around-nav-swiper">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide" v-bind:class="{'active': !gongjiaoMarkShow}" @click="loadTransit()">
		            	<div><i class="iconfont icon-gongjiao"></i></div>
		            	<p>公交</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': !ditieMarkShow}" @click="loadditie()">
		            	<div><i class="iconfont icon-ditie"></i></div>
		            	<p>地铁</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': !xuexiaoMarkShow}" @click="loadxuexiao($event)">
		            	<div><i class="iconfont icon-xuexiao"></i></div>
		            	<p>学校</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 3}" @click="loadTransit()">
		            	<div><i class="iconfont icon-yiyuan"></i></div>
		            	<p>医院</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 4}" @click="loadTransit()">
		            	<div><i class="iconfont icon-canyin"></i></div>
		            	<p>餐饮</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 5}" @click="loadTransit()">
		            	<div><i class="iconfont icon-zhichiyinhang"></i></div>
		            	<p>银行</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 6}" @click="loadTransit()">
		            	<div><i class="iconfont icon-gouwuche1"></i></div>
		            	<p>购物</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 7}" @click="loadTransit()">
		            	<div><i class="iconfont icon-huwaixiuxi"></i></div>
		            	<p>公园</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 8}" @click="loadTransit()">
		            	<div><i class="iconfont icon-feijichang"></i></div>
		            	<p>机场</p>
		            </div>
		            <div class="swiper-slide" v-bind:class="{'active': isIndex == 9}" @click="loadTransit()">
		            	<div><i class="iconfont icon-jiayouzhan"></i></div>
		            	<p>加油站</p>
		            </div>	          
		        </div>	       
		    </div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'mapAround',
		data(){
			return {
				transit: null,
				map: null,
				isIndex: null,
				gongjiaoMark: [],
				gongjiaoMarkShow: true,
				ditieMark: [],
				ditieMarkShow: true,
				xuexiaoMark: [],
				xuexiaoMarkShow: true,
			}
		},
		mounted(){
			this.init();
			this.newSwiper();
		},
		methods:{
			init(){
				let mac = document.querySelector('#map-around-container');
				let maw = document.querySelector('#map-around-wrapper');
				let h = (document.documentElement.clientWidth / 320) * 20 * 2;
				mac.style.height = maw.clientHeight - 2 * h + 'px';
				// 地图
				this.map = new BMap.Map("map-around-container");
				this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
			},
			newSwiper: function(){
				var swiper = new Swiper('.around-nav-swiper', {			        
			        slidesPerView: 7.5,
			        freeMode: true
			    });
			},		
			loadTransit(){         
				let map = this.map;
				let booleansArray = [];
				let _this = this;
				let options = {
					onSearchComplete: function(results){
						// 判断状态是否正确
						if (local.getStatus() == BMAP_STATUS_SUCCESS){
							let s = [];
							let b = [];
							let a = [];
							for (var i = 0; i < results.getCurrentNumPois(); i ++){
								s.push(results.getPoi(i).title + ", " + results.getPoi(i).point.lat);
								let myIcon = new BMap.Icon("static/images/mapAround/gongjiao.png", new BMap.Size(48,48));
								let pt = new BMap.Point(results.getPoi(i).point.lng, results.getPoi(i).point.lat);
								let marker = new BMap.Marker(pt,{icon:myIcon});		
								// 创建文字标签
								let opts = {
								    position : results.getPoi(i).point,    // 指定文本标注所在的地理位置
								    offset   : new BMap.Size(-57,0)    // 设置文本偏移量
								}
								
								let label = new BMap.Label('<div class="label-container"><p>'+ results.getPoi(i).title +'</p><p>'+ results.getPoi(i).address +'</p><p><a id="godes_'+ i +'" class="godes">查看详情>></a></p></div>', opts);  // 创建文本标注对象
								label.setStyle({
									height: "auto",								
									border: 'none',									
									whiteSpace: 'normal'
								});
								b.push(label)
								a.push(marker)
								_this.gongjiaoMark.push(marker)
								map.addOverlay(marker);
								marker.setLabel(label);
								label.hide();
								let aa = true;
								booleansArray.push(aa);                            
							}
							// var bml = document.querySelectorAll(".BMapLabel");
							// for (let i = 0; i < bml.length; i++) {
							// 	bml[i].style.top = '-91px';
							// }
							if(_this.gongjiaoMark.length == 0){
								alert('没有您想要的结果');
								return;
							}
							for (let i = 0; i < a.length; i++) {
								// a[i].onclick = (i => {
								// 	return (e) => {
								// 		e = e.stopPropagation || new Event('click');
								// 		e.stopPropagation();
								// 		alert(i);
								// 	};
								// })(i);
								a[i].onclick = (function(i){
									return function(){
										// event.stopPropagation();
								 		if (booleansArray[i]) {
											b[i].show();
											booleansArray[i] = false;
												
										}else{
											b[i].hide();
											booleansArray[i] = true;	
										}
										// let top = bml[i].offsetHeight + 4 + 20;
										// bml[i].style.left = '-100px';
																				
									}
								})(i)
								let godes = document.querySelector('#godes_'+ i +'');
								
								godes.addEventListener("touchstart", function(){            
								    window.open(''+ results.getPoi(i).detailUrl +'');
								}); 
							}
							
						}
					}
				};
				if(this.gongjiaoMark.length == 0){
					var local = new BMap.LocalSearch(map, options);
				    local.search("公交");
				}else{
					if (this.gongjiaoMarkShow) {
						for (let i = 0; i < this.gongjiaoMark.length; i++) {
							this.gongjiaoMark[i].show();
						}
					}else{
						for (let i = 0; i < this.gongjiaoMark.length; i++) {
							this.gongjiaoMark[i].hide();
						}
					}
					
				}
				this.gongjiaoMarkShow = !this.gongjiaoMarkShow;
				
			    
			},
			loadditie(){         
				let map = this.map;
				let booleansArray = [];
				let _this = this;
				let options = {
					onSearchComplete: function(results){
						// 判断状态是否正确
						if (local.getStatus() == BMAP_STATUS_SUCCESS){
							let s = [];
							let b = [];
							let a = [];
							for (var i = 0; i < results.getCurrentNumPois(); i ++){
								s.push(results.getPoi(i).title + ", " + results.getPoi(i).point.lat);
								let myIcon = new BMap.Icon("static/images/mapAround/ditie.png", new BMap.Size(48,48));
								let pt = new BMap.Point(results.getPoi(i).point.lng, results.getPoi(i).point.lat);
								let marker = new BMap.Marker(pt,{icon:myIcon});		
								// 创建文字标签
								let opts = {
								    position : results.getPoi(i).point,    // 指定文本标注所在的地理位置
								    offset   : new BMap.Size(-57,0)    // 设置文本偏移量
								}
								
								let label = new BMap.Label('<div class="label-container"><p>'+ results.getPoi(i).title +'</p><p>'+ results.getPoi(i).address +'</p><p><a id="godes_'+ i +'" class="godes">查看详情>></a></p></div>', opts);  // 创建文本标注对象
								label.setStyle({
									height: "auto",								
									border: 'none',									
									whiteSpace: 'normal'
								});
								b.push(label)
								a.push(marker)
								_this.ditieMark.push(marker)
								map.addOverlay(marker);
								marker.setLabel(label);
								label.hide();
								let aa = true;
								booleansArray.push(aa);                            
							}
							// var bml = document.querySelectorAll(".BMapLabel");
							// for (let i = 0; i < bml.length; i++) {
							// 	bml[i].style.top = '-91px';
							// }
							if(_this.ditieMark.length == 0){
								alert('没有您想要的结果');
								return;
							}
							for (let i = 0; i < a.length; i++) {
								// a[i].onclick = (i => {
								// 	return (e) => {
								// 		e = e.stopPropagation || new Event('click');
								// 		e.stopPropagation();
								// 		alert(i);
								// 	};
								// })(i);
								a[i].onclick = (function(i){
									return function(){
										// event.stopPropagation();
								 		if (booleansArray[i]) {
											b[i].show();
											booleansArray[i] = false;
												
										}else{
											b[i].hide();
											booleansArray[i] = true;	
										}
										// let top = bml[i].offsetHeight + 4 + 20;
										// bml[i].style.left = '-100px';
																				
									}
								})(i)
								let godes = document.querySelector('#godes_'+ i +'');
								
								godes.addEventListener("touchstart", function(){            
								    window.open(''+ results.getPoi(i).detailUrl +'');
								}); 
							}
							
						}
					}
				};
				if(this.ditieMark.length == 0){
					var local = new BMap.LocalSearch(map, options);
				    local.search("地铁");
				}else{
					if (this.ditieMarkShow) {
						for (let i = 0; i < this.ditieMark.length; i++) {
							this.ditieMark[i].show();
						}
					}else{
						for (let i = 0; i < this.ditieMark.length; i++) {
							this.ditieMark[i].hide();
						}
					}
					
				}
				this.ditieMarkShow = !this.ditieMarkShow;
			    
			},
			loadxuexiao(event){         
				let map = this.map;
				let booleansArray = [];
				let _this = this;
				let options = {
					onSearchComplete: function(results){
						// 判断状态是否正确
						if (local.getStatus() == BMAP_STATUS_SUCCESS){
							let s = [];
							let b = [];
							let a = [];
							for (var i = 0; i < results.getCurrentNumPois(); i ++){
								s.push(results.getPoi(i).title + ", " + results.getPoi(i).point.lat);
								let myIcon = new BMap.Icon("static/images/mapAround/xuexiao.png", new BMap.Size(48,48));
								let pt = new BMap.Point(results.getPoi(i).point.lng, results.getPoi(i).point.lat);
								let marker = new BMap.Marker(pt,{icon:myIcon});		
								// 创建文字标签
								let opts = {
								    position : results.getPoi(i).point,    // 指定文本标注所在的地理位置
								    offset   : new BMap.Size(-57,0)    // 设置文本偏移量
								}
								
								let label = new BMap.Label('<div class="label-container" id="godes_'+ i +'"><p>'+ results.getPoi(i).title +'</p><p>'+ results.getPoi(i).address +'</p><p><a  class="godes">查看详情>></a></p></div>', opts);  // 创建文本标注对象
								label.setStyle({
									height: "auto",								
									border: 'none',									
									whiteSpace: 'normal'
								});
								b.push(label)
								a.push(marker)
								_this.xuexiaoMark.push(marker)
								map.addOverlay(marker);
								marker.setLabel(label);
								label.hide();
								let aa = true;
								booleansArray.push(aa);                            
							}
							// var bml = document.querySelectorAll(".BMapLabel");
							// for (let i = 0; i < bml.length; i++) {
							// 	bml[i].style.top = '-91px';
							// }
							if(_this.xuexiaoMark.length == 0){
								alert('没有您想要的结果');
								return;
							}
							for (let i = 0; i < a.length; i++) {
								// a[i].onclick = (i => {
								// 	return (e) => {
								// 		e = e.stopPropagation || new Event('click');
								// 		e.stopPropagation();
								// 		alert(i);
								// 	};
								// })(i);
								a[i].onclick = (function(i){
									return function(){
										event.stopPropagation();
								 		if (booleansArray[i]) {
											b[i].show();
											booleansArray[i] = false;
												
										}else{
											b[i].hide();
											booleansArray[i] = true;	
										}
										// let top = bml[i].offsetHeight + 4 + 20;
										// bml[i].style.left = '-100px';
																				
									}
								})(i)
								b[i].onclick = (function(i){
									return function(e){
										e = e.stopPropagation || new Event('click');
										e.stopPropagation();
										window.open(''+ results.getPoi(i).detailUrl +'');
																				
									}
								})(i)
								
								// godes.onclick = (function(){
								// 	return function(){
								// 		event.stopPropagation();
								// 		alert(i)
								// 	}
								// })(i)
							}
							let godes = document.querySelector('#godes_'+ 6 +'');
								console.log(godes);
								// for (let i = 0; i < godes.length; i++) {
									godes.addEventListener("click", function(){ 
										event.stopPropagation(); 
										alert(6)         
									    // window.open(''+ results.getPoi(i).detailUrl +'');
									});
									// godes.onclick = (function(){
									// 	return function(){
									// 		event.stopPropagation();
									// 		alert(6)
									// 	}
									// })(6)
								// }
							
						}
					}
				};
				if(this.xuexiaoMark.length == 0){
					var local = new BMap.LocalSearch(map, options);
				    local.search("学校");
				}else{
					if (this.xuexiaoMarkShow) {
						for (let i = 0; i < this.xuexiaoMark.length; i++) {
							this.xuexiaoMark[i].show();
						}
					}else{
						for (let i = 0; i < this.xuexiaoMark.length; i++) {
							this.xuexiaoMark[i].hide();
						}
					}
					
				}
				this.xuexiaoMarkShow = !this.xuexiaoMarkShow;
			    
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.map-around-wrapper{
		width: 100%;
		height: 100%;
		overflow: hidden;
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
		footer{
			height: 2rem;
			background-color: #fff;
			.around-nav-swiper{
				.swiper-wrapper{
					.swiper-slide{
						@include flex(center,center);
						flex-direction: column;
					    -webkit-flex-direction: column;
					    -ms-flex-direction: column;
					    color: #83868f;
					    i{
					    	font-size: .8rem;
					    	color: #999;
					    }
					    p{
					    	position: relative;
					    	top: -.2rem;
					    }
					}
					.swiper-slide.active{
						color: $mainColor;
						i{
							color: $mainColor;
						}
					}
				}				
			}
		}
	}
</style>