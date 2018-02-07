<template>
	<div class="review-result-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p></p>
			<div class="take-place"></div>
		</header>
		<div class="result-container">
			<div class="icon-wrapper"><img src="static/images/shehe2@3x.png"></div>
			<p class="p-title">审核成功</p>
			<p class="p-content">感谢您认证旺屋职业经纪人，您的资料已经审核成功，点击确认进入登录系统</p>
			<div class="sure-btn">我知道了</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'reviewResult',
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin.scss';
	.review-result-wrapper{
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
		.result-container{
			@include pad;
			.icon-wrapper{
				width: 5rem;
				height: 5rem;
				margin: 1.5rem auto;
				img{
					display: block;
					width: 100%;
				}
			}
			.p-title{
				text-align: center;
				color: $mainFontSizeColor;
				font-size: .7rem;
			}
			.p-content{
				margin-top: .7rem;
				color: #999;
			}
			.sure-btn{
				width: 100%;
				height: 1.5rem;
				background-color: $mainColor;
				color: #fff;
				font-size: .65rem;
				// @include flex(center,center);
				border-radius: .75rem;
				text-align: center;
				line-height: 1.5rem;
				margin-top: 1.5rem;
			}
		}
	}
</style>