<template>
	<div class="information-detail-wrapper" id="anchor-4">
		<div class="title">
			<h2>时惠资讯</h2>
			<router-link to="">更多资讯</router-link>
		</div>
		<ul class="information-list">
			<li>
				<p class="p1">五一活动大聚焦：购房可获3000元现金折扣券</p>
				<p class="p2">五一活动大聚焦：购房可获3000元现金折扣券五一活动大聚焦：购房可获3000元现金折扣券</p>
			</li>
			<li>
				<p class="p1">五一活动大聚焦：购房可获3000元现金折扣券</p>
				<p class="p2">五一活动大聚焦：购房可获3000元现金折扣券五一活动大聚焦：购房可获3000元现金折扣券</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'informationDetail',
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-4{
		@include pad;
		margin-top: .5rem;
		.title{
			height: 2rem;
			@include flex(space-between,center);			
			a{
				color: #666;
			}
		}
		.information-list{
			li{
				padding: .75rem 0;
				border-top: 1px solid #ececec;
				.p1{
					color: #333;
					font-size: .7rem;
				}
				.p2{
					color: #999;
				}
			}
		}
	}
</style>