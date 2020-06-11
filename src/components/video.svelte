<script>
  export let src
</script>

<style>
  video {
    width: 100%;
  }
</style>

<video controls>
  <source src={src} type="video/mp4">
  Sorry, your browser doesn't support embedded videos.
</video>