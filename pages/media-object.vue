<template>
	<div class="main_content">
		<div class="container">
			<h2>Media Objects</h2>
			<figure class="media">
				<img src="~assets/img/site-logo.png" width="70px" class="mr-8" />
				<div class="media-content">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
					incidunt tempora ratione sapiente, nesciunt consectetur officiis
					commodi soluta. Sit sapiente veritatis non quia vitae, facilis nam
					rerum, reprehenderit modi. Fugiat?
				</div>
			</figure>
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">figure</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media"</span
					>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media-figure"</span
					>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">img</span>
					<span class="hljs-attr">src</span>=<span class="hljs-string"
						>"..."</span
					>
					<span class="hljs-attr">alt</span>=<span class="hljs-string">""</span
					>&gt;</span
				><br />
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media-content"</span
					>&gt;</span
				><br />
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
				incidunt tempora ratione sapiente, nesciunt consectetur officiis commodi
				soluta. Sit sapiente veritatis non quia vitae, facilis nam rerum,
				reprehenderit modi. Fugiat?
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">figure</span>&gt;</span
				></code
			>
			<hr />
			<h2>With Title, Button, and Link</h2>
			<figure class="media">
				<div class="media-figure">
					<img src="~assets/img/site-logo.png" alt="" width="150px" />
				</div>
				<div class="media-content">
					<h4 class="media-title text-primary">Title</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<p class="mb-0">
						<button class="btn--primary btn--small btn--icon mr-8">
							<i class="bzi-globe"></i>
						</button>
						<a href="#">Visit somewhere...</a>
					</p>
				</div>
			</figure>
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">figure</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media"</span
					>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media-figure"</span
					>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">img</span>
					<span class="hljs-attr">src</span>=<span class="hljs-string"
						>"..."</span
					>
					<span class="hljs-attr">alt</span>=<span class="hljs-string">""</span>
					<span class="hljs-attr">width</span>=<span class="hljs-string"
						>"150px"</span
					>&gt;</span
				><br />
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media-content"</span
					>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">h4</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"media-title text-primary"</span
					>&gt;</span
				>Title<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h4</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>&gt;<br
				/></span>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.<br />
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;<br
				/></span>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"mb-0"</span
					>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">button</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"btn--primary btn--small btn--icon mr-8"</span
					>&gt;</span
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">i</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"fas fa-thumbs-up"</span
					>&gt;</span
				><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span
				><span class="hljs-tag"
					>&lt;/<span class="hljs-name">button</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">a</span>
					<span class="hljs-attr">href</span>=<span class="hljs-string"
						>"#"</span
					>&gt;</span
				>Visit somewhere...<span class="hljs-tag"
					>&lt;/<span class="hljs-name">a</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;<br
				/></span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">figure</span>&gt;</span
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
figure {
	margin: 0 0 1.6em 0;
}
.btn--small.btn--icon {
	width: 34px;
	height: 34px;
	padding: 0;
	font-size: 16px;
}
h2 {
	color: #ff6700;
}

hr {
	margin-top: 20px;
	margin-bottom: 20px;
}

.main-content-title,
h2 {
	font-weight: 700;
	color: #ff6700;
	font-family: 'Fira Code';
}
.media {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
}

.media-figure {
	margin-right: 0;
	padding-right: 0;
	display: inline-block;
}

.code-text {
	display: block;
	overflow-x: auto;
	background: #efecf4;
	color: #585260;
	padding: 0.5em;
	margin-bottom: 10px;
	overflow-x: scroll;
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
