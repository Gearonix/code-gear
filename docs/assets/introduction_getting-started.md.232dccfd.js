import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.0c952bb0.js";const v=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/getting-started.md","filePath":"introduction/getting-started.md","lastUpdated":1697324461000}'),o={name:"introduction/getting-started.md"},l=n('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li><a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noreferrer">Node.js</a> version 20 or higher.</li><li><a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noreferrer">Docker</a> version 21 or higher.</li><li><a href="https://github.com/yarnpkg/berry" target="_blank" rel="noreferrer">Yarn</a> version 3.2.0 or higher.</li></ul><h3 id="setting-environment-variables" tabindex="-1">Setting environment variables <a class="header-anchor" href="#setting-environment-variables" aria-label="Permalink to &quot;Setting environment variables&quot;">​</a></h3><p>Copy the environment variables from <code>env</code> folder. This file contains all the configuration needed to run the project.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0aZtu" id="tab-NqXljg2" checked="checked"><label for="tab-NqXljg2">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tools/dev/src/env/</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>\n<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.override.env</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tools/dev/src/env/</span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>\n<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.override.env</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.docker</span></span></code></pre></div></div></div><hr><h3 id="_1-manual-installation" tabindex="-1">1. Manual Installation <a class="header-anchor" href="#_1-manual-installation" aria-label="Permalink to &quot;1. Manual Installation&quot;">​</a></h3><p>Install dependencies.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hoAIv" id="tab-oSYKuaK" checked="checked"><label for="tab-oSYKuaK">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></div></div><p>Run services like <a href="https://redis.io/" target="_blank" rel="noreferrer">redis</a>, <a href="https://kafka.apache.org/" target="_blank" rel="noreferrer">kafka</a>, <a href="https://zookeeper.apache.org/" target="_blank" rel="noreferrer">zookeeper</a> and others in docker in a virtual environment.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pAk5X" id="tab-8VLKuFO" checked="checked"><label for="tab-8VLKuFO">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run:dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run:dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span></code></pre></div></div></div><p>Start the project. This simple command will launch a cluster of microservices and all frontend applications! It will also collect all dependent libraries that are located in the <code>packages</code> folder.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-p2CHU" id="tab-f8Sl5ie" checked="checked"><label for="tab-f8Sl5ie">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">serve</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">serve</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>You may get this warning:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">@prisma/client</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">did</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">not</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">initialize</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yet.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Please</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;prisma generate&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">try</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">again</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">@prisma/client</span><span style="color:#24292E;"> </span><span style="color:#032F62;">did</span><span style="color:#24292E;"> </span><span style="color:#032F62;">not</span><span style="color:#24292E;"> </span><span style="color:#032F62;">initialize</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yet.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Please</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;prisma generate&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">try</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">again</span></span></code></pre></div><p>In this case, just run</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prisma:init</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gateway</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prisma:init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gateway</span></span></code></pre></div><p>This will generate types for <code>prisma</code> and generate a schema.</p></div><h3 id="_2-run-in-docker-virtual-environment-development-mode" tabindex="-1">2. Run in docker virtual environment (<code>development</code> mode) <a class="header-anchor" href="#_2-run-in-docker-virtual-environment-development-mode" aria-label="Permalink to &quot;2. Run in docker virtual environment (`development` mode)&quot;">​</a></h3><p>You can run the project in one large container, with docker volumes set to <code>apps</code> and <code>packages</code> to enable hot-reload.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Yz31u" id="tab-atmswbN" checked="checked"><label for="tab-atmswbN">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run:dev:full</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run:dev:full</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span></code></pre></div></div></div><p>Since this is a monorepository, running each microservice in a separate container is not beneficial in terms of memory (<code>2.5GB</code> per container) in development mode.</p><p>The <code>full</code> flag means that in addition to the main services like mysql, you also run <code>runtime</code> services, that is, microservices and applications.</p><h3 id="_3-run-in-docker-virtual-environment-production-mode" tabindex="-1">3. Run in docker virtual environment (<code>production</code> mode) <a class="header-anchor" href="#_3-run-in-docker-virtual-environment-production-mode" aria-label="Permalink to &quot;3. Run in docker virtual environment (`production` mode)&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gt5oP" id="tab-QQSikd8" checked="checked"><label for="tab-QQSikd8">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run:prod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run:prod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span></code></pre></div></div></div><p>Unlike <code>development</code> mode, each application or microservice will be launched in isolation from others (using <a href="https://docs.docker.com/build/building/multi-stage/" target="_blank" rel="noreferrer">multistage build</a>) and thus it will not take up much memory on your disk (<code>40MB</code>-<code>200MB</code> each container).</p><hr><p>The dev server should be running at <a href="http://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a>. Visit the URL in your browser to see project in action.</p><div class="tip custom-block"><p class="custom-block-title">Nx-Console</p><p>It is highly recommended to add the <a href="https://nx.dev/recipes/nx-console" target="_blank" rel="noreferrer">Nx-Console</a> plugin to your IDE, as it greatly simplifies the management of various scripts and is indispensable in my opinion in a monorepository.</p></div><div class="tip custom-block"><p class="custom-block-title">dos2unix</p><p><a href="https://dos2unix.sourceforge.io/" target="_blank" rel="noreferrer">dos2unix</a> can be useful for file format consistency when transferring data between different operating systems.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-c9oza" id="tab-CapUkcR" checked="checked"><label for="tab-CapUkcR">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pacman</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Sy</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pacman</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dos2unix</span></span>\n<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dos2unix</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pacman</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Sy</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pacman</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dos2unix</span></span>\n<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dos2unix</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div></div></div></div>',28),p=[l];function t(r,c,i,d,y,E){return a(),e("div",null,p)}const u=s(o,[["render",t]]);export{v as __pageData,u as default};
