<template>
	<div class="choice-identity-wrapper">
	  	<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>选择用户身份</p>
			<div class="take-place"></div>
		</header>
		<ul class="identity-list">
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw1@3x.png"></div>
					<p>注册会员</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw2@3x.png"></div>
					<p>我是经纪人</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw3@3x.png"></div>
					<p>我是经纪人团队</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw4@3x.png"></div>
					<p>我是经纪人公司</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw5@3x.png"></div>
					<p>我是设计师</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw6@3x.png"></div>
					<p>我是装修公司</p>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper"><img src="static/images/qw6@3x.png"></div>
					<p>租赁公司</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'choiceIdentity',
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.choice-identity-wrapper{
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
		.identity-list{
			@include pad;
			overflow: hidden;
			li{
				width: 50%;
				float: left;
				margin-top: 1rem;
				a{
					display: block;
					width: 100%;
					height: 100%;
					.img-wrapper{
						width: 4rem;
						height: 4rem;
						border-radius: 2rem;
						margin: auto;
						img{
							display: block;
							width: 100%;
						}
					}
					p{
						font-size: .6rem;
						color: #999;
						text-align: center;
					}
				}
				
			}
		}
	}
</style>