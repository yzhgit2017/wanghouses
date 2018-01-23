<template>
	<div class="watch-houses-wrapper" id="anchor-1">
		<div class="title">
			<h2>视频看房</h2>
			<router-link to="">720°看房</router-link>
		</div>
		<div class="video-wrapper">
			<img src="static/images/shipintu.png">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'watchHouses',
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin.scss';
	#anchor-1{		
		margin-top: .5rem;
		.title{
			@include pad;
			height: 2rem;
			@include flex(left,center);
			a{
				color: #666;
				margin-left: 1rem;
				font-size: .75rem;
			}
		}
		.video-wrapper{
			width: 100%;
			img{
				display: block;
				width: 100%;
			}
		}
	}
</style>