<template>
	<div class="alert--primary alert--popup-content">
		<span class="alert--close js-alert-close"><i class="bzi-times"></i></span>
		<h4>Lorem Ipsum!</h4>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</p>
		<hr />
		<p class="mb-0">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
			obcaecati tempora. Quod, nesciunt culpa sunt sit itaque voluptate
			molestiae in quia quos quam tempora sequi illo molestias? Rerum, sit?
		</p>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.alert--primary {
	color: #0094ed;
	background: #91d6ff;
}

.alert--popup-content {
	width: 80%;
	margin: auto;
}

.alert,
.alert--suitmedia,
.alert--primary,
.alert--secondary,
.alert--warning,
.alert--danger,
.alert--black,
.alert--light-grey,
.alert--white {
	position: relative;
	padding: 8px 16px;
	border: 1px solid;
	margin: 15px 0;
	font-family: inherit;
	line-height: 1.6;
	vertical-align: middle;
}
</style>
