<template>
  <form class="container">
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
    <h3>Are pets allowed?</h3>
    <div class="field">
      <BaseRadio v-model="user.pets" :value="1" label="Yes" name="pets" />
    </div>
    <div class="field">
      <BaseRadio v-model="user.pets" :value="0" label="No" name="pets" />
    </div>
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        name: "",
        email: "",
        old: "",
        sexe: "",
        extras: {
          music: false,
          catering: false,
        },
        pets: "1",
      },
      sexes: ["M", "F", "Autre"],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
