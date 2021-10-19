<template>
  <div>
    <h1 class="title">Example Form component</h1>
    <form @submit.prevent="submit">
      <fieldset>
        <legend class="is-show">Title & description & author</legend>
        <BaseInput
          v-model="title"
          label="Title"
          type="text"
          :error="errors.title"
        />
        <BaseInput
          v-model="description"
          label="Description"
          type="text"
          :error="errors.description"
        />
        <BaseInput
          v-model="author"
          label="Author"
          type="text"
          :error="errors.author"
        />
      </fieldset>

      <fieldset>
        <legend class="is-show">Text</legend>
        <BaseTextArea v-model="text" label="text" :error="errors.text" />
      </fieldset>

      <BaseSelect
        :options="categories"
        v-model="category"
        label="Select a category"
        :error="errors.category"
      />
      <fieldset>
        <legend class="label">Are there any pictures</legend>
        <BaseRadioGroup
          v-model="picture"
          name="picture"
          :options="pictureOptions"
          vertical
          :error="errors.picture"
        />
      </fieldset>

      <fieldset>
        <legend class="label">available Language</legend>
        <BaseCheckbox
          v-model="english"
          label="English"
          :error="errors.english"
        />
        <BaseCheckbox v-model="french" label="French" :error="errors.french" />
      </fieldset>

      <BaseButton type="submit" something="else"> submit </BaseButton>
    </form>

    <!-- <pre>{{ event }}</pre> -->
  </div>
</template>

<script>
import axios from 'axios'
import { useField, useForm } from 'vee-validate'
import { object, string, number, boolean } from 'yup'

export default {
  data() {
    return {
      categories: ['art', 'Photo', 'dessein', 'divers'],

      pictureOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
  setup() {
    // Schema Validation  with yup
    const validationSchema = object({
      title: string().required('A cool title is required').min(3),
      description: string(),
      author: string().required('an author can be useful'),
      text: string().min(10),
      category: string().required(),
      picture: number(),
      english: boolean(),
      french: boolean(),
    })
    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        picture: 1,
        english: false,
        french: false,
      },
    })
    const { value: title } = useField('title')
    const { value: description } = useField('description')
    const { value: author } = useField('author')
    const { value: text } = useField('text')
    const { value: category } = useField('category')
    const { value: picture } = useField('picture')
    const { value: english } = useField('english')
    const { value: french } = useField('french')
    const submit = handleSubmit((values) => {
      console.log('envoyé', values)
      axios
        .post(
          'https://my-json-server.typicode.com/FlorentGirard/Vue3-Form-Help/events',
          values
        )
        .then(function (response) {
          console.log('Response', response)
        })
        .catch(function (err) {
          console.log('Error', err)
        })
    })
    return {
      title,
      description,
      author,
      text,
      category,
      picture,
      english,
      french,
      submit,
      errors,
    }
  },
}
</script>
<style lang="scss" scoped></style>
