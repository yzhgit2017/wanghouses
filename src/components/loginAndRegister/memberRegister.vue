<template>
	<div class="member-register-wrapper">
		<header>
			<router-link to="" class="back"><i class="iconfont icon-arrow"></i></router-link>
			<p>注册会员</p>
			<div class="take-place"></div>
		</header>
		<div class="register-item-container">
			<div class="register-item-wrapper">
				<div class="register-item">
					<span class="mobile-number-span">+86</span>
					<input type="text" name="" placeholder="请输入手机号" class="mobile-number-input">
				</div>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="text" name="" placeholder="请输入验证码">
					<span class="verification-code-span">请输入验证码</span>
				</div>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="text" name="" placeholder="请输入用户名">
				</div>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="password" name="" placeholder="请输入密码" id="password-input-new">
					<span class="eye-icon" @click="newPasswordShow()"><i class="iconfont" v-bind:class="newEyeClose ? 'icon-yj' : 'icon-close-eye'"></i></span>
					<!-- <span class="eye-icon"><i class="iconfont" v-bind:class="{'icon-close-eye': !close,'icon-yj': close}"></i></span> -->
				</div>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="password" name="" placeholder="请再次输入密码" id="password-input-repeat">
					<span class="eye-icon" @click="repeatPasswordShow()"><i class="iconfont" v-bind:class="repeatEyeClose ? 'icon-yj' : 'icon-close-eye'"></i></span>					
				</div>
			</div>				
		</div>		
	</div>
</template>

<script>
	export default {
		name: 'memberRegister',
		data(){
			return {
				newEyeClose: false,
				repeatEyeClose: false,
			}
		},
		methods:{
			newPasswordShow(){
				this.newEyeClose = !this.newEyeClose;
				let obj = document.querySelector('#password-input-new');
				if (obj.type == 'text') {
					obj.type = 'password';
				}else{
					obj.type = 'text';
				}
			},
			repeatPasswordShow(){
				this.repeatEyeClose = !this.repeatEyeClose;
				let obj = document.querySelector('#password-input-repeat');
				if (obj.type == 'text') {
					obj.type = 'password';
				}else{
					obj.type = 'text';
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.member-register-wrapper{
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: hidden;
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
		.register-item-container{
			@include pad;
			.register-item-wrapper{
				position: relative;
				margin-bottom: .5rem;				
				.register-item{
					position: relative;
					@include flex(normal,center);
					input{
						display: inline-block;
						width: 100%;
						color: #999;
						height: 1rem;
						padding: .25rem .5rem;
						border: 1px solid #ececec;
						border-radius: .75rem;						
						font-size: .65rem;
					}
					.mobile-number-input{
						padding-left: 1.9rem;
					}
					.mobile-number-span{
						position: absolute;
						left: .5rem;
						color: #999;
						border-right: 1px solid #999;
						display: inline-block;
						padding-right: .25rem;
					}
					.verification-code-span{
						display: inline-block;
						position: absolute;
						right: .5rem;
						height: 1rem;
						line-height: 1rem;
						background-color: $mainColor;
						color: #fff;
						width: 4.5rem;
						text-align: center;
						border-radius: .5rem;
						display: table-cell;
						vertical-align: middle;
					}
					.eye-icon{
						display: inline-block;
						position: absolute;
						right: .5rem;
						color: $mainColor;
						height: 1rem;
						line-height: 1rem;
						display: table-cell;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>