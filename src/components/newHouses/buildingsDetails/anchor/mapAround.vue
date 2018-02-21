<template>
	<div class="map-around-wrapper" id="anchor-6">
		<div class="title">
			<h2><router-link to="/mapAround">周边配套</router-link></h2>
			<router-link to="">更多详情</router-link>
		</div>
		<div id="mapAround">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mapAround',
		mounted(){
			this.showTitleOnMap();
		},
		methods: {
			showTitleOnMap:function(){
				var map = new BMap.Map('mapAround');
				var point = new BMap.Point(117.013162,36.681461)
				map.centerAndZoom(point,11);
	            map.enableScrollWheelZoom(true);
	            var marker = new BMap.Marker(point);  // 创建标注
	            map.addOverlay(marker);              // 将标注添加到地图中
	            var opts = {
				    position : point,    // 指定文本标注所在的地理位置
				    offset   : new BMap.Size(20, -10)    //设置文本偏移量
				}
				var label = new BMap.Label("明湖广场", opts);  // 创建文本标注对象
				label.setStyle({
					color : "#fff",
					fontSize : "12px",
					height : "20px",
					lineHeight : "20px",
					backgroundColor: 'rgba(0,0,0,0.5)',
					border: 'none',
					padding: '2px 8px',
					borderRadius: '3px',
					zIndex: '10',
					fontFamily:"微软雅黑"
				 });
				marker.setLabel(label);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/mixin.scss';
	.map-around-wrapper{		
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
		#mapAround{
			height: 7.5rem;
		}
	}
</style>