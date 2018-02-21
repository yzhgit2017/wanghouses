<template>
	<div class="team-member-register-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>注册团队成员</p>
			<div class="take-place"><router-link to="/addTeamMember"><img src="static/images/zengjia@3x.png"></router-link></div>
		</header>
		<ul class="team-member-list">
			<li>
				<div class="header">
					<span>张晓东</span>
					<span>15064066666</span>
				</div>
				<p>身份证号：371122199802024465</p>
				<p>山东省历下区明湖路1200号</p>
			</li>
			<li>
				<div class="header">
					<span>张晓东</span>
					<span>15064066666</span>
				</div>
				<p>身份证号：371122199802024465</p>
				<p>山东省历下区明湖路1200号</p>
			</li>
			<li>
				<div class="header">
					<span>张晓东</span>
					<span>15064066666</span>
				</div>
				<p>身份证号：371122199802024465</p>
				<p>山东省历下区明湖路1200号</p>
			</li>
		</ul>
		<div class="submit-btn-container">
			<div class="submit-btn">提交审核</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'teamMemberRegister',
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.team-member-register-wrapper{
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
				width: 1rem;
				height: 1rem;
				img{
					width: 100%;
				}
			}
		}
		.team-member-list{
			li{
				@include pad;
				margin-top: .75rem;
				.header{
					@include flex(space-between,normal);
					font-size: .7rem;
					color: $mainFontSizeColor;
				}
				p{
					color: #999;
					padding-top: .2rem;
				}
			}
		}
		.submit-btn-container{
			@include pad;
			background: none;
			.submit-btn{
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