<template>
	<header class="header-nav">
		<div class="container">
			<LogoMain />
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header-nav {
	display: flex;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #ff6600;
	height: 60px;
	box-shadow: 0px 6px 4px rgba($black, 0.2);
	margin-bottom: 10px;

	& > .container {
		display: flex;
		justify-content: space-between;
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
