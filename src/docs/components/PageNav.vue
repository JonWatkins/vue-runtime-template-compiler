<template>
  <div class="page-nav">
    <div class="page-nav--inner clearfix">
      <div class="float-left">
        <slot name="left" />
      </div>
      <div class="float-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNav'
}
</script>

<style lang="scss" rel="stylesheet/scss">
.page-nav {
  width: 100%;
  padding: 2rem 0;

  &--inner {
    min-height: 1rem;
    margin-top: 0;
    border-top: 1px solid #eaecef;
    padding-top: 1rem;
    overflow: auto;
  }
}
</style>
