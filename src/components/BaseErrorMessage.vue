<template>
  <p aria-live="assertive" class="help is-danger" :id="id">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>
