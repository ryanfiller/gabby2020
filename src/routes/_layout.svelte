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
		@include nav() {
			display: flex;
			height: 100vh;
			width: 100vw;
		}
	}

	:global(nav) {
		align-self: stretch;
		width: 100%;

		@include nav() {
			flex: 1;
			min-width: 10rem;
			max-width: 15vw;
		}
	}
	:global(main) {
		align-self: stretch;
		flex: 1;
		padding: 1rem;
		background: lightgrey;

		@include nav() {
			padding: 2rem;
			overflow: auto;
		}
	}
</style>

<Navigation current={segment} works={works} />

<main>
	<slot></slot>
</main>