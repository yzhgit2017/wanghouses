<template>
	<div class="selling-point-wrapper">
		<section class="section">
			<p class="title">卖点</p>
			<p class="sun-title">楼盘卖点</p>
			<p class="point-item">
				<label>户型面积：</label>
				<span>四居室(建面200㎡)、三居室(建面124㎡)、二居室(建面78㎡)</span>
			</p>
			<p class="point-item">
				<label>项目配套：</label>
				<span>省直幼儿园、幼儿园、双语幼儿园、中小学、商场</span>
			</p>
			<p class="point-item">
				<label>交通情况：</label>
				<span>公交：123路、110路均可直达</span>
			</p>
			<p class="sun-title">目标客户</p>
			<p class="point-item">
				<label>客户年龄范围：</label>
				<span>25-38</span>
			</p>
			<p class="point-item">
				<label>购房目的：</label>
				<span>自住/投资</span>
			</p>
			<p class="point-item">
				<label>居住区域：</label>
				<span>不限</span>
			</p>
			<p class="point-item">
				<label>工作区域：</label>
				<span>不限</span>
			</p>
		</section>
		<div class="notify">
			<router-link to="" style="background-color:#55bae4">开盘通知</router-link>
			<router-link to="" style="background-color:#ebbf3d">变价通知</router-link>
			<router-link to="" style="background-color:#e77c26">优惠通知</router-link>
		</div>
		<div class="enter">
			<router-link to="">团购报名</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sellingPoint',

	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.selling-point-wrapper{			
		margin-top: .5rem;
		.section{
			@include pad;
			.title{
				font-size: .7rem;
				font-weight: bold;
			}
			.sun-title{
				color: #999;
				margin-top: 1rem;
			}
			.point-item{
				margin-top: .3rem;
				@include flex(left,normal);
				label{
					min-width: 3rem;
					color: #333;
				}
				span{
					color: #999;
				}
			}
		}
		.notify{
			overflow: hidden;
			a{
				display: block;
				float: left;
				width: 33.333%;
				height: 1.5rem;
				line-height: 1.5rem;
				text-align: center;
				color: #fff;
			}
		}
		.enter{
			@include pad;
			a{
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
		}
	}
</style>