<template>
	<div class="member-register-wrapper">
		<header>
			<span class="back" @click="goBack()"><i class="iconfont icon-arrow"></i></span>
			<p>忘记密码</p>
			<div class="take-place"></div>
		</header>
		<div class="register-item-container">
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="password" name="" placeholder="请输入密码" id="password-input-new" v-model="passwordValue">
					<span class="eye-icon" @click="newPasswordShow()"><i class="iconfont" v-bind:class="newEyeClose ? 'icon-yj' : 'icon-close-eye'"></i></span>
					<!-- <span class="eye-icon"><i class="iconfont" v-bind:class="{'icon-close-eye': !close,'icon-yj': close}"></i></span> -->
				</div>
				<mt-popup v-model="passwordPopup" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{passwordErrorMessage}}
			    </mt-popup>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="password" name="" placeholder="请再次输入密码" id="password-input-repeat" v-model="repeatPasswordValue">
					<span class="eye-icon" @click="repeatPasswordShow()"><i class="iconfont" v-bind:class="repeatEyeClose ? 'icon-yj' : 'icon-close-eye'"></i></span>					
				</div>
				<mt-popup v-model="repeatPasswordPopup" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{repeatPasswordErrorMessage}}
			    </mt-popup>
			</div>
			<div class="register-btn" @click="finish()">完成</div>	
		</div>		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'memberRegister',
		data(){
			return {
				newEyeClose: false,
				repeatEyeClose: false,
				passwordValue: null,
				passwordPopup: false,
				passwordErrorMessage: null,
				repeatPasswordValue: null,
				repeatPasswordPopup: false,
				repeatPasswordErrorMessage: null,
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			finish(){
				this.$router.push('/pwdLogin');
			},
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
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.member-register-wrapper{
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
						padding-left: 2rem;
					}
					.mobile-number-span{
						position: absolute;
						left: .5rem;
						color: #999;
						border-right: 1px solid #999;
						display: inline-block;
						padding-right: .25rem;
						font-size: .65rem;
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
						font-size: .6rem;
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
						i{
							font-size: .8rem;
						}
					}
				}
			}
			.popup-error-message{
				position: absolute;
				padding: 0 .5rem;
				height: 1.5rem;
				line-height: 1.5rem;
				border-radius: 3px;
				background-color: #ffff01;
				color: #999;
				top: 0;
				transform: translate3d(-50%,-100%,0);
				// display: table-cell;
				// vertical-align: middle;
			}
			.popup-error-message::before {
		        display: inline-block;
			    width: 0;
			    height: 0;
			    border: solid transparent;
			    border-width: .5rem;
			    border-left-color: #ffff01;
			    content: "";
			    position: absolute;
			    bottom: -.5rem;
			    left: 50%;
			    transform: translateX(-50%);
		    }			
			.register-btn{
				width: 100%;
				height: 1.5rem;
				background-color: $mainColor;
				color: #fff;
				font-size: .65rem;
				// @include flex(center,center);
				border-radius: .75rem;
				text-align: center;
				line-height: 1.5rem;
				margin-top: 1rem;
			}
		}
	}
</style>