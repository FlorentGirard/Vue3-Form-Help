<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        v-bind="$attrs"
        :value="modelValue"
        :placeholder="label"
        class="input"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
