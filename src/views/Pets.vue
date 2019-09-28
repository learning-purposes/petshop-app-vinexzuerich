<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <!-- <DogItem v-bind="pet" @addToFavorites="addToFavorites"></DogItem> -->
      </v-flex>>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";

axios.defaults.baseURL = "https://dog.ceo/api";
import DogItem from "@/components/DogItem";
// import { mapActions } from "vuex";
import { Dogs } from "../data/dogs";
export default {
  components: {
    DogItem
  },
  data() {
    return {
      dogs: Dogs
    };
  },
  methods: {
    // ...mapActions(["addToFavorites"])
  },
  async created() {
    const linksArray = this.dogs.map(someFun);
    // old way
    function someFun(dog) {
      return `/breed/${dog.breed}/images/random`;
    }
    let response;
    try {
      response = await axios.all(linksArray.map(link => axios.get(link)));
      console.log(response);
    } catch (e) {
      throw Error(e);
    }

    this.dogs.forEach((dog, index) => {
      dog.img = response[index].data.message;
    });
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
</style>