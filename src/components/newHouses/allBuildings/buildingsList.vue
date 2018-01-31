<template>
	<div class="buildings-list-wrapper">
		<ul class="buildings-list">
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>昌乐首席s5社区</span><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</span><span class="price">118万</span></p>
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
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>昌乐首席s5社区</span><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</span><span class="price">118万</span></p>
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
					<div class="icon-label" v-show="false"><img src="static/images/remai@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>昌乐首席s5社区</span><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</span><span class="price">118万</span></p>
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
					<div class="icon-label" v-show="false"><img src="static/images/remai@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>昌乐首席s5社区</span><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</span><span class="price">118万</span></p>
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
					<div class="icon-label" v-show="false"><img src="static/images/remai@3x.png"></div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="img-wrapper">
						<img src="static/images/loupantux.png">
					</div>
					<div class="text-wrapper">
						<p class="p1">明星小区、精装修、家具齐全，拎包入住</p>
						<p class="p2"><span>昌乐首席s5社区</span><span>一室一厅</span><span>75㎡</span></p>
						<p class="p3"><span class="address">历下区-县西巷北口1200号多福多寿范德萨范德萨发</span><span class="price">118万</span></p>
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
					<div class="icon-label" v-show="false"><img src="static/images/remai@3x.png"></div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'buildings-list-wrapper',
		data(){
			return {
				labels: ['住宅','在售','精装','地铁','随时看房'],
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.buildings-list-wrapper{
		margin-top: 3.6rem;
		background-color: #fff;
		.buildings-list{
			padding: 0 .75rem .75rem .75rem;
			margin-top: -1px;
			li{
				padding: .75rem 0;
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
						.p1{
							color: #333;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: .7rem;
						}
						.p2{
							color: #333;
							span{
								margin-right: .5rem;
								display: inline-block;
							}
						}
						.p3{
							color: #999;
							.address{
								display: inline-block;
								width: 6rem;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								margin-right: .6rem;
								vertical-align: middle;
							}
							.price{
								color: red;
								font-size: .65rem;
								vertical-align: middle;
							}
						}
						.price{
							color: red;
							font-size: .7rem;
							margin-right: 1rem;
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