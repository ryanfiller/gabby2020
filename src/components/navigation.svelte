<script>
	export let current
	export let works

  import { stores } from '@sapper/app';
	const { page } = stores();
	$: path = $page.path
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	[aria-current] {
		color: red;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li>
			<a aria-current='{!current ? 'true' : undefined}' href='/'>
				(logo?)
			</a>
		</li>
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
</nav>
