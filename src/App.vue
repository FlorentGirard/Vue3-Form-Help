<template>
  <form class="container" @submit.prevent="sendForm">
    <h1 class="title">Simple Formulaire</h1>

    <BaseInput v-model="user.name" label="Name" type="text" />
    <BaseInput v-model="user.email" label="email" type="email" />
    <BaseInput v-model="user.old" label="old" type="number" />

    <BaseSelect :options="sexes" v-model="user.sexe" label="Select a sexe" />
    <div class="field">
      <BaseCheckbox v-model="user.extras.music" label="Music" />
    </div>
    <div class="field">
      <BaseCheckbox v-model="user.extras.catering" label="Catering" />
    </div>
    <h2 class="subtitle">Are pets allowed?</h2>
    <div class="field">
      <BaseRadioGroup
        v-model="user.pets"
        name="pets"
        :options="petOptions"
        vertical
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '',
        email: '',
        old: '',
        sexe: '',
        extras: {
          music: false,
          catering: false,
        },
        pets: '1',
      },
      sexes: ['M', 'F', 'Autre'],
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
      ],
    }
  },
  methods: {
    sendForm() {},
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
