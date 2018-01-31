<template>
	<div class="sand-table-wrapper" id="anchor-7">
		<div class="title">
			<h2>电子沙盘</h2>
			<router-link to="">更多详情</router-link>
		</div>
		<router-link to="" class="link-detail">
			<div class="drag_wrapper">
				
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'sandTable',
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin.scss';
	.sand-table-wrapper{
		margin-top: .5rem;
		.title{
			@include pad;
			height: 2rem;
			@include flex(space-between,center);
			border-bottom: 1px solid #ececec;
			a{
				color: #666;
			}
		}
		.link-detail{
			display: block;
			width: 100%;
			height: 1.5rem;
			overflow: hidden;
		}
	}
</style>