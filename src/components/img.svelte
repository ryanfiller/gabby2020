<script>
  export let alt
  export let src
</script>

<style>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>

<img class="asdf" src={`${src}?nf_resize=fit&w=300&h=400`} alt={alt} />
<!-- <img 
  style={`background-image: url('https://gabby2020.netlify.app/images/DevilPic-Small.jpg?nf_resize=fit&w=300&h=400')`}
  alt={alt}
  src={`https://gabby2020.netlify.app/images/DevilPic-Small.jpg?nf_resize=fit&w=300&h=400`}
/> -->
