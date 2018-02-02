<template>
	<div class="login-wrapper" id="loginWrapper">
		<div class="logo"><img src="static/images/logo@3x.png"></div>
		<p class="name">旺屋</p>
		<div class="login-tab-wrapper">
			<router-link to="/pwdLogin"><span>密码登录</span></router-link>
			<router-link to="/vcLogin"><span  class="active">验证码登录</span></router-link>
		</div>
		<div class="login-input-wrapper">
			<div class="input-item-wrapper">
				<div class="input-item">
					<span class="icon-wrapper mobile-number-icon-wrapper"><i class="iconfont icon-shouji"></i> +86</span>
					<input type="text" name="" placeholder="请输入手机号"  @blur="mobileNumberBlur()" v-model="mobileNumberMessage" class="mobile-number-input">
				</div>
				<mt-popup v-model="popupMobileNumber" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{mobileNumberErrorMessage}}
			    </mt-popup>	
			</div>
			<div class="input-item-wrapper">
				<div class="input-item">
					<span class="icon-wrapper"><i class="iconfont icon-ecurityCode"></i></span>
					<input type="password" name="" placeholder="请输入验证码"  @blur="verificationCodeBlur()" v-model="verificationCodeMessage">
					<span class="get-verification-code">获取验证码</span>
				</div>
				<mt-popup v-model="popupVerificationCode" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{verificationCodeErrorMessage}}
			    </mt-popup>
			</div>
			<div class="login-btn">登录</div>			
		</div>
		<div class="third-party-logins-wrapper">
			<p class="title">第三方登录</p>
			<div class="third-party-item">
				<router-link to=""><img src="static/images/qqdl@3x.png"></router-link>
				<router-link to=""><img src="static/images/wxdl@3x.png"></router-link>
				<router-link to=""><img src="static/images/wbdl@3x.png"></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'login',
		data(){
			return {
				popupMobileNumber: false,
				mobileNumberMessage: null,
				mobileNumberErrorMessage: null,
				popupVerificationCode: false,
				verificationCodeMessage: null,
				verificationCodeErrorMessage: null,			
			}
		},
		mounted(){
			this.init();
		},
		computed: {
	        ...mapGetters({
	            updatedLoginPageHeight: 'updatedLoginPageHeight'
	        }),
	    },
		methods:{
			mobileNumberBlur(){				
				let mes = this.mobileNumberMessage;
				if (mes == null) {
					this.popupMobileNumber = true;
					this.mobileNumberErrorMessage = '手机号不能为空';
				}else{
					this.popupMobileNumber = false;
				}
			},
			verificationCodeBlur(){
				let mes = this.verificationCodeMessage;
				if (mes == null) {
					this.popupVerificationCode = true;
					this.verificationCodeErrorMessage = '验证码不能为空';
				}else{
					this.popupVerificationCode = false;
				}
			},
			init(){
				let h = document.querySelector('#loginWrapper').clientHeight;
				if (this.updatedLoginPageHeight == null) {
					h = h;
				}else{
					h = this.updatedLoginPageHeight;
				}
				document.querySelector('#loginWrapper').style.height = h + 'px';
				// alert(document.querySelector('#loginWrapper').clientHeight)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.login-wrapper{
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: hidden;
		position: relative;
		.logo{			
			padding-top: 1.5rem;			
			text-align: center;
			img{
				display: inline-block;
				width: 3rem;
			}
		}
		.name{
			text-align: center;
			font-size: .7rem;
			color: $mainFontSizeColor;
		}
		.login-tab-wrapper{
			overflow: hidden;
			border-bottom: 1px solid #ececec;
			margin-top: .5rem;
			a{
				float: left;
				width: 50%;
				height: 1.5rem;
				line-height: 1.5rem;
				text-align: center;
				span{
					display: inline-block;
					font-size: .65rem;
					color: #666;
					position: relative;
				}
				span.active{
					color: $mainColor;
				}
				span.active:after{	
					content: '';			
					position: absolute;
					top: 1.4rem;
					left: 50%;
					width: 50%;
					height: 2px;
					background-color: #2bddbe;
					transform: translateX(-50%);
				}
			}
		}
		.login-input-wrapper{
			@include pad;
			padding-top: .5rem;
			.input-item-wrapper{
				position: relative;
				.input-item{
					position: relative;
					border-bottom: 1px solid #ececec;
					// height: 2rem;
					// line-height: 2rem;
					span{
						position: absolute;
						color: #999;
						top: 50%;
				        transform: translateY(-50%);
						i{
							color: #999;
							font-size: .65rem;
						}
					}
					.mobile-number-icon-wrapper{
						padding-right: .25rem;
					}
					.mobile-number-icon-wrapper:after{
						content: '';
						width: 1px;
						background-color: #999;
						height: 50%;
						position: absolute;
						right: 0;
						top: 50%;
						transform: translateY(-50%); 
					}
					.get-verification-code{
						display: inline-block;
						right: 0;
						color: $mainColor;
						position: absolute;
					}
					input{
						display: inline-block;
						width: 100%;
						color: #999;
						padding: .5rem 0;
						padding-left: 1rem;
						border: none;
						font-size: .65rem;
						height: 1rem;
						display: table-cell;
						vertical-align: middle;					
					}
					.mobile-number-input{
						padding-left: 2.3rem;
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
			}
		}
		.login-btn{

			height: 1.5rem;
			line-height: 1.5rem;
			background-color: $mainColor;
			border-radius: .75rem;
			text-align: center;
			color: #fff;
			width: 100%;
			margin-top: .75rem;
			font-size: .65rem;
			// display: table-cell;
			// vertical-align: middle;
			
		}		
		.third-party-logins-wrapper{
			position: absolute;
			bottom: .75rem;
			width: 100%;
			left: 0;			
			.title{
				text-align: center;
				font-size: .65rem;
				color: #666;			
			}
			.third-party-item{
				@include flex(center,normal);
				a{
					margin: .5rem .5rem;
					img{
						display: block;
						width: 2.5rem;
					}
				}
			}
		}
	}
</style>