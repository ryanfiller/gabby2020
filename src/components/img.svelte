<script>
  import Video from './video.svelte'
  export let alt
  export let src
  export let small
  export let notTall
</script>

<style type="text/scss">
  img {
    display: block;
    width: 100%;
    margin-bottom: 1rem;

    &.small {
      max-width: 25rem;
      margin-right: auto;
    }
  }
</style>

{#if src.includes('.mp4')}
  <Video src={src} {notTall} />
{:else }
  <img
    alt={alt}
    src={`${src}?nf_resize=fit&w=750`}
    class="{!!small ? 'small' : ''}"
  />
{/if}
