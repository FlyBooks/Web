<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-row wrap>
        <v-col v-for="person in team" :key="person.name" xs12 sm6 lg3>
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar class="grey lighten-2" size="100" >
                <img :src="person.avatar" alt="missed" />
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="text--grey">{{person.role}}</div>
            </v-card-text>

            <v-card-action name="mgs">
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          avatar: "/avatar-2.png"
        },
        {
          name: "Chun Li",
          role: "Web developer",
          avatar: "/avatar-3.png"
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.png"
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          avatar: "/avatar-5.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
