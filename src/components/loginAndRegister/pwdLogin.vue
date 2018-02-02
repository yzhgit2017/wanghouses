<template>
	<div class="login-wrapper" id="loginWrapper">
		<div class="logo"><img src="static/images/logo@3x.png"></div>
		<p class="name">旺屋</p>
		<div class="login-tab-wrapper">
			<router-link to="/pwdLogin"><span class="active">密码登录</span></router-link>
			<router-link to="/vcLogin"><span>验证码登录</span></router-link>
		</div>
		<div class="login-input-wrapper">
			<div class="input-item-wrapper">
				<div class="input-item">
					<span><i class="iconfont icon-dengluyemianyonghuming"></i></span>
					<input type="text" name="" placeholder="请输入用户名/手机号"  @blur="userBlur()" v-model="userMessage">
				</div>
				<mt-popup v-model="popupUser" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{userErrorMessage}}
			    </mt-popup>	
			</div>
			<div class="input-item-wrapper">
				<div class="input-item">
					<span><i class="iconfont icon-mima"></i></span>
					<input type="password" name="" placeholder="请输入密码"  @blur="passwordBlur()" v-model="passwordMessage">
				</div>
				<mt-popup v-model="popupPassword" popup-transition="popup-fade" class="popup-error-message" :modal="false">
			        {{passwordErrorMessage}}
			    </mt-popup>
			</div>
			<div class="login-btn" @click="goHome()">登录</div>
			<div class="bottom-container">
				<router-link to="" class="go-register">注册</router-link>
				<router-link to="" class="find-password">找回密码</router-link>
			</div>
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
				popupUser: false,
				userMessage: null,
				userErrorMessage: null,
				popupPassword: false,
				passwordMessage: null,
				passwordErrorMessage: null,			
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
			userBlur(){				
				let mes = this.userMessage;
				if (mes == null) {
					this.popupUser = true;
					this.userErrorMessage = '用户名不能为空';
				}else{
					this.popupUser = false;
				}
			},
			passwordBlur(){
				let mes = this.passwordMessage;
				if (mes == null) {
					this.popupPassword = true;
					this.passwordErrorMessage = '密码不能为空';
				}else{
					this.popupPassword = false;
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
				this.$store.dispatch('changeLoginPageHeightAction',h);
				// alert(document.querySelector('#loginWrapper').clientHeight)
			},
			goHome(){
				if (this.userMessage == null) {
					this.popupUser = true;
					this.userErrorMessage = '用户名不能为空';
					return;
				}else if (this.passwordMessage == null) {
					this.popupUser = false;
					this.popupPassword = true;
					this.passwordErrorMessage = '密码不能为空';
					return;
				}else{
					this.$router.push('/');
				}

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
						top: 50%;
				        transform: translateY(-50%);
						i{
							color: #999;
							font-size: .65rem;
						}
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
			display: block;
			height: 1.5rem;
			line-height: 1.5rem;
			background-color: $mainColor;
			border-radius: .75rem;
			text-align: center;
			color: #fff;
			width: 100%;
			margin-top: .75rem;
			font-size: .65rem;
		}
		.bottom-container{
			margin-top: .75rem;
			@include flex(space-between,normal);
			a{
				color: #999;
				font-size: .65rem;
			}
		}
		.third-party-logins-wrapper{
			position: absolute;
			bottom: .75rem;
			width: 100%;
			left: 0;
			// z-index: -1;
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