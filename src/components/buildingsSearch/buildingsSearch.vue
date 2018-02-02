<template>
	<div class="buildings-search-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>搜索</p>
			<div class="take-place"></div>
		</header>
		<div class="search">
			<input type="search" name="" placeholder="输入城市名称搜索">
			<div class="search-btn"><i class="iconfont icon-sousuo-copy"></i></div>
		</div>
		<div class="hot-search">
			<div class="title">
				<span><i class="iconfont icon-remen"></i>最近热搜</span>
				<span><i class="iconfont icon-shuaxin"></i></span>
			</div>
			<div class="content">
				<router-link to="" v-for="(item,index) in hotSearch" :key="index">{{item}}</router-link>
			</div>
		</div>
		<div class="history-search">
			<div class="title">
				<span><i class="iconfont icon-lishi"></i>搜索历史</span>
				<span><i class="iconfont icon-shanchu"></i></span>
			</div>
			<div class="content">
				<ul>
					<li v-for="(item,index) in historySearch">
						<router-link to="">
							<span class="name">{{item.name}}</span>
							<span class="attr"> - {{item.attr}}</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cityChange',
		data(){
			return {
				hotSearch: ['aa','aaabbbccc','bbb','ccc'],
				historySearch: [				
					{
						name: '明湖广场',
						attr: '新房'
					},
					{
						name: '盛世名门',
						attr: '二手房'
					}
				]
			}
		},
		mounted(){
			
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin.scss';
	.buildings-search-wrapper{
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
			overflow: hidden;
			input{
				display: block;
				color: #999;
				float: left;
				@include wh(90%,1.2rem);
				border: 1px solid #ccc;
				border-top-left-radius: .6rem;
				border-bottom-left-radius: .6rem;
				text-align: left;
				line-height: 1.1rem;
				outline: none;
				padding-left: .5rem;
				border-right: none;
				box-sizing: border-box;							
			}
			input::-webkit-search-cancel-button { 
				-webkit-appearance: none; 
			}
			.search-btn{
				float: left;
				@include wh(10%,1.2rem);
				text-align: center;
				line-height: 1.1rem;
				border: 1px solid #ccc;
				border-left: none;
				border-top-right-radius: .6rem;
				border-bottom-right-radius: .6rem;
				box-sizing: border-box;
				i{					
				    font-size: .8rem;
				    color: #999;
				}
			}			
		}
		.hot-search{
			padding: 0 .75rem;
			.title{
				@include flex(space-between,center);
				color: #b3b6be;
				font-size: .65rem;
				margin-bottom: .5rem;
				i{
					color: #b3b6be;
					font-size: .65rem;
				}
				.icon-remen{
					margin-right: .5rem;
				}
			}
			.content{
				a{
					display: inline-block;
					padding: .4rem .9rem;
					margin: 0 .2rem .4rem .2rem;
					color: #565c67;
                    background-color: #f8f8f8;
				}
			}
		}
		.history-search{
			padding: 0 .75rem;
			.title{
				@include flex(space-between,center);
				color: #b3b6be;
				font-size: .65rem;
				padding-bottom: .5rem;
				border-bottom: 1px solid #f8f8f8;
				i{
					color: #b3b6be;
					font-size: .65rem;
				}
				.icon-lishi{
					margin-right: .5rem;
				}
			}
			.content{
				li{
					a{
						display: block;
					    border-bottom: 1px solid #f8f8f8;
					    color: #3c3f46;
					    font-size: .65rem;
					    line-height: 1rem;
					    padding: .6rem 0;
					    overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					    .name{
					    	color: #3c3f46;
					    }
					    .attr{
					    	color: #b3b6be;
					    }
					}
				}
			}
		}
	}
</style>