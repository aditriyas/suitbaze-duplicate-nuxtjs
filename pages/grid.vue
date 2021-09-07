<template>
	<div class="main_content font-fira">
		<div class="container">
			<h2 class="main-content-title font-fira">Default Grid</h2>
			<div class="bzg">
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
			</div>
			<div class="bzg">
				<div class="bzg_c" data-col="m4">
					<div class="text-center bg-primary text-white">bzg_c m4</div>
				</div>
				<div class="bzg_c" data-col="m4">
					<div class="text-center bg-primary text-white">bzg_c m4</div>
				</div>
				<div class="bzg_c" data-col="m4">
					<div class="text-center bg-primary text-white">bzg_c m4</div>
				</div>
			</div>
			<pre><code class="html hljs xml code-text"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
			<hr />
			<h2 class="main-content-title font-fira">No-Gutter Grid</h2>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
				<div class="bzg_c" data-col="m1">
					<div class="text-center bg-primary text-white">bzg_c m1</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
				<div class="bzg_c" data-col="m3">
					<div class="text-center bg-primary text-white">bzg_c m3</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m4">
					<div class="text-center bg-primary text-white">bzg_c m4</div>
				</div>
				<div class="bzg_c" data-col="m4">
					<div class="text-center bg-primary text-white">bzg_c m4</div>
				</div>
				<div class="bzg_c" data-col="m4">
					<div class="text-center bg-primary text-white">bzg_c m4</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m6">
					<div class="text-center bg-primary text-white">bzg_c m6</div>
				</div>
				<div class="bzg_c" data-col="m6">
					<div class="text-center bg-primary text-white">bzg_c m6</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m7">
					<div class="text-center bg-primary text-white">bzg_c m7</div>
				</div>
				<div class="bzg_c" data-col="m5">
					<div class="text-center bg-primary text-white">bzg_c m5</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m12">
					<div class="text-center bg-primary text-white">bzg_c m12</div>
				</div>
			</div>
			<div class="text-size14">
				<pre><code class="html hljs xml code-text"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m7"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m7<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m5"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m5<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m12"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
			</div>
			<hr />
			<h2 class="main-content-title font-fira">Grid with Offset</h2>
			<div class="bzg bzg--no-gutter" style="border: 1px solid white">
				<div class="bzg_c" data-col="m2">
					<div class="text-center bg-primary text-white">bzg_c m2</div>
				</div>
				<div class="bzg_c" data-col="m5" data-offset="m5">
					<div class="text-center bg-primary text-white">
						bzg_c m5 offset=m5
					</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m3" data-offset="m3">
					<div class="text-center bg-primary text-white">
						bzg_c m3 offset=m3
					</div>
				</div>
				<div class="bzg_c" data-col="m3" data-offset="m3">
					<div class="text-center bg-primary text-white">
						bzg_c m3 offset=m3
					</div>
				</div>
			</div>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m6" data-offset="m3">
					<div class="text-center bg-primary text-white">
						bzg_c m6 offset=m3
					</div>
				</div>
			</div>
			<pre><code class="html hljs xml code-text"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m5"</span> <span class="hljs-attr">data-offset</span>=<span class="hljs-string">"m5"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m5 offset=m5<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span> <span class="hljs-attr">data-offset</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3 offset=m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m3"</span> <span class="hljs-attr">data-offset</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m3 offset=m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"m6"</span> <span class="hljs-attr">data-offset</span>=<span class="hljs-string">"m3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c m6 offset=m3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
			<hr />
			<h2 class="main-content-title font-fira">Responsive Grid</h2>
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="s12,m9,l6">
					<div class="text-center bg-primary text-white">bzg_c s12,m9,l6</div>
				</div>
				<div class="bzg_c" data-col="s6,m3,l6">
					<div class="text-center bg-primary text-white">bzg_c s6,m3,l6</div>
				</div>
			</div>
			<pre><code class="html hljs xml code-text"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg bzg--no-gutter"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m9,l6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c s12,m9,l6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s6,m3,l6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center bg-primary text-white"</span>&gt;</span>bzg_c s6,m3,l6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
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

hr {
	margin-top: 20px;
	margin-bottom: 20px;
}

.bzg_c {
	border: 1px solid white;
}

a {
	color: #0094ed;
	font-family: 'Poppins';
}

a:hover {
	color: #717171;
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

*,
*:b .main-content-text {
	font-family: 'Poppins';
}
.main-content-title {
	font-weight: 700;
	color: #ff6700;
	font-family: 'Fira Code';
}
h2 {
	margin: 0 0 0.48225em 0;
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
	margin-top: 1em;
	font-family: monospace, monospace;
}

@media only screen and (max-width: 1240px) {
	.main_content {
		margin: 0px 80px 0px 100px;
		width: 92%;
	}
}
</style>
