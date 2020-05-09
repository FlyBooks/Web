<template>
  <div class="home">
    <h1>home page2</h1>
    <v-btn class="pink white--text btn">click me</v-btn>
    <v-btn color="pink" depressed id="btn2" class="btn">click me</v-btn>
    <v-btn flat color="green">click me</v-btn>

    <v-btn depressed class="btn pink white--text">
      <!-- https://material.io/resources/icons/?style=baseline图标地址 -->
      <v-icon >mdi-email</v-icon>
    </v-btn>

    <v-btn depressed small class="pink white--text btn">
      <v-icon left small>
        mdi-email
      </v-icon>
      <span>email me</span>
    </v-btn>

    
    <v-btn class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>

<v-btn fab depressed small dark color="purple">
  <v-icon>mdi-heart</v-icon>
</v-btn>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home2"
};
</script>


<style scoped>
#btn2:hover {
  color: white;
}
.btn {
  margin: 5px 10px;
}
</style>