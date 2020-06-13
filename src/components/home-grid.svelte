<script>
  import Img from './img.svelte'
  export let posts
</script>

<style type="text/scss">
  @import '../_styles/functions.scss';

	ul {
    list-style: none;
    padding: 0;
    
    column-count: 2;
    column-gap: 1rem;
    @include small() { column-count: 2; }
    @include medium() { column-count: 3; }
    @include large() { column-count: 3; }
    @include extra() { column-count: 4; }

    li {
      display: inline-block;
      margin-bottom: 1rem;
      width: 100%;

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
