<template>
	<div class="buildings-detail-wrapper">
		<div class="title">
			<div class="name">御苑世纪城</div>
			<div class="average-price">均价<span class="price">8800</span>元/㎡</div>
		</div>
		<div class="content">
			<div class="state">
				<template v-for="label in labels">
					<span v-if="label == '住宅'" style="color: #44cc00;">{{label}}</span>
					<span v-else-if="label == '在售'" style="color: #cd8902;">{{label}}</span>
					<span v-else-if="label == '精装'" style="color: #00cccb;">{{label}}</span>
					<span v-else-if="label == '地铁'" style="color: #0044cb;">{{label}}</span>
					<span v-else-if="label == '随时看房'" style="color: #8800cc;">{{label}}</span>
					<span v-else></span>
				</template>
			</div>
			<div class="time">
				<label>开盘时间：</label>
				<span>2017.09.12</span>
			</div>
			<div class="paragraph">
				<label class="label">楼盘地址：</label>
				<span class="address">槐荫区张庄路521号</span>
			</div>
			<div class="paragraph">
				<label class="label">佣金：</label>
				<span class="unit-price"><span class="price">5000</span>&nbsp;元/套<span class="higher-commission">更高佣金</span><span class="cash-commission">佣金提取详情</span></span>				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'buildingsDetail',
		data(){
			return {
				labels: ['住宅','在售','精装','地铁','随时看房'],
			}
		}

	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.buildings-detail-wrapper{
		background-color: #fff;
		.title{
			padding: .5rem 15px;
			box-sizing: border-box;
			border-bottom: 1px solid #ececec;
			@include flex(space-between,center);
			.name{
				font-size: .9rem;
				font-weight: bold;
			}
			.average-price{
				font-size: .7rem;
				color: #666;
				.price{
					color: red;
					font-size: .8rem;
					font-weight: bold;
					padding: 0 5px;
				}
			}
		}
		.content{
			padding: .6rem 15px;
			.state{
				span{
					display: inline-block;
					padding: 1px 8px;
					border: 1px solid #ececec;
					border-radius: 2px;
					margin-right: 5px;
					margin-bottom: .3rem;
				}
			}
			.time{
				margin-top: .3rem;
				label{
					width: 3rem;
					display: inline-block;
					color: #999;
					text-align: right;
				}
				span{
					color: #333;
				}
			}
			.paragraph{
				margin-top: .6rem;
				label{
					display: inline-block;
					vertical-align: top;
					width: 3rem;					
					color: #999;					
					text-align: right;
				}
				span{
					display: inline-block;
					vertical-align: top;
					color: #333;
				}				
				.address{
					width: 10rem;					
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;									
				}
				.unit-price{
					.price{
						font-size: .7rem;
						color: red;
						position: relative;
						top: -2px;
					}
					.higher-commission{
						display: inline-block;
						padding: 1px 8px;
						background-color: #e0ad12;
						color: #fff;
						border-radius: 10px;
						margin-left: 5px;
					}
					.cash-commission{
						color: #f77219;
						margin-left: 5px;
					}
				}
				
			}
		}
	}
</style>