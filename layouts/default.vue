<template>
	<div id="app" class="sticky-footer-container">
		<div class="sticky-footer-container-item">
			<Header />
		</div>
		<div class="sticky-footer-container-item --pushed">
			<nuxt />
		</div>
		<div class="sticky-footer-container-item">
			<Footer />
		</div>
	</div>
</template>

<style lang="scss">
#app {
	background: #555;
}
</style>
