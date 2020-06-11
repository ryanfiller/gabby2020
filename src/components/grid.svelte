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
      .gutters(12)
      .grid(2)
      .mobile(2)
      .tablet(3)
      .desktop(3)
      .tv(4)
  }) 


  import Img from './img.svelte'
  export let posts
</script>

<style type="text/scss">
  @import '../_styles/functions.scss';

	ul {
    list-style: none;
    padding: 0;

    display: grid;
    grid-template-rows: auto;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
    @include small() { grid-template-columns: repeat(2, 1fr); }
    @include medium() { grid-template-columns: repeat(3, 1fr); }
    @include large() { grid-template-columns: repeat(3, 1fr); }
    @include extra() { grid-template-columns: repeat(4, 1fr); }

    li {

      a {
        display: block;
      }
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
				<img src={`${post.thumbnail}?nf_resize=fit&w=800`} alt={post.title} />
			</a>
		</li>
	{/each}
</ul>