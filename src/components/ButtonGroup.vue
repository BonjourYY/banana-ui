<template>
  <div class="banana-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BananaButtonGroup',
};
</script>

<style lang="scss" scoped>
.banana-button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  > .button {
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
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
