<script>
  import Video from './video.svelte'
  export let alt
  export let src

  export let gridArea
  const style = `grid-area: ${gridArea};`
</script>

<style>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>

{#if src.includes('.mp4')}
  <Video src={src} {style} />
{:else }
  <img src={`${src}?nf_resize=fit&w=850`} alt={alt} {style} />
{/if}
