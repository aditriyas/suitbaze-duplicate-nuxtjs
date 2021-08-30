<template>
	<header class="site-header">
		<Logo />
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss">
.site-header {
	display: flex;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	padding-top: 18px;
	padding-left: 10px;

	& > .container {
		display: flex;
		align-items: center;
	}

	&.transparent-header {
		background: transparent;

		.header-link {
			color: #fff;

			&:hover {
				color: $black20;
			}
		}
	}

	@media #{$large} {
		height: 70px;
	}
}
</style>
