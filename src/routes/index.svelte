<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`work.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	img {
		display: block;
		width: 250px;
	}
</style>

<svelte:head>
	<title>work</title>
</svelte:head>

<ul>
	{#each posts as post}
		<li>
			<a rel='prefetch' href='work/{post.slug}'>
				{post.title}
				<img src={post.thumbnail} alt={post.title} />
			</a>
		</li>
	{/each}
</ul>