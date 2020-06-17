<script>
  export let src
  export let notTall
</script>

<style type="text/scss">
  video {
    width: 100%;
    margin-bottom: 1rem;

    &.not-tall {
      max-height: 90vh;
      width: auto;
      margin-right: auto;
    }
  }
</style>

<video controls class="{!!notTall ? 'not-tall' : ''}">
  <source src={src} type="video/mp4">
  Sorry, your browser doesn't support embedded videos.
</video>