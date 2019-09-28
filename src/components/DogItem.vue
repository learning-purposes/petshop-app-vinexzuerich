<template>
  <v-card color="grey lighten-2">
    <v-img :src="img" height="170px"></v-img>
    <v-card-title>
      <v-btn @click="$emit('addToFavorites', dog)">Add to Favorites</v-btn>
      <div>
        <h3>{{name}}</h3>
        <p class="breed">{{breed}}</p>
      </div>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    img: String,
    name: String,
    breed: String
  }
};
</script>
