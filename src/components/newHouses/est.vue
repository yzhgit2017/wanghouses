<template>
	<div class="est-wrapper">
		<header>
			<span class="back" @click="goBack()"><i class="iconfont icon-arrow"></i></span>
			<p>分栋信息</p>
			<div class="take-place"></div>
		</header>
		<div class="est-container">
			<div class="drag-wrapper" id="drag-wrapper">
				<img src="static/images/shapantu.jpg">
				<label class="loudong-label-wrapper" v-for="(item,index) in labelArray" :style="{'left':item.left,'top':item.top}">
					<label class="label-number">{{item.text}}</label><label class="label-state" :style="{'background-color':item.backgroundColor}">{{item.state}}</label><i></i>
				</label>
			</div>
		</div>
		<div class="title-wrapper">
			<p class="title">御园世纪城 9栋</p>
			<div class="date">
				<p>最新开盘：2017.08.10</p>
				<p>入驻时间：2018.08.10</p>
			</div>
		</div>
		<div class="est-detail">
			<div class="detail-item">
				<div class="left">
					<span class="label">单元：</span>
					<span class="des">2个单元</span>
				</div>
				<div class="left">
					<span class="label">楼户比：</span>
					<span class="des">2梯4户</span>
				</div>
			</div>
			<div class="detail-item">
				<div class="left">
					<span class="label">楼层：</span>
					<span class="des">38层</span>
				</div>
				<div class="left">
					<span class="label">总户比：</span>
					<span class="des">158</span>
				</div>
			</div>
			<div class="detail-item">
				<div class="left">
					<span class="label">楼层：</span>
					<span class="des">辽阔的积分收到了附近的数据</span>
				</div>
				<div class="left">
					<span class="label">总户比：</span>
					<span class="des">158</span>
				</div>
			</div>
			<div class="detail-item">
				<div class="left">
					<span class="label">楼层：</span>
					<span class="des">38层</span>
				</div>
				<div class="left">
					<span class="label">总户比：</span>
					<span class="des">158</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import 'static/js/jquery-1.9.1.min.js'
	import 'static/js/est.js'
	export default {
		name: 'est',
		data(){
			return {
				labelArray:[
					{
						text: '1#',
						left: '371.21875px',
						top: '246px',
						state: '期房',
						backgroundColor: '#7ecb69'
					},
					{
						text: '2#',
						left: '293.21875px',
						top: '189px',
						state: '尾房',
						backgroundColor: '#c90207'
					},
				]
			}
		},
		mounted(){
			$('#drag-wrapper').drag();
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.est-wrapper{
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
		.est-container{
			height: 10rem;
			overflow: hidden;
			position: relative;
			width: 100%;
			.drag-wrapper{
				position: absolute;
				img{
					display: block;
				}
				.loudong-label-wrapper{
					position: absolute;
					.label-number{
						display: inline-block;
					    white-space: nowrap;
					    line-height: 1.3rem;
					    padding: 0 .5rem;
					    outline: none;
					    background: #fff;
					    color: #000;
					    border-top-left-radius: 2px;
					    border-bottom-left-radius: 2px
					}
					.label-state{
						white-space: nowrap;
					    line-height: 1.3rem;
					    padding: 0 .5rem;
					    outline: none;
					    display: inline-block;
					    background: #FB841F;
					    color: #fff;
					    border-top-right-radius: 2px;
					    border-bottom-right-radius: 2px;
					}
					i{
						left: .25rem;
					    top: 1.3rem;
					    height: 0;
					    width: 0;
					    overflow: hidden;
					    border-color: #fff transparent transparent transparent;
					    border-style: solid dashed dashed dashed;
					    border-width: .5rem .5rem .5rem 0;
					    position: absolute;
					}
				}
			}
		}
		.title-wrapper{
			@include pad;
			border-bottom: 1px solid #ececec;
			.title{
				font-size: 1rem;
				color: $mainFontSizeColor;
			}
			.date{
				color: #999;
			}
			
		}
		.est-detail{
			@include pad;
			.detail-item{
				overflow: hidden;
				margin-bottom: .75rem;
				.left{
					float: left;
					width: 50%;
				}
				.right{
					float: left;
					width: 50%;
				}
				.label{
					color: $mainFontSizeColor;
				}
				.des{
					color: #666;
				}
			}
		}
	}
</style>