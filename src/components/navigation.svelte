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
		img {
			display: block;
			width: 13rem;
			
			@include nav() {
				width: 100%;
				max-width: 17rem;
			}
		}
	}

	a {
		text-decoration: none;
		display: block;

		&[aria-current] {
			color: #ffce00;
		}
	}
	nav {
		padding: .75rem;
		display: flex;
		justify-content: flex-start;
		
		@include nav() {
			flex-direction: column;
			padding: 2rem;
		}
	}

	ul {
		list-style: none;
		padding: 0;
	

		&.work {
			display: none;
			margin-top: 5rem;
			border-bottom: .1rem solid #ffce00;
			margin-bottom: .25rem;
		}

		@include nav() {
			display: block !important;
			overflow: auto;
		}

		li {
			padding: .45rem 0;
		}
	}

</style>

<nav>
	<a
		class='logo'
		href='/'
		aria-current='{!current ? 'true' : undefined}'
	>
		<img src='logo-name.svg' alt='logo'>
	</a>

	<ul class='work'>
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
