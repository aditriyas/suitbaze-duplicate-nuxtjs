<template>
	<div class="main_content">
		<div class="container">
			<h2 class="main-content-title">Lists</h2>
			<h5>Ordered List</h5>
			<ol class="ordered-list">
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
				<li>
					Incidunt magni consequatur adipisci officiis vero placeat consectetur
				</li>
				<li>
					id facere,
					<ol type="a">
						<li>molestiae in,</li>
						<li>ducimus necessitatibus hic ad esse consequuntur</li>
					</ol>
				</li>
				<li>dignissimos sequi illum doloremque.</li>
			</ol>
			<p class="code-text">
				&lt;ol&gt;<br />
				&lt;li&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Velit debitis tempore repellat dolorem magni placeat magnam deleniti
				exercitationem minima iusto, quasi provident nostrum aut vitae
				blanditiis quas optio! Ducimus, quo.&lt;/li&gt;<br />
				&lt;li&gt;Incidunt magni consequatur adipisci officiis vero placeat
				consectetur&lt;/li&gt;<br />
				&lt;li&gt;id facere,<br />
				&lt;ol type="a"&gt;<br />
				&lt;li&gt;molestiae in,&lt;/li&gt;<br />
				&lt;li&gt;ducimus necessitatibus hic ad esse consequuntur&lt;/li&gt;<br />
				&lt;/ol&gt;<br />
				&lt;/li&gt;<br />
				&lt;li&gt;dignissimos sequi illum doloremque.&lt;/li&gt;<br />
				&lt;/ol&gt;
			</p>
			<h5>Unordered List</h5>
			<ul class="unordered-list">
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
				<li>
					Incidunt magni consequatur adipisci officiis vero placeat consectetur
				</li>
				<li>
					id facere,
					<ul>
						<li>molestiae in,</li>
						<li>ducimus necessitatibus hic ad esse consequuntur</li>
					</ul>
				</li>
				<li>dignissimos sequi illum doloremque.</li>
			</ul>
			<p class="code-text">
				&lt;ul&gt;<br />
				&lt;li&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Velit debitis tempore repellat dolorem magni placeat magnam deleniti
				exercitationem minima iusto, quasi provident nostrum aut vitae
				blanditiis quas optio! Ducimus, quo.&lt;/li&gt;<br />
				&lt;li&gt;Incidunt magni consequatur adipisci officiis vero placeat
				consectetur&lt;/li&gt;<br />
				&lt;li&gt;id facere,<br />
				&lt;ul&gt;<br />
				&lt;li&gt;molestiae in,&lt;/li&gt;<br />
				&lt;li&gt;ducimus necessitatibus hic ad esse consequuntur&lt;/li&gt;<br />
				&lt;/ul&gt;<br />
				&lt;/li&gt;<br />
				&lt;li&gt;dignissimos sequi illum doloremque.&lt;/li&gt;<br />
				&lt;/ul&gt;
			</p>
			<h5>Inline List</h5>
			<ol class="list-inline">
				<li>Lorem ></li>
				<li>Ipsum ></li>
				<li>Dolor</li>
			</ol>
			<p class="code-text">
				&lt;ol class="list-inline"&gt;<br />
				&lt;li&gt;Lorem&lt;/li&gt;<br />
				&lt;li&gt;Ipsum&lt;/li&gt;<br />
				&lt;li&gt;Dolor&lt;/li&gt;<br />
				&lt;/ul&gt;
			</p>
			<h5>No style List</h5>
			<ul class="list-nostyle">
				<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
				<li>
					Incidunt magni consequatur adipisci officiis vero placeat consectetur
				</li>
				<li>
					id facere,
					<ul>
						<li>molestiae in,</li>
						<li>ducimus necessitatibus hic ad esse consequuntur</li>
					</ul>
				</li>
				<li>dignissimos sequi illum doloremque.</li>
			</ul>
			<p class="code-text">
				&lt;ul&gt;<br />
				&lt;li&gt;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Velit debitis tempore repellat dolorem magni placeat magnam deleniti
				exercitationem minima iusto, quasi provident nostrum aut vitae
				blanditiis quas optio! Ducimus, quo.&lt;/li&gt;<br />
				&lt;li&gt;Incidunt magni consequatur adipisci officiis vero placeat
				consectetur&lt;/li&gt;<br />
				&lt;li&gt;id facere,<br />
				&lt;ul&gt;<br />
				&lt;li&gt;molestiae in,&lt;/li&gt;<br />
				&lt;li&gt;ducimus necessitatibus hic ad esse consequuntur&lt;/li&gt;<br />
				&lt;/ul&gt;<br />
				&lt;/li&gt;<br />
				&lt;li&gt;dignissimos sequi illum doloremque.&lt;/li&gt;<br />
				&lt;/ul&gt;
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
