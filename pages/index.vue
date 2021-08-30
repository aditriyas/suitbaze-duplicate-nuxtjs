<template>
	<main class="site-main text-white">
		<introContentsHome />
	</main>
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
.site-main {
	margin: 0;
	height: 100%;
}

.btn--primary {
	width: 50%;
	margin-right: 0px;
	// margin-right: -450px;
}
.btn--ghost-white {
	width: 50%;
	// margin-left: -450px;
}

.bzg_c {
	width: 40%;
	align-items: center;
	margin-left: 100px;
}
</style>
