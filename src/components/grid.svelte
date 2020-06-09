<script>
  import { onMount } from 'svelte' 	
  let AwesomeGrid
  onMount(async ()=>{ 		
    const ag = await import('awesome-grid') 		
    AwesomeGrid = ag.default 		
    new AwesomeGrid('ul#grid', {
      mobile: 576,
      tablet: 768,
      desktop: 992,
      tv: 1400,
    })
      .gutters(16)
      .grid(1)
      .mobile(2)
      .tablet(3)
      .desktop(4)
      .tv(5)

  }) 


  import Img from './img.svelte'
  export let posts
</script>

<style type="text/scss">
  @import '../_styles/functions.scss';

	ul {
    list-style: none;
    padding: 0;
    li {
      img {
        width: 100%;
        height: auto;
      }
    }
	}
</style>

<ul id='grid'>
	{#each posts as post}
		<li>
			<a rel='prefetch' href={post.slug}>
				<!-- {post.title} -->
				<img src={post.thumbnail} alt={post.title} />
			</a>
		</li>
	{/each}
</ul>