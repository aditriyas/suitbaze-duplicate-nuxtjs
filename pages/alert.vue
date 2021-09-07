<template>
	<div class="main_content font-fira">
		<div class="container">
			<h2 class="main-content-title">Alert</h2>
			<div class="alert">Alert default</div>
			<div class="alert--primary">Alert primary</div>
			<div class="alert--secondary">Alert secondary</div>
			<div class="alert--warning">Alert warning</div>
			<div class="alert--danger">Alert danger</div>
			<div class="alert--black">Alert black</div>
			<div class="alert--light-grey">Alert light-grey</div>
			<div class="alert--white">Alert white</div>

			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert"</span
					>&gt;</span
				>Alert default<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--primary"</span
					>&gt;</span
				>Alert primary<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--secondary"</span
					>&gt;</span
				>Alert secondary<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--warning"</span
					>&gt;</span
				>Alert warning<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--danger"</span
					>&gt;</span
				>Alert danger<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--black"</span
					>&gt;</span
				>Alert black<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--light-grey"</span
					>&gt;</span
				>Alert light-grey<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				><br />
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--white"</span
					>&gt;</span
				>Alert white<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				></code
			>
			<hr />
		</div>
		<div class="container">
			<h2 class="main-content-title">Alert Box</h2>
			<button
				@click="showDialog = true"
				class="btn--primary js-trigger-alert"
				data-alert="#alert1"
			>
				Alert 1
			</button>
			<button
				@click="showDialog = true"
				class="btn--primary js-trigger-alert"
				data-alert="#alert2"
			>
				Alert 2
			</button>
			<code class="html hljs xml code-text"
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">button</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"btn--primary js-trigger-alert"</span
					>
					<span class="hljs-attr">data-alert</span>=<span class="hljs-string"
						>"#alert1"</span
					>&gt;</span
				>Alert 1<span class="hljs-tag"
					>&lt;/<span class="hljs-name">button</span>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">button</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"btn--primary js-trigger-alert"</span
					>
					<span class="hljs-attr">data-alert</span>=<span class="hljs-string"
						>"#alert2"</span
					>&gt;</span
				>Alert 2<span class="hljs-tag"
					>&lt;/<span class="hljs-name">button</span>&gt;</span
				>

				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--popup"</span
					>
					<span class="hljs-attr">id</span>=<span class="hljs-string"
						>"alert1"</span
					>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--primary alert--popup-content"</span
					>
					&gt;</span
				>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">span</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--close js-alert-close"</span
					>&gt;</span
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">i</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"fas fa-times"</span
					>&gt;</span
				><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span
				><span class="hljs-tag"
					>&lt;/<span class="hljs-name">span</span>&gt;</span
				>
				<span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span
				>Lorem Ipsum!<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h4</span>&gt;</span
				>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				>
				<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">p</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"mb-0"</span
					>&gt;</span
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
				obcaecati tempora. Quod, nesciunt culpa sunt sit itaque voluptate
				molestiae in quia quos quam tempora sequi illo molestias? Rerum,
				sit?<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				>

				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--popup"</span
					>
					<span class="hljs-attr">id</span>=<span class="hljs-string"
						>"alert2"</span
					>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">div</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--danger alert--popup-content"</span
					>
					&gt;</span
				>
				<span class="hljs-tag"
					>&lt;<span class="hljs-name">span</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"alert--close js-alert-close"</span
					>&gt;</span
				><span class="hljs-tag"
					>&lt;<span class="hljs-name">i</span>
					<span class="hljs-attr">class</span>=<span class="hljs-string"
						>"fas fa-times"</span
					>&gt;</span
				><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span
				><span class="hljs-tag"
					>&lt;/<span class="hljs-name">span</span>&gt;</span
				>
				<span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span
				>Number 2<span class="hljs-tag"
					>&lt;/<span class="hljs-name">h4</span>&gt;</span
				>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span
				>Test Number 2<span class="hljs-tag"
					>&lt;/<span class="hljs-name">p</span>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				>
				<span class="hljs-tag"
					>&lt;/<span class="hljs-name">div</span>&gt;</span
				></code
			>
			<hr />
		</div>
		<footer class="container">© 2019 Suitmedia</footer>
	</div>
</template>

<script>
export default {
	layout: 'maincontent'
}
</script>

<style lang="scss" scoped>
p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.main_content {
	width: 80%;
	margin-left: 230px;
	box-sizing: border-box;
	margin-top: 50px;
	height: 100%;
	overflow: hidden;
	padding: 60px 80px 80px 120px;
}

hr {
	margin-top: 20px;
	margin-bottom: 20px;
}

.heading-example {
	color: #4d4d4d;
	padding: 3px;
}

a {
	// color: #0094ed;
	font-family: 'Poppins';
}

p {
	font-family: 'Poppins', monospace;
}

a:hover {
	color: #717171;
}

.main-content-text {
	font-family: 'Poppins';
}
.main-content-title {
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

strong {
	font-weight: bold;
}

ul,
li,
p {
	font-weight: 100;
	font-size: 1em;
}

.alert,
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
	background-color: #f0f0f0;
}

.alert--primary {
	color: #0094ed;
	background: #91d6ff;
}

.alert--secondary {
	color: #76848c;
	background: #cfd4d6;
}

.alert--warning {
	color: #ffae00;
	background: #ffe2a3;
}

.alert--danger {
	color: #f0210b;
	background: #fbaca3;
}

.alert--black {
	color: #000;
	background: #525252;
}

.alert--light-grey {
	color: #a0a0a0;
	background: #d3d3d3;
}

.alert--white {
	color: #cccccc;
	background: #fff;
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

.code-text {
	display: block;
	overflow-x: auto;
	background: #efecf4;
	color: #585260;
	padding: 0.5em;
	margin-bottom: 10px;
	margin-top: 15px;
	overflow: auto;
	width: 100%;
}

.text-color-tag {
	margin: 0;
	font-size: 1em;
	font-family: monospace;
}

@media only screen and (max-width: 1240px) {
	.main_content {
		margin: 0px 80px 0px 100px;
		width: 92%;
	}
}
</style>
