<template>
	<div class="city-change-wrapper">
		<header>
			<span class="back" @click="goBack()"><i class="iconfont icon-arrow"></i></span>
			<p>选择城市</p>
			<div class="take-place"></div>
		</header>
		<div class="search">
			<input type="search" name="" placeholder="输入城市名称搜索">
			<i class="iconfont icon-sousuo-copy"></i>
		</div>
		<div class="city-list-item">
			<p>当前城市</p>
			<ul class="city-list">
				<li><i class="iconfont icon-chakantiezidingwei"></i>呼和浩特</li>
			</ul>
		</div>
		<div class="city-list-item">
			<p>热门城市</p>
			<ul class="city-list">
				<li v-for="item in hotCityList" v-bind:class="{'active': isIndex == item}" @click="cityChange(item)">{{item}}</li>
			</ul>
		</div>
		<div class="city-list-item" v-for="(item,index) in cityList">
			<p :id="'letter_' + item.letter_index">{{item.letter}}</p>
			<ul class="city-list">
				<li v-for="subItem in item.data" v-bind:class="{'active': isIndex == subItem}" @click="cityChange(subItem)">{{subItem}}</li>
			</ul>
		</div>
		<ul class="letters-list">
			<li><i class="iconfont icon-star"></i></li>
			<li v-for="(item,index) in lettersArray" @click="goAnchor(index+1)">{{item}}</li>
			<li>#</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'cityChange',
		data(){
			return {
				hotCityList: ['北京', '天津' ,'上海' ,'广东' ,'武汉','长沙'],
				lettersArray: ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','W','X','Y','Z'],
				test: [
                    "北京",
                    "上海",
                    "天津",
                   "安徽",
                    "呼和浩特",
                    "包头",
                    "海南",
                    "张家口"
                ],
                cityList:[],
                isIndex: null,
			}
		},
		mounted(){
			this.pySegSort(this.test);
			console.log(this.cityList)
		},
		methods: {
			goBack(){
				this.$router.go(-1);
			},
			pySegSort(arr,empty) {
			    if(!String.prototype.localeCompare)
			        return null;
			     
			    var letters = "*ABCDEFGHJKLMNOPQRSTWXYZ".split('');
			    var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
			     
			    var segs = [];
			    var curr;
			    $.each(letters, function(i){
			        curr = {letter: this, data:[],letter_index: i};
			        $.each(arr, function() { 
			            if((!zh[i-1] || zh[i-1].localeCompare(this,'zh') <= 0) && this.localeCompare(zh[i],'zh') == -1) {
			                curr.data.push(this);
			            }
			        });
			        if(empty || curr.data.length) {
			            segs.push(curr);
			            curr.data.sort(function(a,b){ 
			                return a.localeCompare(b,'zh');
			            });
			        }
			    });
			    this.cityList = segs;
			},
			cityChange(cityName){
				this.isIndex = cityName;
			},
			goAnchor(index) {				
				var selector = '#letter_' + index;
		        var anchor = this.$el.querySelector(selector)
		        console.log(anchor.offsetTop)
		        document.body.scrollTop = anchor.offsetTop
		        document.documentElement.scrollTop = anchor.offsetTop
		    }
		}
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin.scss';
	.city-change-wrapper{
		background-color: #fff;
		padding-bottom: .5rem;
		header{
			height: 2rem;
			@include flex(space-between,center);			
			padding: 0 .75rem;
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
		.search{
			@include pad();
			position: relative;
			input{
				display: block;
				color: #999;
				@include wh(100%,1.2rem);
				border: 1px solid #ccc;
				border-radius: .6rem;
				text-align: left;
				line-height: 1.2rem;
				outline: none;
				padding-left: 1.7rem;
				padding-right: .5rem;
				
			}
			input::-webkit-search-cancel-button { 
				-webkit-appearance: none; 
			}
			i{
				position: absolute;
				top: 50%;
			    left: 1.5rem;
			    transform: translateY(-50%);
			    font-size: .8rem;
			    color: #999;
			}
		}
		.city-list-item{
			padding: 0 .75rem;
			box-sizing: border-box;
			margin-bottom: .5rem;
			p{
				color: #ccc;
			}
			.city-list{
				overflow: hidden;
				li{
					border: 1px solid #ccc;
					border-radius: 3px;
					width: 4rem;
					height: 1.5rem;
					line-height: 1.5rem;
					text-align: center;
					color: #3c3f46;
					float: left;
					margin-right: .5rem;
					margin-top: .5rem;
					i{
						font-size: .6rem;
						margin-right: .25rem;
					}
				}
				li.active{
					color: #2bddbe;
					border-color: #2bddbe;
				}
			}
		}
		.letters-list{
			position: fixed;
			width: .75rem;
			height: auto;
			right: 0;
			text-align: center;
			top: 4.2rem;
			li{
				color: #3c3f46;
				i{
					color: #3c3f46;
					font-size: .6rem;
				}
			}
		}
	}
</style>