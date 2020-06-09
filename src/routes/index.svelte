<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`work.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Grid from '../components/grid.svelte'
	export let posts;
</script>

<svelte:head>
	<title>Gabby Windham</title>
</svelte:head>

<Grid posts={posts} />
