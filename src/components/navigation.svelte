<script>
	export let current
	export let works

  import { stores } from '@sapper/app';
	const { page } = stores();
	$: path = $page.path
</script>

<style type="text/scss">
	@import '../_styles/functions.scss';

	.logo {
		color: black !important;
		font-weight: bold;
		text-align: center;
		img {
			display: block;
			width: 3.5rem;
			
			@include small() {
				width: 100%;
				max-width: 7.5rem;
				margin: 0 auto;
			}
		}
	}

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
		justify-content: flex-start;
		
		@include small() {
			flex-direction: column;
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

		li {
			padding: .5em 0;
		}
	}

	hr {
		color: transparent;
		border: .125rem solid yellow;
		margin: 1rem 0;
	}

</style>

<nav>
	<a
		class='logo'
		href='/'
		aria-current='{!current ? 'true' : undefined}'
	>
		<img src='gw-logo-F.svg' alt='logo'>
		<span>GABBY WINDHAM</span>
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

	<hr />

	<ul>
			<li>
				<a
					href='about'
					aria-current={path.includes('about') ? 'true' : undefined}
				>
					About
				</a>
			</li>
	</ul>
	
</nav>
