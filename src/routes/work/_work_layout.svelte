<script context="module">
  import img from '../../components/img.svelte'
  export { img }
</script>

<script>
  export let title
</script>

<style type="text/scss">
  @import '../../_styles/fonts.scss';
  @import '../../_styles/functions.scss';
  
  h1 {
    @include serif(700, normal);
  }

  div {
    max-width: 50rem;
    margin: 0 auto;
    font-size: 1.125rem;

    @include extra {
      // max-width: 100%;

      // display: grid;
      // grid-template-columns: 1fr 1fr;
      // gap: 1rem;

      // h1 {
      //   grid-column:  1 / 3;
      // }

      // :global(img) {
      //   grid-column:  1 / 2;
      // }

      // :global(p) {
      //   grid-column:  2 / 3;
      // }
    }
  }
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div> 
  <h1>{title}</h1>
  <slot /> 
</div>