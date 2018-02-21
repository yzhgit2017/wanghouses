<template>
	<div class="footer-detail-wrapper">
		<router-link to="" class="enter"><img src="static/images/enter.png"></router-link>
		<p class="lead">没有找到合适的房源？快来试试帮我找房！</p>
		<router-link to="/findRoom" class="help-find">帮我找房</router-link>
		<div class="other">
			<router-link to="" style="background-color: #f4736e;">我要推荐</router-link>
			<router-link to="" style="background-color: #fb9d55;">预约看房</router-link>
			<router-link to="" style="background-color: #64acff;">咨询置业管家</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footerDetail',
	}
</script>

<style scoped lang="scss">
	.footer-detail-wrapper{
		margin-top: .5rem;
		background-color: #fff;
		.enter{
			display: block;
			width: 100%;
			img{
				display: block;
				width: 100%;
			}
		}
		.lead{
			color: #666;
			padding: .75rem;
			text-align: center;
		}
		.help-find{
			display: block;
			width: 12rem;
			height: 1.5rem;
			line-height: 1.5rem;
			text-align: center;
			color: #fff;
			font-size: .7rem;
			border-radius: 0.75rem;
			background-color: #2bddbe;
			margin: 0 auto;
		}
		.other{
			overflow: hidden;
			margin-top: .75rem;
			a{
				display: block;
				float: left;
				width: 33.333%;
				height: 2rem;
				color: #fff;
				font-size: .7rem;
				text-align: center;
				line-height: 2rem;
			}
		}
	}
</style>