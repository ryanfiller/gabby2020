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
	export let works
</script>

<style type="text/scss">
	@import '../_styles/functions.scss';
	@import '../_styles/fonts.scss';

	:global(body, html) {
		@include sansSerif(400, normal);
	}
	
	:global(#sapper) {
		@include nav() {
			display: flex;
			width: 100vw;
			max-height: 100vh;
		}
	}

	:global(nav) {
		align-self: stretch;
		width: 100%;

		@include nav() {
			flex: 1;
			min-width: 11rem;
			max-width: 16rem;
			overflow: auto;
		}
	}
	:global(main) {
		align-self: stretch;
		flex: 1;
		padding: 1rem;
		background: #eceeee;

		@include nav() {
			overflow: auto;
			padding: 2rem;
			overflow: auto;
		}
	}
</style>

<Navigation current={segment} works={works} />

<main>
	<slot></slot>
</main>