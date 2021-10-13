/* eslint-disable vue/no-parsing-error */
<template>
  <div class="field">
    <label :for="uuid" v-if="label" class="label">{{ label }} </label>

    <textarea
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="label"
      class="textarea"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="uuid"
    ></textarea>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>

<script>
import UniqueID from '../features/UniqueID'
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  setup() {
    const uuid = UniqueID().getID()
    return {
      uuid,
    }
  },
}
</script>
<style lang="scss"></style>
