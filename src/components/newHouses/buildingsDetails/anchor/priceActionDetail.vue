<template>
	<div class="price-action-detail-wrapper" id="anchor-5">
		<div class="title">
			<h2>价格走势</h2>
		</div>
		<div class="line-chart-container">
			<div id="line-chart" style=""></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'priceActionDetail',
		data(){
			return {
				price: [2500,3000,4500,4200,3000]
			}
		},
		mounted(){
			this.newLineChart();
		},
		methods: {
			newLineChart: function(){
				var chart = document.getElementById('line-chart'); 
				if(!chart)
				{
				    return false;
				}
				var echart = this.$echarts.init(chart);
				var option = {
				    xAxis: {
				        type: 'category',
				        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月']
				    },
				    yAxis: {
				        type: 'value',				       
				    },
				    series: [{
				        data: [820, 932, 901, 934, 1290, 1330, 1320],
				        type: 'line'
				    }]
				};
				option.series[0].data = this.price;
				echart.setOption(option);				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	#anchor-5{
		@include pad;
		margin-top: .5rem;
		.title{
			height: 2rem;
			@include flex(space-between,center);
			border-bottom: 1px solid #ececec;
			a{
				color: #666;
			}
		}
		.line-chart-container{
			width: 100%;
			height: auto;
			overflow-x: scroll; 
			#line-chart{
				width: 560px;
				height: 320px;
			}
		}
	}
</style>