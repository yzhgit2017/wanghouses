<template>
	<div class="certified-designer-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>认证设计师</p>
			<div class="take-place"></div>
		</header>
		<div class="content-container">
			<section>
				<p>保证金是指用于核算存入银行等金融机构各种保证金性质的存款。</p>
				<p>在法律对于保证金缺乏明确规范的背景下，探讨保证金的类型，对于备用金类型的保证金、预付款类型的保证金、租赁保证金、装修保证金、定金类型的保证金、保有返还请求权的保证金、无双倍返还效力的保证金分别界定，确定各自的法律效力，十分必要。</p>
				<p>在证券市场融资购买证券时，投资者所需缴纳的自备款。</p>
			</section>
			<router-link to="/payCashDeposit" class="go-pay-page">缴纳保证金</router-link>
		</div>		
	</div>
</template>

<script>
	export default {
		name: 'certifiedDesigner',
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.certified-designer-wrapper{
		width: 100%;
		height: 100%;
		background-color: #fff;
		header{
			height: 2rem;
			border-bottom: 1px solid #ececec;
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
		.content-container{
			@include pad;
			section{
				p{
					padding-bottom: 1rem;
					color: $mainFontSizeColor;
				}
				margin-bottom: 1rem;
			}			
			.go-pay-page{
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