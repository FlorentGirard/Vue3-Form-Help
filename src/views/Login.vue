<template>
  <h1 class="title">Login page</h1>
  <form @submit.prevent="onSubmit">
    <BaseInput
      label="Email"
      type="email"
      :error="emailError"
      :modelValue="email"
      @change="handlechange"
    />

    <BaseInput
      label="Password"
      type="password"
      v-model="password"
      :error="passwordError"
    />
    <button type="submit" class="button is-link">Submit</button>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'
export default {
  setup() {
    function onSubmit() {
      alert('Submitted')
    }
    const validations = {
      email: (value) => {
        if (!value) return 'This field is required'
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }
        return true
      },
      password: (value) => {
        const requiredMessage = 'This field is required'
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage
        return true
      },
    }
    useForm({
      validationSchema: validations,
    })
    /*
     *lazyloading  for simple form we can use a methode handleChange for a multiple input we can use function named setFieldValue from useForm
     *const { setFieldValue } = useForm(...)
     setFieldValue('email', 'test@test.com')
     more info in https://vee-validate.logaretm.com/v4/api/use-form#composable-api
     */
    const {
      value: email,
      errorMessage: emailError,
      handleChange,
    } = useField('email')
    const { value: password, errorMessage: passwordError } =
      useField('password')
    return {
      onSubmit,
      email,
      emailError,
      password,
      passwordError,
      handleChange,
    }
  },
}
</script>
<style lang="scss"></style>
