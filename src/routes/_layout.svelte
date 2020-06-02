<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`work.json`).then(r => r.json()).then(works => {
			return { works };
		});
	}
</script>

<script>
	import Navigation from '../components/navigation.svelte'

	export let segment
	// TODO makes `works` into a store
	export let works
</script>

<style type="text/scss">
	@import '../_styles/functions.scss';
	:global(#sapper) {
		@include small() {
			display: flex;
		}
	}
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Navigation current={segment} works={works} />

<main>
	<slot></slot>
</main>