<template>
	<div class="cash-deposit-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>缴纳保证金</p>
			<div class="take-place"></div>
		</header>
		<div class="pay-container">
			<div class="title">
				<span class="left">保证金金额</span>
				<span class="right">￥800</span>
			</div>
			<ul class="pay-list">
				<li v-for="(item,index) in payList">
					<span><img :src="item.imgSrc">{{item.label}}</span>
					<span @click="payChoice(index)"><i class="iconfont" v-bind:class="isIndex == index ? 'icon-gouxuan' : 'icon-weixuanzhongyuanquan'"></i></span>
				</li>
			</ul>
		</div>
		<div class="pay-btn-container">
			<div class="pay-btn">支付</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'certifiedDesigner',
		data() {
		    return {
		        payList: [
		        	{
		        		imgSrc: 'static/images/zhifubaozhifu@3x.png',
		        		label: '支付宝支付',
		        	},
		        	{
		        		imgSrc: 'static/images/weixinzhifu@3x.png',
		        		label: '微信支付',
		        	},
		        ],
		        isIndex: 0,
		    }
		},
		methods: {
			payChoice(index){
				this.isIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.cash-deposit-wrapper{
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
		.pay-container{
			margin-top: .5rem;
			@include pad;
			.title{
				height: 2rem;
				@include flex(space-between,center);
				.left{
					color: $mainFontSizeColor;					
				}
				.right{
					color: $mainColor;
				}
			}
			.pay-list{
				li{
					height: 2rem;
					border-top: 1px solid #ececec;
					@include flex(space-between,center);
					span{
						color: #999;
						img{
							width: 1rem;
							vertical-align: middle;
							padding-right: .5rem;
						}
						i{
							color: $mainColor;
							font-size: .8rem;
						}
					}
				}
			}
		}
		.pay-btn-container{
			@include pad;
			background: none;
			.pay-btn{
				display: block;
				width: 100%;
				height: 1.5rem;
				background-color: $mainColor;
				color: #fff;
				font-size: .65rem;
				border-radius: .75rem;
				text-align: center;
				line-height: 1.5rem;
			}
		}
	}
</style>