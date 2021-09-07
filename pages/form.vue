<template>
	<div class="main_content font-fira">
		<div class="container">
			<!-- Form -->
			<div class="mb-24">
				<h2 class="text-suitmedia font-fira">Form</h2>
				<form action="">
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Text Input</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="text"
								name="text"
								placeholder="Text"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Full Width Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input form-input--block"
								type="text"
								name="fullwidth"
								placeholder="Full Width Input"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Password Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="password"
								name="password"
								placeholder="Password"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Email Address
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="email"
								name="email"
								placeholder="Email"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Number Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="number"
								name="number"
								placeholder="Number"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Single File Input (Full Width)
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input js-file-input"
								id="singleFile"
								type="file"
								name="file"
							/>
							<label class="flex form-file-label" for="singleFile">
								<div
									class="js-file-name form-file-input form-input--block"
								></div>
								<div class="btn--primary ml-4">Browse</div>
							</label>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Multiple File Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input js-file-input"
								id="multipleFile"
								type="file"
								name="file"
								multiple=""
							/>
							<label class="flex form-file-label" for="multipleFile">
								<div class="js-file-name form-file-input"></div>
								<div class="btn--primary ml-4">Browse</div>
							</label>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Textarea Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<textarea
								class="form-input"
								name="textarea"
								placeholder="Text Area"
							></textarea>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Disabled Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="text"
								name="disabled"
								placeholder="Disabled"
								disabled=""
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Read-only Input
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="text"
								name="readonly"
								placeholder="Read-only"
								readonly=""
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Dropdown Select
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<select class="form-input" name="dropdown">
								<option value="1">Option 1</option>
								<option value="2">Option 2</option>
								<option value="3">Option 3</option>
							</select>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">
							Radio Buttons
						</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<div class="form-check-group">
								<label class="form-check__item" for="rbOption1"
									><input id="rbOption1" type="radio" name="radio" /> Option
									1</label
								>
								<label class="form-check__item" for="rbOption2"
									><input id="rbOption2" type="radio" name="radio" /> Option
									2</label
								>
								<label class="form-check__item" for="rbOption3"
									><input id="rbOption3" type="radio" name="radio" /> Option
									3</label
								>
							</div>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Checkbox</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<div class="form-check-group">
								<label class="form-check__item" for="cbOption1"
									><input
										id="cbOption1"
										type="checkbox"
										name="checkbox"
										checked=""
									/>
									Option 1</label
								>
								<label class="form-check__item" for="cbOption2"
									><input id="cbOption2" type="checkbox" name="checkbox" />
									Option 2</label
								>
								<label class="form-check__item" for="cbOption3"
									><input
										id="cbOption3"
										type="checkbox"
										name="checkbox"
										checked=""
									/>
									Option 3</label
								>
							</div>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c" data-col="s12,m8,l8" data-offset="m4,l4">
							<button class="btn btn--primary" type="submit">Submit</button>
							<button class="btn btn--ghost-secondary" type="reset">
								Cancel
							</button>
						</div>
					</div>
				</form>
				<div class="text-size14">
					<pre><code class="html hljs xml code-text"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">""</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Text Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Text"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Full Width Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input form-input--block"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"fullwidth"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Full Width Input"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Password Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Password"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Email Address<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Number Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Number"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Single File Input (Full Width)<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input js-file-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"singleFile"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"file"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"file"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex form-file-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"singleFile"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"js-file-name form-file-input form-input--block"</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn--primary ml-4"</span>&gt;</span>Browse<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Multiple File Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input js-file-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"multipleFile"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"file"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"file"</span> <span class="hljs-attr">multiple</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex form-file-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"multipleFile"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"js-file-name form-file-input"</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn--primary ml-4"</span>&gt;</span>Browse<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Textarea Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"textarea"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Text Area"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Disabled Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"disabled"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Disabled"</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Read-only Input<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"readonly"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Read-only"</span> <span class="hljs-attr">readonly</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Dropdown Select<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span>&gt;</span>Option 1<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"2"</span>&gt;</span>Option 2<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"3"</span>&gt;</span>Option 3<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Radio Buttons<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-group"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"rbOption1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"rbOption1"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"radio"</span>&gt;</span> Option 1<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"rbOption2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"rbOption2"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"radio"</span>&gt;</span> Option 2<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"rbOption3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"rbOption3"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"radio"</span>&gt;</span> Option 3<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-group"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"cbOption1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cbOption1"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">checked</span>&gt;</span> Option 1<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"cbOption2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cbOption2"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"checkbox"</span>&gt;</span> Option 2<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"cbOption3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"cbOption3"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">checked</span>&gt;</span> Option 3<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span> <span class="hljs-attr">data-offset</span>=<span class="hljs-string">"m4,l4"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn--primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn--ghost-secondary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"reset"</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
				</div>
			</div>
			<hr />

			<!-- Form Validation -->
			<div class="mb-24">
				<h2 class="text-suitmedia font-fira">Form Validation</h2>
				<form action="" class="js-validate" novalidate="">
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Username</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="text"
								name="username"
								placeholder="Username"
								required=""
								aria-required="true"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Email</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input"
								type="email"
								name="email"
								placeholder="Email"
								required=""
								aria-required="true"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Birthdate</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<input
								class="form-input datepicker-here js-date"
								type="text"
								name="birthdate"
								placeholder="Birthdate"
								required=""
								aria-required="true"
							/>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Gender</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<div class="form-check-group">
								<label class="form-check__item" for="gender1">
									<input
										id="gender1"
										type="radio"
										name="gender"
										value="Male"
										required=""
										aria-required="true"
									/>
									Male
								</label>
								<label class="form-check__item" for="gender2">
									<input
										id="gender2"
										type="radio"
										name="gender"
										value="Female"
									/>
									Female
								</label>
							</div>
						</div>
					</div>
					<div class="bzg mb-24">
						<div class="bzg_c form-label" data-col="s12,m4,l4">Hobbies</div>
						<div class="bzg_c" data-col="s12,m8,l8">
							<div class="form-check-group form-input--block">
								<label class="form-check__item" for="hobby1">
									<input
										id="hobby1"
										type="checkbox"
										name="hobby"
										value="Reading"
										required=""
										aria-required="true"
									/>
									Reading
								</label>
								<label class="form-check__item" for="hobby2">
									<input
										id="hobby2"
										type="checkbox"
										name="hobby"
										value="Writing"
									/>
									Writing
								</label>
								<label class="form-check__item" for="hobby3">
									<input
										id="hobby3"
										type="checkbox"
										name="hobby"
										value="Running"
									/>
									Running
								</label>
								<label
									class="form-check__item"
									for="hobby4"
									data-invalid="Custom Error Message"
								>
									<input
										id="hobby4"
										type="checkbox"
										name="hobby"
										value="Swimming"
									/>
									Swimming
								</label>
							</div>
						</div>
					</div>
					<div class="bzg mb-12">
						<div class="bzg_c" data-col="s12,m8,l8" data-offset="m4,l4">
							<button class="btn btn--primary" type="submit">Submit</button>
						</div>
					</div>
				</form>

				<div class="text-size14">
					<pre><code class="html hljs xml code-text"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">action</span>=<span class="hljs-string">""</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"js-validate"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Username<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Username"</span> <span class="hljs-attr">required</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email"</span> <span class="hljs-attr">required</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Birthdate<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-input datepicker-here js-date"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"birthdate"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Birthdate"</span> <span class="hljs-attr">required</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Gender<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-group"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"gender1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"gender1"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"gender"</span> <span class="hljs-attr">required</span>&gt;</span> Male<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"gender2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"gender2"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"gender"</span>&gt;</span> Female<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-24"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c form-label"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m4,l4"</span>&gt;</span>Hobbies<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-group form-input--block"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"hobby1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"hobby1"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"hobby"</span> <span class="hljs-attr">required</span>&gt;</span> Reading<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"hobby2"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"hobby2"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"hobby"</span>&gt;</span> Writing<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"hobby3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"hobby3"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"hobby"</span>&gt;</span> Running<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check__item"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"hobby4"</span> <span class="hljs-attr">data-invalid</span>=<span class="hljs-string">"Custom Error Message"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"hobby4"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"hobby"</span>&gt;</span> Swimming<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg mb-12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bzg_c"</span> <span class="hljs-attr">data-col</span>=<span class="hljs-string">"s12,m8,l8"</span> <span class="hljs-attr">data-offset</span>=<span class="hljs-string">"m4,l4"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn--primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
				</div>
			</div>
			<hr />
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
