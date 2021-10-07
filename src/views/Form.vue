<template>
  <div>
    <h1 class="title">Example Form component</h1>
    <form @submit.prevent="sendForm">
      <fieldset>
        <legend>Title & description & author</legend>
        <BaseInput v-model="event.title" label="Title" type="text" />
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
        <BaseInput v-model="event.author" label="Author" type="text" />
      </fieldset>

      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <fieldset>
        <legend class="label">Are there any pictures</legend>
        <BaseRadioGroup
          v-model="event.picture"
          name="picture"
          :options="pictureOptions"
        />
      </fieldset>

      <legend class="label">available Language</legend>

      <BaseCheckbox v-model="event.language.english" label="English" />

      <BaseCheckbox v-model="event.language.french" label="French" />
      <button type="submit" class="button is-link">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: ['art', 'Photo', 'dessein', 'divers'],
      event: {
        category: '',
        title: '',
        description: '',
        author: '',
        picture: 1,
        language: {
          english: false,
          french: false,
        },
      },
      pictureOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
  methods: {
    sendForm() {
      axios
        .post(
          'https://my-json-server.typicode.com/FlorentGirard/Vue3-Form-Help/events',
          this.event
        )
        .then(function (response) {
          console.log('Response', response)
        })
        .catch(function (err) {
          console.log('Error', err)
        })
    },
  },
}
</script>
