<template>
	<div class="intro-contents text-center">
		<img src="~assets/img/site-logo.png" alt="" class="content-logo" />
		<p class="intro-text">A Minimal Setup For Your Environment</p>
		<IntroButtons />
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Suit Baze'
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.intro-text {
	font-size: 30px;
	padding-top: 10px;
	font-weight: 150px;
	font-family: 'Fira Code', monospace;
}

.content-logo,
img {
	width: 150px;
	align-items: center;
	padding-top: 15rem;
}
</style>
