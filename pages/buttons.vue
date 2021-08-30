<template>
	<div class="main_content font-fira">
		<h2 class="main-content-title">Buttons</h2>
		<div class="container">
			<p>
				<button class="btn--primary">Button Color</button>
				<button class="btn--ghost-primary">Button Color</button>
				<button class="btn--flat-primary button-flat-primary">
					Button Color
				</button>
			</p>
			<p>
				<button class="btn--secondary">Button Color</button>
				<button class="btn--ghost-secondary">Button Color</button>
				<button class="btn--flat-secondary button-flat-secondary">
					Button Color
				</button>
			</p>
			<p>
				<button class="btn--warning">Button Color</button>
				<button class="btn--ghost-warning">Button Color</button>
				<button class="btn--flat-warning button-flat-warning">
					Button Color
				</button>
			</p>
			<p>
				<button class="btn--danger">Button Color</button>
				<button class="btn--ghost-danger">Button Color</button>
				<button class="btn--flat-danger button-flat-danger">
					Button Color
				</button>
			</p>
			<p>
				<button class="btn--black">Button Color</button>
				<button class="btn--ghost-black">Button Color</button>
				<button class="btn--flat-black button-flat-black">Button Color</button>
			</p>
			<p>
				<button class="btn--light-grey">Button Color</button>
				<button class="btn--ghost-light-grey">Button Color</button>
				<button class="btn--flat-light-grey button-flat-light-grey">
					Button Color
				</button>
			</p>
			<p>
				<button class="btn--white button-white">Button Color</button>
				<button class="btn--ghost-white">Button Color</button>
				<button class="btn--flat-white button-flat-white">Button Color</button>
			</p>
			<p class="code-text">
				&lt;p class="text-left"&gt;Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quod ab quidem, vero ipsam eligendi, ratione
				reprehenderit saepe dignissimos error iusto! Hic fuga animi facilis
				optio, id delectus consequatur esse.&lt;/p&gt;
			</p>
			<hr />
			<footer class="container">© 2019 Suitmedia</footer>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'maincontent'
}
</script>

<style lang="scss" scoped>
.main_content {
	width: 70%;
	margin-left: 230px;
	box-sizing: border-box;
	margin-top: 50px;
	height: 100%;
	overflow: hidden;
	padding: 60px 80px 80px 120px;
	font-family: 'Poppins';
}

h2 {
	color: #ff6700;
}

.button-flat-primary {
	border-color: transparent;
	background: transparent;
	color: #0094ed;
}
.button-flat-secondary {
	border-color: transparent;
	background: transparent;
	color: #76848c;
}
.button-flat-danger {
	border-color: transparent;
	background: transparent;
	color: #f0210b;
}
.button-flat-black {
	border-color: transparent;
	background: transparent;
	color: #000;
}
.button-flat-warning {
	border-color: transparent;
	background: transparent;
	color: #ffae00;
}
.button-flat-light-grey {
	border-color: transparent;
	background: transparent;
	color: #d3d3d3;
}

.button-flat-white {
	border-color: transparent;
	background: transparent;
	color: #e8e8e8;
}
.button-white {
	border-color: #e8e8e8;
}
.list-inline {
	display: inline-block;
}

hr {
	margin-top: 20px;
	margin-bottom: 20px;
}

a {
	color: #0094ed;
	font-family: 'Poppins';
}

a:hover {
	color: #717171;
}

.main-content-text {
	font-family: 'Poppins';
}
.main-content-title,
h2 {
	font-weight: 700;
	color: #ff6700;
}

.wrapper .main_content .header {
	padding: 20px;
	background: #fff;
	color: #717171;
	border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info {
	margin: 40px;
	color: #717171;
	line-height: 25px;
}

.code-text {
	display: block;
	overflow-x: auto;
	background: #efecf4;
	color: #585260;
	padding: 0.5em;
	margin-bottom: 10px;
}

p {
	padding: 0.5em;
}

@media only screen and (max-width: 600px) {
	.main_content {
		margin: 0px 80px 0px 100px;
	}
}
</style>
