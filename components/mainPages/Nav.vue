<template>
	<header class="header-nav">
		<div class="container">
			<nav>
				<LogoMain class="main-logo" />
			</nav>
			<a class="bzi-github"></a>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isSidebarOpen: false
		}
	},
	created() {
		this.$nuxt.$on('toggleSidebar', () => {
			this.isSidebarOpen = !this.isSidebarOpen
		})
	}
}
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
	height: 50px;
	box-shadow: 0px 6px 4px rgba($black, 0.2);
	margin-bottom: 10px;

	nav {
		display: flex;
		margin-left: -120px;
	}

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

	.bars {
		z-index: 4 !important;
		color: white;

		@include mq(48em) {
			display: none;
		}
	}
}

.bzi-github {
	color: #fff;
	width: 100px;
}

@media only screen and (min-width: 600px) {
	.bzi-github {
		color: #fff;
		width: 100px;
		padding-left: 150px;
	}
	.header-nav nav {
		display: flex;
		margin-left: -50px;
	}
}

@media only screen and (min-width: 768px) {
	.header-nav nav {
		display: flex;
		margin-left: -50px;
	}
	.bzi-github {
		color: #fff;
		width: 100px;
		padding-left: 200px;
	}
}

@media only screen and (min-width: 992px) {
	.header-nav nav {
		display: flex;
		margin-left: -50px;
	}
	.bzi-github {
		color: #fff;
		width: 100px;
		padding-left: 200px;
	}
}

@media only screen and (min-width: 600px) {
	.header-nav nav {
		display: flex;
		margin-left: -50px;
	}
	.bzi-github {
		color: #fff;
		width: 100px;
		padding-left: 200px;
	}
}
@media only screen and (min-width: 1000px) {
	.header-nav nav {
		display: flex;
		margin-left: -120px;
	}
	.bzi-github {
		color: #fff;
		width: 100px;
		padding-left: 200px;
	}
}
</style>
