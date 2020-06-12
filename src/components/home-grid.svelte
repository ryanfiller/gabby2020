<script>
  import { onMount } from 'svelte' 	
  let Macy

  onMount(async ()=>{ 		
    const macy = await import('macy') 		
    Macy = macy.default 		
    var grid = Macy({
      container: '#grid',
      trueOrder: false,
      waitForImages: false,
      margin: 12,
      columns: 4,
      breakAt: {
          1400: 4,
          992: 3,
          768: 3,
          576: 2
        }
    })
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
