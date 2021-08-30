<template>
	<div class="main_content font-fira">
		<div class="container">
			<h2 class="main-content-title">Environment</h2>
			<ul>
				<li>
					<p class="main-content-text">
						<strong>Environment</strong> versi 8 keatas. Node harus di-<em
							>install</em
						>
						sebelum meng-<em>install</em>&nbsp; lainnya.
					</p>
					<p class="main-content-link">
						<a href="https://nodejs.org/en/">Install</a>&nbsp;|
						<a href="https://nodejs.org/dist/latest-v4.x/docs/api/">Download</a>
					</p>
				</li>
				<li>
					<p class="main-content-text">
						<strong>Yeoman.</strong>&nbsp;Jalankan perintah di bawah ini di
						<em>command prompt</em>
					</p>
					<code class="code-text">npm i -g yo</code>
				</li>
				<li>
					<p class="main-content-text">
						<strong>Gulp.</strong>&nbsp;Jalankan perintah di bawah ini di
						<em>command prompt</em>
					</p>
					<code class="code-text">npm i -g gulp-cli</code>
				</li>
				<li>
					<p class="main-content-text">
						<strong>Git</strong>
					</p>
					<p class="main-content-link">
						<a href="http://www.git-scm.com/download/">Install</a>&nbsp;|
						<a href="https://github.s3.amazonaws.com/media/progit.en.pdf"
							>Pro Git (PDF)</a
						>
					</p>
				</li>
				<li>
					<p class="main-content-text">
						<strong>XAMPP</strong>
					</p>
					<p class="main-content-link">
						<a href="http://www.git-scm.com/download/">Install</a>
					</p>
				</li>
				<li>
					<p class="main-content-text">
						<strong>Generator Baze</strong>
					</p>
					<p class="main-content-text">
						Install <a>generator baze</a>&nbsp;dengan menjalankan perintah di
						bawah ini.
					</p>
					<code class="code-text">npm install generator-baze -g</code>
					<p class="main-content-text">
						Untuk install ke dalam project frontend, jalankan
					</p>
					<code class="code-text">yo baze</code>
				</li>
			</ul>
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

strong {
	font-weight: bold;
}

ul,
li,
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
}

@media only screen and (max-width: 600px) {
	.main_content {
		margin: 0px 80px 0px 100px;
	}
}
</style>
