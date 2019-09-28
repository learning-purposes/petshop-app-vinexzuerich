<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <DogItem v-bind="pet"></DogItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import DogItem from "@/components/DogItem";

import { Dogs } from "../data/dogs";
export default {
  components: {
    DogItem
  },
  data() {
    return {
      dogs: Dogs
    };
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>