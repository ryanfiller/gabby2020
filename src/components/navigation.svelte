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
			width: 9rem;
			margin-top:.75rem;
			
			@include nav() {
				width: 100%;
				max-width: 19rem;
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
		justify-content: space-between;
		font-size: .9rem;
		
		@include nav() {
			display: block;
			padding: 1.25rem;
		}
	}

	ul {
		list-style: none;
		padding: .25rem;
		margin: 1rem 0;

		&.work {
			display: none;
			margin-top: 3.5rem;
		}

		@include nav() {
			display: block !important;
			overflow: auto;
		}

		li {
			padding: .45rem 0;
		}
	}

	hr {
		height: 1.5px;
		border: none;
		width: 80%;
		margin: 0;
		background-color: #ffce00;
		display: none;

		@include nav() {
			display: block;
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
