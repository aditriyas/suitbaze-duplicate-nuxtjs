<template>
	<div class="wrapper container">
		<div class="sidebar" :class="{ 'open-sidebar': isSidebarOpen }">
			<ul>
				<li>
					<NuxtLink to="/getstarted">Get Started</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/headings">Headings</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/colors">Colors</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/lists">Lists</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/text-alignments">Text Alignments</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/buttons">Buttons</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/alert">Alert</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/card">Card</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/media-object">Media Object</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/grid">Grid</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/table">Table</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/form">Form</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/tabs">Tabs</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/pagination">Pagination</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/font-awesome">Font Awesome</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/responsive-image">Responsive Image</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/plugins">Plugins</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/mixin">Mixin</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/utils-function">Utils Functions</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
a.nuxt-link-active {
	background-color: #e6e6e6;
	padding: 0.5em;
	padding-right: 10px;
	font-weight: normal;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
	color: #00c58e;
}

li,
a:hover {
	color: #00c58e;
	font-weight: normal;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	padding-left: 10px;
	padding-top: 10px;
}

body {
	background-color: #f3f5f9;
}

.wrapper {
	display: flex;
	position: relative;
	padding-top: 10px;
	padding-left: 15px;
}

.wrapper .sidebar {
	width: 200px;
	height: 100%;
	background: #fff;
	box-shadow: 0px 6px 4px rgba($black, 0.5);
	padding: 30px 0px;
	position: fixed;
	overflow: scroll;
	// transform: translateX(-100%);
	transition: all 0.5s;
}

.open-sidebar {
	transform: translateX(0);
}

.sidebar {
	left: 0;
	margin-bottom: 10px;
}
.wrapper .sidebar h2 {
	color: #fff;
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 30px;
}

.wrapper .sidebar ul li {
	padding: 5px;
}

.wrapper .sidebar ul li a {
	color: black;
	display: block;
}

.wrapper .sidebar ul li a .fas {
	width: 25px;
}

a:hover {
	color: black;
}

.wrapper .main_content {
	width: 100%;
	margin-left: 200px;
}

.wrapper .main_content .header {
	padding: 20px;
	background: #fff;
	color: #717171;
	border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info {
	margin: 20px;
	color: #717171;
	line-height: 25px;
}

::-webkit-scrollbar {
	width: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: grey;
	border-radius: 10px;
}
</style>
