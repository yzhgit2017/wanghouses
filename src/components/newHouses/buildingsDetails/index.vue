<template>
	<div class="container">
		<my-header buildingsDetailsHeader="true"></my-header>
		<swiper-detail></swiper-detail>
		<buildings-detail></buildings-detail>
		<function-swiper></function-swiper>
		<selling-point></selling-point>
		<anchor-wrapper></anchor-wrapper>
		<footer-detail></footer-detail>	
	</div>
</template>

<script>
	import myHeader from '@/components/public/header'
	import swiperDetail from './swiperDetail'
	import buildingsDetail from './buildingsDetail'
	import functionSwiper from './functionSwiper'
	import sellingPoint from './sellingPoint'
	import anchorWrapper from './anchor/anchorNav'
	import footerDetail from './footerDetail'
	export default {
		name: 'detailsIndex',
		components: {myHeader,swiperDetail,buildingsDetail,functionSwiper,sellingPoint,anchorWrapper,footerDetail},
	}
</script>

<style scoped lang="scss">
	
</style>