<script context="module">
  import img from '../../components/img.svelte'
  export { img }
</script>

<script>
  export let title
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<slot />