<template>
	<div class="main_content font-fira">
		<div class="container">
			<h2 class="main-content-title">Heading</h2>
			<h1 class="heading-example">Heading 1</h1>
			<h2 class="heading-example">Heading 2</h2>
			<h3 class="heading-example">Heading 3</h3>
			<h4 class="heading-example">Heading 4</h4>
			<h5 class="heading-example">Heading 5</h5>
			<h6 class="heading-example">Heading 6</h6>
			<code class="html hljs xml code-text"
				><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span
				>Heading 1<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h1</span>&gt;</span
				><br />
				<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span
				>Heading 2<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h2</span>&gt;</span
				><br />
				<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span
				>Heading 3<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h3</span>&gt;</span
				><br />
				<span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span
				>Heading 4<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h4</span>&gt;</span
				><br />
				<span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span
				>Heading 5<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h5</span>&gt;</span
				><br />
				<span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span
				>Heading 6<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h6</span>&gt;</span
				></code
			>
			<hr />
		</div>
		<div class="container">
			<h2 class="main-content-title">Heading Style</h2>
			<p class="h1 text-size-example">Text size adjust h1</p>
			<p class="h2 text-size-example">Text size adjust h2</p>
			<p class="h3 text-size-example">Text size adjust h3</p>
			<p class="h4 text-size-example">Text size adjust h4</p>
			<p class="h5 text-size-example">Text size adjust h5</p>
			<p class="h6 text-size-example">Text size adjust h6</p>
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"h1"</span
					>&gt;</span
				>Text size adjust h1<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"h2"</span
					>&gt;</span
				>Text size adjust h2<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"h3"</span
					>&gt;</span
				>Text size adjust h3<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"h4"</span
					>&gt;</span
				>Text size adjust h4<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"h5"</span
					>&gt;</span
				>Text size adjust h5<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"h6"</span
					>&gt;</span
				>Text size adjust h6<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				></code
			>
			<hr />
			<footer class="container mb-32">© 2019 Suitmedia</footer>
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
	width: 80%;
	margin-left: 230px;
	box-sizing: border-box;
	margin-top: 50px;
	height: 100%;
	overflow: hidden;
	padding: 60px 80px 80px 120px;
}

footer {
	margin: 0;
}

hr {
	margin-top: 20px;
	margin-bottom: 20px;
}

.text-size-example {
	font-family: 'Poppins';
}

.heading-example {
	color: #4d4d4d;
	padding: 3px;
	font-family: 'Poppins';
}

a {
	color: #0094ed;
	font-family: 'Poppins';
}

a:hover {
	color: #717171;
}

.heading-tag {
	color: #be4678;
}

.main-content-text {
	font-family: 'Poppins';
}
.main-content-title {
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
li {
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

.heading-tag {
	margin: 0;
	font-size: 1em;
}

.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-name,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
	color: #be4678;
	font-weight: lighter;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet {
	color: #2a9292;
}

@media only screen and (max-width: 1240px) {
	.main_content {
		margin: 0px 80px 0px 100px;
		width: 92%;
	}
}
</style>
