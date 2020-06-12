<style type='text/scss'>
  @import '../_styles/functions.scss';

  @include large() {
    section {
      display: grid;
      grid-gap: 12px;
      grid-template-columns: auto;
      grid-template-rows: auto;
    }
  }
</style>

<section>
  <slot />
</section>