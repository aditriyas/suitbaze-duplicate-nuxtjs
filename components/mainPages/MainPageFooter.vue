<template>
	<div class="container">
		<hr />
		<footer class="container mb-32">© 2019 Suitmedia</footer>
	</div>
</template>

<script>
export default {}
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

h5 {
	padding: 10px;
}

.unordered-list,
.list-nostyle,
.ordered-list {
	font-family: 'Poppins';
	font-weight: 100;
	margin-left: 40px;
}

.list-nostyle {
	padding-bottom: 10px;
}

li {
	display: list-item;
	text-align: -webkit-match-parent;
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

h5 {
	font-size: 1.2em;
	line-height: 1.33333em;
	margin-left: 30px;
	font-family: 'Poppins';
}

strong {
	font-weight: bold;
}

ul,
p {
	font-weight: 100;
	font-size: 1em;
}

.code-text {
	display: block;
	overflow-x: auto;
	background: #efecf4;
	color: #585260;
	padding: 0.5em;
	margin-bottom: 10px;
	margin-left: 40px;
}

@media only screen and (max-width: 600px) {
	.main_content {
		margin: 0px 80px 0px 100px;
	}
}
</style>
