<script context="module">
  import img from '../../components/img.svelte'
  export { img }
</script>

<script>
  export let title
</script>

<style type="text/scss">
  @import '../../_styles/fonts.scss';
  
  	h1 {
    @include serif(700, normal);
    }

  div {
    max-width: 55rem;
    margin: 0 auto;
    object-fit: cover;
  }
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div> 
<h1>{title}</h1>
<slot /> 
</div>