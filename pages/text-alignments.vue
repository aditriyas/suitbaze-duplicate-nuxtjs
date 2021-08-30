<template>
	<div class="main_content font-fira">
		<h2 class="main-content-title">Text Alignment</h2>
		<div class="container">
			<h5 class="text-alignment-example">Left Align</h5>
			<p class="text-left">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<p class="code-text">
				&lt;p class="text-left"&gt;Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quod ab quidem, vero ipsam eligendi, ratione
				reprehenderit saepe dignissimos error iusto! Hic fuga animi facilis
				optio, id delectus consequatur esse.&lt;/p&gt;
			</p>
			<h5 class="text-alignment-example">Center Align</h5>
			<p class="text-center">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<p class="code-text">
				&lt;p class="text-center"&gt;Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Corrupti quod ab quidem, vero ipsam eligendi, ratione
				reprehenderit saepe dignissimos error iusto! Hic fuga animi facilis
				optio, id delectus consequatur esse.&lt;/p&gt;
			</p>
			<h5 class="text-alignment-example">Right Align</h5>
			<p class="text-right">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<p class="code-text">
				&lt;p class="text-right"&gt;Lorem ipsum dolor sit amet consectetur
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
	margin-bottom: 20px;
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
