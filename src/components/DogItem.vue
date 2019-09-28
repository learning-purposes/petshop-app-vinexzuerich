<template>
  <v-card color="grey lighten-2">
    <v-img :src="img" height="170px"></v-img>
    <v-card-title>
      <div>
        <h3>{{name}}</h3>
        <p class="breed">{{breed}}</p>
      </div>
      <!-- {{data}} -->
    </v-card-title>
  </v-card>
</template>
<script>
// import Pets from "@/views/Pets";
export default {
  props: {
    img: String,
    name: String,
    breed: String
  }
};
</script>
