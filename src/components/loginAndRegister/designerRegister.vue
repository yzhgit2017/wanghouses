<template>
	<div class="designer-register-wrapper">
		<header>
			<span class="back" @click="goBack()"><i class="iconfont icon-arrow"></i></span>
			<p>注册设计师</p>
			<div class="take-place"></div>
		</header>
		<div class="register-item-container">
			<div class="register-item-wrapper">
				<div class="register-item">
					<span class="mobile-number-span">+86</span>
					<input type="text" name="" placeholder="请输入手机号" class="mobile-number-input" v-model="mobileNumberValue">
				</div>
				<mt-popup v-model="mobileNumberPopup" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{mobileNumberErrorMessage}}
			    </mt-popup>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="text" name="" placeholder="请输入验证码" v-model="verificationCodeValue">
					<span class="verification-code-span">请输入验证码</span>
				</div>
				<mt-popup v-model="verificationCodePopup" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{verificationCodeErrorMessage}}
			    </mt-popup>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="text" name="" placeholder="请输入用户名" v-model="userNameValue">
				</div>
				<mt-popup v-model="userNamePopup" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{userNameErrorMessage}}
			    </mt-popup>
			</div>
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
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="text" name="" placeholder="省市区" v-model="positionValue">
					<span class="position-span"><i class="iconfont icon-dingwei"></i>位置</span>
				</div>
				<mt-popup v-model="positionPopup" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{positionErrorMessage}}
			    </mt-popup>
			</div>
			<div class="register-item-wrapper">
				<div class="register-item">					
					<input type="text" name="" placeholder="请输入邀请码(选填)" v-model="inviteCodeValue">
				</div>
			</div>
			<div class="agreement-wrapper">
				<span class="agree-icon-wrapper" @click="agreeChange()"><i class="iconfont" v-bind:class="agree ? 'icon-gouxuan' : 'icon-weixuanzhongyuanquan'"></i></span>
				<router-link to="">我已阅读并同意旺屋用户协议</router-link>
			</div>
			<div class="register-btn" @click="register()">注册</div>
			<mt-popup v-model="successPopup" popup-transition="popup-fade" class="popup-success-message">
				<div class="success-container">
				    <div class="icon-wrapper"><i class="iconfont icon-duihao"></i></div>
				    <p>注册成功</p>
				    <div class="choice-wrapper">
				    	<div @click="continueRegister()">继续注册</div>
				    	<div><router-link to="">去登录</router-link></div>
				    </div>
				</div>
			</mt-popup>		
		</div>		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'designerRegister',
		data(){
			return {
				newEyeClose: false,
				repeatEyeClose: false,
				agree: true,
				mobileNumberValue: null,
				mobileNumberPopup: false,
				mobileNumberErrorMessage: null,
				verificationCodeValue: null,
				verificationCodePopup: false,
				verificationCodeErrorMessage: null,
				userNameValue: null,
				userNamePopup: false,
				userNameErrorMessage: null,
				passwordValue: null,
				passwordPopup: false,
				passwordErrorMessage: null,
				repeatPasswordValue: null,
				repeatPasswordPopup: false,
				repeatPasswordErrorMessage: null,
				positionValue: null,
				positionPopup: false,
				positionErrorMessage: null,
				agreeValue: 1,
				successPopup: false,
				inviteCodeValue: null,
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
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
			agreeChange(){
				this.agree = !this.agree;
				if (this.agreeValue == 1) {
					this.agreeValue = 0;
				}else{
					this.agreeValue = 1;
				}
			},
			register(){
				if (this.mobileNumberValue == null) {
					this.mobileNumberPopup = true;
					this.mobileNumberErrorMessage = '手机号不能为空';
					return;
				}else if (this.verificationCodeValue == null) {
					this.verificationCodePopup = true;
					this.verificationCodeErrorMessage = '验证码不能为空';
					return;
				}else if (this.userNameValue == null) {
					this.userNamePopup = true;
					this.userNameErrorMessage = '用户名不能为空';
					return;
				}else if (this.passwordValue == null) {
					this.passwordPopup = true;
					this.passwordErrorMessage = '密码不能为空';
					return;
				}else if (this.repeatPasswordValue == null) {
					this.repeatPasswordPopup = true;
					this.repeatPasswordErrorMessage = '重复密码不能为空';
					return;
				}else if (this.positionValue == null) {
					this.positionPopup = true;
					this.positionErrorMessage = '地理位置不能为空';
					return;
				}else if(this.agree == 0){
					Toast({
			            message: '请认真阅读旺屋协议，并勾选',
			            iconClass: 'iconfont icon-cuowutishi',
			            className: 'toast-agree',
			            duration: 1000
			        });
				}else if(!this.mobileNumberPopup && !this.verificationCodePopup && !this.userNamePopup && !this.userNamePopup && !this.repeatPasswordPopup && !this.positionPopup){
					// this.successPopup = true;
					this.$router.push('/reviewResult');
				}
			},
			continueRegister(){
				this.successPopup = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.designer-register-wrapper{
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
					.position-span{
						display: inline-block;
						position: absolute;
						right: .5rem;
						height: 1rem;
						line-height: 1rem;
						font-size: .65rem;
						color: #999;
						i{
							color: $mainColor;
							font-size: .65rem;
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
			.agreement-wrapper{
				height: 1rem;
				line-height: 1rem;
				text-align: center;
				margin-bottom: .5rem;
				.agree-icon-wrapper{
					i{
						font-size: .7rem;
						color: $mainColor;
					}
				}
				a{
					color: #999;
					position: relative;
					top: -1px;
					font-size: .6rem;
				}
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
			}
			.popup-success-message{
				.success-container{
					width: 10rem;
					.icon-wrapper{
						text-align: center;
						i{
							font-size: 2rem;
							color: #67c23a;
						}
					}
					p{
						color: #333;
						font-size: .8rem;
						text-align: center;
					}
					.choice-wrapper{
						@include flex(space-between,center);
						border-top: 1px solid #ececec;
						margin-top: .5rem;
						div{
							width: 50%;
							height: 2rem;
							text-align: center;
							line-height: 2rem;
							color: #67c23a;
							font-size: .65rem;
							a{
								display: block;
								width: 100%;
								height: 100%;
								color: #333;
							}
						}
					}
				}
			}
		}
	}
</style>