<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click="drawer=!drawer" class="grep--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninjia</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="success">
      <v-container align-center column>
         <v-col class="mt-5">
           <v-avatar>
             <img src="/avatar-1.png" alt="missed">
           </v-avatar>
           <span class="white--text subheading mt-1"> Eva Liu</span>
         </v-col>
      </v-container>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-headset</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="white--text">Dashboard</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item v-for="item in links" :key="item.text" router :to="item.route">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-heart", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-brush", text: "Projects", route: "/projects" },
        { icon: "mdi-headset", text: "Team", route: "/team" },
        { icon: "mdi-mouse", text: "Pagination", route: "/pagination" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
