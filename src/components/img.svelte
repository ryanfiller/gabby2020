<script>
  import Video from './video.svelte'
  export let alt
  export let src
  export let small
</script>

<style type="text/scss">
  img {
    display: block;
    // height: 100%;
    // // max-height: 90vh;
    width: 100%;
    margin-bottom: 1rem;

    &.small {
      max-width: 25rem;
      margin-right: auto;
    }
  }
</style>

{#if src.includes('.mp4')}
  <Video src={src} />
{:else }
  <img
    alt={alt}
    src={`${src}?nf_resize=fit&w=750`}
    class="{!!small ? 'small' : ''}"
  />
{/if}
