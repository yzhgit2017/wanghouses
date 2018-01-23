<template>
	<div class="tenBuildings-wrapper">
		<div class="top-title">
			<span>十盘必看</span>
		</div>
		<ul class="tenBuildings-list">
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label"><img src="static/images/remai@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label"><img src="static/images/tejia@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label"><img src="static/images/remai@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p><span class="title">全程一号院</span><span class="sub-title">昌乐首席5s社区</span></p>
						<p class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</p>
						<p class="p3"><span class="price">2200/㎡</span>佣金：<span class="commission">6000</span>&nbsp;元</p>
						<p class="p4">
							<template v-for="label in labels">
								<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
								<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
								<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
								<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
								<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
								<span v-else></span>
							</template>
						</p>						
					</div>
					<div class="icon-label" v-if="false"><img src=""></div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'tenBuildings',
		data(){
			return {
				labels: ['住宅','在售','精装','地铁','随时看房'],
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.tenBuildings-wrapper{
		margin-top: .5rem;
		background-color: #fff;
		.top-title{
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
		.tenBuildings-list{
			padding: 0 15px 15px 15px;
			margin-top: -1px;
			li{
				padding: 15px 0;
				border-top: 1px solid #ececec;
				a{
					position: relative;
					display: block;
					@include flex(left,normal);
					.img-wrapper{
						width: 28%;
						img{
							width: 100%;
							// height: 4rem;
							display: block;							
							margin-top: .5rem;
						}
					}
					.text-wrapper{						
						width: 72%;
						padding: 0 .5rem;
						box-sizing: border-box;
						.title{
							font-size: .7rem;
							font-weight: bold;
							color: #333;
						}
						.sub-title{
							margin-left: .5rem;
							color: #333;
						}
						.address{
							color: #999;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.p3{
							color: #999;
						}
						.price{
							color: red;
							font-size: .7rem;
							margin-right: 1rem;
						}
						.commission{
							color: red;
							font-size: .65rem;
						}
						.p4{
							span{
								display: inline-block;
								padding: 1px 8px;
								border: 1px solid #ececec;
								border-radius: 2px;
								margin-right: 5px;
								margin-bottom: 5px;
							}
						}						
					}
					.icon-label{
						position: absolute;
						top: 0;
						right: 0;
						width: 1.8rem;
						img{
							display: block;
							width: 100%;								
						}
					}
				}
			}
		}
	}
</style>