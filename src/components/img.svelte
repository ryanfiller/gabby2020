<script>
  export let alt
  export let src
  import Video from './video.svelte'
</script>

<style>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>

{#if src.includes('.mp4')}
  <Video src={src} />
{:else }
  <img src={`${src}?nf_resize=fit&w=1200`} alt={alt} />
{/if}
