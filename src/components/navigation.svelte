<script>
	export let current
	export let works

  import { stores } from '@sapper/app';
	const { page } = stores();
	$: path = $page.path
</script>

<style type="text/scss">
	@import '../_styles/functions.scss';

	a {
		text-decoration: none;
		display: block;

		&[aria-current] {
			color: red;
		}
	}
	nav {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		
		@include small() {
			flex-direction: column;
			justify-content: center;
			padding: 2rem;
		}
	}

	ul {
		display: none;
		list-style: none;
		padding: 0;

		@include small() {
			display: block;
			overflow: auto;
		}
	}

</style>

<nav>
	<a
		href='/'
		aria-current='{!current ? 'true' : undefined}'
	>
		(logo?)
	</a>
	<ul>
		{#each works as work}
			<li>
				<a
					href={work.slug}
					aria-current={path.includes(work.slug) ? 'true' : undefined}>
					{work.title}
				</a>
			</li>
		{/each}
	</ul>
	<a
		href='about'
		aria-current={path.includes('about') ? 'true' : undefined}
	>
		About
	</a>
</nav>
