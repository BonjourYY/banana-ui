<template>
  <button class="b-button">
    <icon-park type="loading-four" v-if="loading"></icon-park>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'b-button',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes loading {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
.b-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  cursor: pointer;
  border-radius: var(--button-radius);
  border: 1px solid var(--button-border-color);
  background-color: var(--button-bg);
  &:focus {
    border-color: var(--button-border-color-focus);
    background-color: var(--button-bg-focus);
  }

  &:hover {
    border-color: var(--button-border-color-hover);
  }
  span:first-of-type {
    margin-right: 5px;
  }
  span:last-of-type {
    margin-left: 5px;
  }
  .i-icon-loading-four {
    animation: loading 2s infinite linear;
  }
}
</style>
