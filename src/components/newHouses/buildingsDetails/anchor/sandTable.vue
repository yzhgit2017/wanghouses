<template>
	<div class="sand-table-wrapper" id="anchor-7">
		<div class="title">
			<h2><router-link to="/est">电子沙盘</router-link></h2>
			<router-link to="">更多详情</router-link>
		</div>
		<router-link to="/est" class="link-detail">
			<div class="drag_wrapper">
				<img src="static/images/shapantu.jpg">
				<label class="loudong-label-wrapper" v-for="(item,index) in labelArray" :style="{'left':item.left,'top':item.top}">
					<label class="label-number">{{item.text}}</label><label class="label-state" :style="{'background-color':item.backgroundColor}">{{item.state}}</label><i></i>
				</label>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'sandTable',
		data(){
			return {
				labelArray:[
					{
						text: '1#',
						left: '371.21875px',
						top: '246px',
						state: '期房',
						backgroundColor: '#7ecb69'
					},
					{
						text: '2#',
						left: '293.21875px',
						top: '189px',
						state: '尾房',
						backgroundColor: '#c90207'
					},
				]
			}
		},
	}
</script>

<style scoped lang="scss">
    @import 'static/css/mixin.scss';
	.sand-table-wrapper{
		margin-top: .5rem;
		.title{
			@include pad;
			height: 2rem;
			@include flex(space-between,center);
			border-bottom: 1px solid #ececec;
			a{
				color: #666;
			}
		}
		.link-detail{
			display: block;
			height: 10rem;
			overflow: hidden;
			position: relative;
			width: 100%;
			.drag-wrapper{
				position: absolute;
				img{
					display: block;
				}
				.loudong-label-wrapper{
					position: absolute;
					.label-number{
						display: inline-block;
					    white-space: nowrap;
					    line-height: 26px;
					    padding: 0 10px;
					    outline: none;
					    background: #fff;
					    color: #000;
					    border-top-left-radius: 2px;
					    border-bottom-left-radius: 2px
					}
					.label-state{
						white-space: nowrap;
					    line-height: 26px;
					    padding: 0 10px;
					    outline: none;
					    display: inline-block;
					    background: #FB841F;
					    color: #fff;
					    border-top-right-radius: 2px;
					    border-bottom-right-radius: 2px;
					}
					i{
						left: 5px;
					    top: 26px;
					    height: 0;
					    width: 0;
					    overflow: hidden;
					    border-color: #fff transparent transparent transparent;
					    border-style: solid dashed dashed dashed;
					    border-width: 10px 10px 10px 0;
					    position: absolute;
					}
				}
			}
		}
	}
</style>