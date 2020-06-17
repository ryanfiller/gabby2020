<script context="module">
  import marked from 'marked'
  import img from '../../components/img.svelte'
  export { img }
</script>

<script>
  export let title
  export let description
  description = marked(description)
</script>

<style type="text/scss">
  @import '../../_styles/fonts.scss';
  @import '../../_styles/functions.scss';
  
  article {
    max-width: 50rem;
    margin: 0 auto;
  }

  h1 {
    @include serif(700, normal);
    font-size: 1.75rem;
  }

  p {
    font-size: 1.025rem;
  }

  :global(h2) {
    font-size: .9rem;
  }

  @include extra {
    article {
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 2rem;
    }

    header {
      padding-right: 1rem;
      grid-column:  1 / 2;
    }

    .content {
      grid-column:  2 / 3;
    }
  }
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article> 
  <header>
    <h1>
      {title}
    </h1>
    {@html description}
  </header>
  <div class='content'>
    <slot /> 
  </div>
</article>