<template>
	<div class="test-wrapper">
		<ul>
			<li v-for="item in data">{{item.shishen}}</li>
		</ul>
		<div>aa</div>
	</div>
</template>

<script>
    import qs from 'qs'
	export default {
		name: 'testWrapper',
		data(){
			return {
				data: [],
			}
		},
		mounted(){
			this.aa();
		},
		methods:{
			aa(){
				alert(1)
				this.$http.post('http://www.jiacai168.cn/Home/jiekou/jiekou',qs.stringify({id:4})).then(response => {
					console.log(response.data)
					this.data = response.data;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.test-wrapper{

	}
</style>