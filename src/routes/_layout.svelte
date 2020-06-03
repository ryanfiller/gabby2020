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
			height: 100vh;
			width: 100vw;
		}
	}

	:global(nav) {
		align-self: stretch;
		width: 100%;

		@include small() {
			max-width: 20vw;
		}
	}
	:global(main) {
		align-self: stretch;
		flex: 1;
		padding: 1rem;

		@include small() {
			padding: 2rem;
		}
	}
</style>

<Navigation current={segment} works={works} />

<main>
	<slot></slot>
</main>