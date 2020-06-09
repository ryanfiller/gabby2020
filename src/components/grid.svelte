<script>
  import Img from './img.svelte'
  export let posts
</script>

<style type="text/scss">
  @import '../_styles/functions.scss';

	ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
    grid-template-rows: repeat(100, 300px);
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    // grid-template-columns: repeat(2, 1fr);

    @include small() {
      grid-template-columns: repeat(1, 1fr);
    }

    @include medium() {
      grid-template-columns: repeat(2, 1fr);
    }

    @include large() {
      grid-template-columns: repeat(3, 1fr);
    }

    @include extra() {
      grid-template-columns: repeat(4, 1fr);
    }

    li {
      // grid-row: span 2;
      grid-row: span 1;

      &:nth-child(2) {
        grid-row: span 1;
      }

      img {
        // display: inline-block;
        height: 100%;
        // width: 100%;
        object-fit: cover;
      }
    }
	}
</style>

<ul>
	{#each posts as post}
		<li>
			<a rel='prefetch' href={post.slug}>
				<!-- {post.title} -->
				<img src={post.thumbnail} alt={post.title} />
			</a>
		</li>
	{/each}
</ul>