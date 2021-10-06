<template>
  <form class="container">
    <h1 class="title">Simple Formulaire</h1>

    <BaseInput v-model="user.name" label="Name" type="text" />
    <BaseInput v-model="user.email" label="email" type="email" />
    <BaseInput v-model="user.old" label="old" type="number" />

    <BaseSelect :options="sexes" v-model="user.sexe" label="Select a sexe" />
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
