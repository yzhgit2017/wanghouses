<template>
	<div class="enter-wrapper">
		<header>
			<span class="back" @click="goBack()"><i class="iconfont icon-arrow"></i></span>
			<p>免费报名</p>
			<div class="take-place"></div>
		</header>
		<div class="banner"><img src="static/images/kftbaoming.png"></div>
		<form>
			<div class="input-item-container">			
				<div class="input-item-wrapper">
					<div class="input-item">
						<label>您的姓名</label>
						<input type="text" name="" placeholder="请输入您的姓名" required>
					</div>
				</div>
				<div class="input-item-wrapper">
					<div class="input-item">
						<label>报名人数</label>
						<input type="text" name="" placeholder="请输入报名人数">
					</div>
				</div>
				<div class="input-item-wrapper">
					<div class="input-item">
						<label>手机号码</label>
						<input type="text" name="" placeholder="请输入您的手机号码">
					</div>
				</div>
				<div class="input-item-wrapper">
					<div class="input-item">
						<label>楼盘意向</label>
						<ul class="buildings-list">
							<li v-for="(item,index) in buildingsList">
								<span @click="changeValue(index)"><i class="iconfont" v-bind:class="isIndex == index ? 'icon-gouxuan' : 'icon-weixuanzhongyuanquan'"></i></span>
								<span>{{item}}</span>
								<input type="radio" name="bn" :value="index" style="display: none;" v-model="isIndex">
							</li>
						</ul>
					</div>
				</div>
				<div class="input-item-wrapper">
					<div class="input-item">
						<label>验证码</label>
						<input type="text" name="" placeholder="请输入验证码">
						<span class="verification-code-span">获取验证码</span>
					</div>
				</div>			
			</div>
			<div class="enter-btn-wrapper">
				<div class="agreement-wrapper">
					<span class="agree-icon-wrapper" @click="agreeChange()"><i class="iconfont" v-bind:class="agree ? 'icon-gouxuan' : 'icon-weixuanzhongyuanquan'"></i></span>
					<span class="agree-text-wrapper">我已阅读并同意<router-link to="">《旺屋看房团活动声明》</router-link></span>
				</div>
				<input type="submit" name="" class="submit">
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'enter',
		data(){
			return {
				isIndex: 0,
				buildingsList:['明湖一号院','虞姬家园','远洋新天地','绿地海珀云翠'],
				agree: true,
				agreeValue: 1,
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			changeValue(index){
				this.isIndex = index;
			},
			agreeChange(){
				this.agree = !this.agree;
				if (this.agreeValue == 1) {
					this.agreeValue = 0;
				}else{
					this.agreeValue = 1;
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.enter-wrapper{
		width: 100%;
		height: 100%;
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
				width: .8rem;
				height: .8rem;
			}
		}
		.banner{
			margin-top: .5rem;
			img{
				width: 100%;
				display: block;
			}
		}
		.input-item-container{
			@include pad;
			margin-top: .5rem;
			.input-item-wrapper{
				position: relative;
				.input-item{
					@include flex(normal,top);
					padding: .5rem 0;
				    border-bottom: 1px solid #ececec;
				    font-size: .65rem;
				    position: relative;
				    label{
						-webkit-box-flex: 0.28;
					    -ms-flex: 0.28;
					    flex: 0.28;
					    height: 1rem;
					    line-height: 1rem;
					    padding-right: .4rem;
					    border-right: 1px solid #ececec;
					    text-align: right;
					    color: #666;
					}
					input{
						-webkit-box-flex: 1;
					    -ms-flex: 1;
					    flex: 1;
					    height: 1rem;
					    line-height: 1rem;
					    padding-left: .4rem;
					    position: relative;
					    color: #999;
					    border: none;
					}
					.buildings-list{
						-webkit-box-flex: 1;
					    -ms-flex: 1;
					    flex: 1;
					    padding-left: .4rem;					
					    li{
					    	span{
					    		color: $mainFontSizeColor;
					    		i{
						    		color: $mainColor;
						    	}
					    	}					    	
					    }
					}
					.verification-code-span{
						display: inline-block;
						position: absolute;
						right: 0;
						height: 1rem;					
						background-color: $mainColor;
						color: #fff;
						width: 4rem;				
						border-radius: .5rem;				
						font-size: .6rem;
						@include flex(center,center);
					}
				}
			}
		}
		.enter-btn-wrapper{
			@include pad;
			background: none;
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
				.agree-text-wrapper{
					color: #999;
					position: relative;
					top: -1px;
					font-size: .6rem;
					a{
						color: $mainColor;						
					}
				}
				
			}
			.submit{
				display: inline-block;
				width: 100%;
				border: none;
				height: 1.5rem;
				border-radius: .75rem;
				background-color: $mainColor;
				color: #fff;
				font-size: .7rem;
			}
		}
	}
</style>