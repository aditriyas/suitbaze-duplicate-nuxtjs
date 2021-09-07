<template>
	<div class="main_content font-fira">
		<div class="container">
			<h2 class="main-content-title">Text Alignment</h2>
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
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"text-left"</span
					>&gt;</span
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				></code
			>
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
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"text-center"</span
					>&gt;</span
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				></code
			>
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
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"text-right"</span
					>&gt;</span
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				></code
			>
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
	width: 80%;
	margin-left: 230px;
	box-sizing: border-box;
	margin-top: 50px;
	height: 100%;
	overflow: hidden;
	padding: 60px 80px 80px 120px;
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
	font-family: 'Fira Code';
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

.hljs {
	display: block;
	overflow-x: auto;
	background: #efecf4;
	color: #585260;
	padding: 0.5em;
}

@media only screen and (max-width: 1240px) {
	.main_content {
		margin: 0px 80px 0px 100px;
		width: 92%;
	}
}
</style>
