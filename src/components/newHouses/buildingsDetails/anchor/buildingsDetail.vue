<template>
	<div class="buildings-detail-wrapper" id="anchor-0">
		<div class="title">
			<h2>楼盘详情</h2>
			<router-link to="">更多详情</router-link>
		</div>
		<p>
			<span>交房时间：</span>2020年8月24日
		</p>
		<p>
			<span>楼盘地址：</span>槐荫区张庄路5555号
		</p>
		<p>			
			<span>售楼地址哈哈哈：</span>泉城路1500号 银座北临泉城路1500号 银座北临泉城路1500号 银座北临
		</p>
		<p>
			<span>开发商：</span>中国万达职业有限公司
		</p>
		<router-link to="" class="sendAddress">发送地址给我</router-link>
	</div>
</template>

<script>
	export default {
		name: 'anchorBuildingsDetail',
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-0{	
		@include pad;
		margin-top: .5rem;
		.title{
			height: 2rem;
			@include flex(space-between,center);
			border-bottom: 1px solid #ececec;
			a{
				color: #666;
			}
		}
		p{
			margin-top: .5rem;
			color: #999;			
			span{
				color: #333;
			}
		}
		.sendAddress{
			display: block;
			margin: auto;
			margin-top: .5rem;
			width: 4.6rem;
			height: 1.2rem;
			line-height: 1.2rem;
			background-color: #e5f4f1;
			text-align: center;
			border-radius: .6rem;
			color: #2bddbe;
		}
	}
</style>