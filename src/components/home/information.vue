<template>
	<div class="information-wrapper">
		<div class="title">
			<span>热门资讯</span>
		</div>
		<ul class="information-list">
			<li>
				<router-link to="" class="tw-container">
				    <div class="tw">
						<div class="text">
							<p class="p1">各种装修盛行中国，</p>
							<p class="p2 text_p2">随着装修行业的发展，</p>
						</div>
						<div class="img">
							<img src="static/images/remenzixuntu@3x.png" class="information-img">
						</div>
					</div>
					<div class="author-date">
						<div class="author">张瑶</div>
						<div class="date">2017.08.12</div>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="tw-container">
				    <div class="tw">
						<div class="text">
							<p class="p1">各种装修盛行中国，中式装修有没落的趋势</p>
							<p class="p2 text_p2">随着装修行业的发展，装修浪蝶狂蜂经十东路开发家里的事交房</p>
						</div>
						<div class="img">
							<img src="static/images/remenzixuntu@3x.png" v-show="false" class="information-img">
						</div>
					</div>
					<div class="author-date">
						<div class="author">张瑶</div>
						<div class="date">2017.08.12</div>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="tw-container">
				    <div class="tw">
						<div class="text">
							<p class="p1">各种装修盛行中国，中式装修有没落的趋势</p>
							<p class="p2 text_p2">随着装修行业的发展，装修浪蝶狂蜂经十东路开发家里的事交房</p>
						</div>
						<div class="img">
							<img src="static/images/remenzixuntu@3x.png" class="information-img">
						</div>
					</div>
					<div class="author-date">
						<div class="author">张瑶</div>
						<div class="date">2017.08.12</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'information',
		mounted(){
			
		},
		methods:{
			setWidth(){
				

			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.information-wrapper{
		margin-top: .5rem;
		background-color: #fff;
		.title{
			height: 2rem;
			border-bottom: 1px solid #ececec;
			text-align: center;
			line-height: 2rem;
			span{
				display: inline-block;
				height: 100%;
				position: relative;
			}
			span:after{	
				content: '';			
				position: absolute;
				top: 1.9rem;
				left: 50%;
				width: 50%;
				height: 2px;
				background-color: #2bddbe;
				transform: translateX(-50%);
			}			
		}
		.information-list{
			padding: 0 .75rem .75rem .75rem;
			margin-top: -1px;
			li{
				padding: .75rem 0;
				border-top: 1px solid #ececec;
				.tw-container{
					display: block;
					height: auto;
					.tw{
						@include flex(space-between,center);
						.text{
							width: auto;
							.p1{
								color: #3c3f46;
								font-size: .7rem;
							}
							.p2{						    							
								overflow: hidden;
								text-overflow: ellipsis;
								color: #b3b6be;								
							}
						}
						.img{							
							img{
								width: 3.4rem;
								display: block;								
								padding-left: .5rem;
							}
						}
					}
					.author-date{
						height: 1rem;
						color: #b3b6be;
						@include flex(space-between,center);
					}
				}
			}
		}
	}
</style>