/* eslint-disable vue/no-parsing-error */
<template>
  <div class="field">
    <label :for="uuid" v-if="label" class="label">{{ label }} </label>
    <div :class="{ 'control has-icons-left ': icon }">
      <input
        v-bind="$attrs"
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input test"
        :class="{ 'is-danger': error }"
        :id="uuid"
        :aria-describedby="error ? `${uuid}-error` : null"
        :aria-invalid="error ? true : null"
      />
      <span v-if="icon" class="icon is-small is-left test2">
        <i :class="icon"></i>
      </span>
    </div>

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
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    icon: {
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
