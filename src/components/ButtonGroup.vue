<template>
  <div class="b-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'b-button-group',
};
</script>

<style lang="scss" scoped>
.b-button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  > .b-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:last-child {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
    &:hover,
    &:focus {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
