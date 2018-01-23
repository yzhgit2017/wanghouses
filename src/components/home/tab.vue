<template>
	<div class="tab-wrapper">
		<ul class="tabs-top">
			<li v-for="(tab,index) in tabs_top" @click="isIndex=index" v-bind:class="{'active':isIndex==index}">
				<span class="text">{{tab}}</span>				
			</li>
		</ul>
		<div class="content">
			<ul v-for="(content,index) in contents" v-bind:class="{'active':isIndex==index}">
				<li v-for="item in content.items"><router-link :to="{path:item.path}" @click.native="refresh()"><img :src="item.img"><p class="tab-item-p">{{item.instruction}}</p></router-link></li>
			</ul>
		</div>
		<ul class="tabs-bottom">
			<li v-for="(tab,index) in tabs_bottom" @click="isIndex=index+4" v-bind:class="{'active':isIndex==index+4}">
				<span class="text">{{tab}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'tab',
		data(){
			return {
				cityPot:'',
                tabs_top: ['新房','二手房','租房','视频看房'],       
                tabs_bottom: ['商业','二手商业','商业租赁','产业园区','厂房/仓库'],
                contents: [
	                {
	                	items: [
	                	   {
	                	   	'img': 'static/images/suoyouloupan@3x.png',
	                	   	'instruction': '所有楼盘',
	                	   	'path': '/allBuildings',
	                	   	'p': '新房'
	                	   },
	                	   {
	                	   	'img': 'static/images/youhuiloupan@3x.png',
	                	   	'instruction': '优惠楼盘',
	                	   	'path': '/all',
	                	   	'p': '新房' 
	                	   },
	                	   {
	                	   	'img': 'static/images/tejiafang@3x.png',
	                	   	'instruction': '特价房',
	                	   	'path': '/all'  
	                	   },
	                	   {
	                	   	'img': 'static/images/loupanditu@3x.png',
	                	   	'instruction': '楼盘地图',
	                	   	'path': '/all' 
	                	   },
	                	   {
	                	   	'img': 'static/images/youhuituangou@3x.png',
	                	   	'instruction': '优惠团购',
	                	   	'path': '/all'
	                	   },
	                	   {
	                	   	'img': 'static/images/kanfangtuan@3x.png',
	                	   	'instruction': '看房团',
	                	   	'path': '/all' 
	                	   },
	                	   {
	                	   	'img': 'static/images/yanglaolvyou@3x.png',
	                	   	'instruction': '养老旅游',
	                	   	'path': '/all' 
	                	   },
	                	   {
	                	   	'img': 'static/images/fangjiazoushi@3x.png',
	                	   	'instruction': '房价走势',
	                	   	'path': '/all' 
	                	   },
	                	],
	                },
	                {
                       items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘2' 
	                	   },
	                	]
	                },
                	{
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘3' 
	                	   },
	                	]
	                },
	                {
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘4' 
	                	   },
	                	]
                    },
                    {
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘5' 
	                	   },
	                	]
                    },
                    {
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘6' 
	                	   },
	                	]	
                    },
                    {
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘7' 
	                	   },
	                	]
                    },
                    {
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘8' 
	                	   },
	                	]
                    },
                    {
	                	items: [
	                	   {
	                	   	'img': '',
	                	   	'instruction': '所有楼盘9' 
	                	   },
	                	]
                    },                 
                ],
                isIndex: 0,
			}
		},
		mounted(){
          
		},
		methods:{
			refresh:function(){
				this.$router.go(0)
			}
		},
		watch:{
			
		}
	}
</script>

<style lang="scss" scoped>
	@import 'static/css/mixin.scss';
	.tab-wrapper{
		width: 100%;
		background-color: #fff;
		margin-top: .5rem;
		.tabs-top{
			width: 100%;
			height: 2rem;			
			border-bottom: 1px solid #ececec;
			li{
				width: 25%;
				height: 100%;
				float: left;
				text-align: center;
				.text{
					display: inline-block;
					height: 100%;					
					line-height: 2rem;
					box-sizing: border-box;					
				}
			}
			li.active{
				.text{
					color: #2bddbe;
					border-bottom: 2px solid #2bddbe;
				}
			}
		}
		.content{
			ul{
				display: none;
				overflow: hidden;
				padding-bottom: .5rem;
				li{
					margin-top: .5rem;
					width: 25%;
					float: left;
					a{
						width: 100%;
						height: 100%;
						color: #3c3f46;
						@include flex(center,center);
						flex-direction: column;
					    -webkit-flex-direction: column;
					    -ms-flex-direction: column;
						img{
							width: 60%;
						}
						.tab-item-p{
							padding-top: 5px;
							font-size: .6rem;
						}
					}
					
				}
			}
			ul.active{
				display: block;
			}
		}
		.tabs-bottom{
			width: 100%;
			height: 2rem;			
			border-top: 1px solid #ececec;
			li{
				width: 20%;
				height: 100%;
				float: left;
				text-align: center;
				.text{
					display: inline-block;
					height: 100%;
					line-height: 2rem;
					box-sizing: border-box;
				}
			}
			li.active{
				.text{
					color: #2bddbe;
					border-bottom: 2px solid #2bddbe;
				}
			}
		}
	}
</style>