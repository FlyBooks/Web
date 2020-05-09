<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga consequatur ratione commodi esse dolor dolore inventore corporis adipisci, dolores enim. Voluptates esse facere fugiat ratione voluptate nam eveniet cum nulla!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga consequatur ratione commodi esse dolor dolore inventore corporis adipisci, dolores enim. Voluptates esse facere fugiat ratione voluptate nam eveniet cum nulla!</p>

      <!-- <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outlined block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="primary">2</v-btn>
        </v-flex>
      </v-layout>-->

      <!-- justify-end justify-center justify-end justify-end justify-space-between -->
      <!-- v-col取代了v-flex, v-flex是1.x的写法 -->
      <!-- <v-layout row wrap justify-space-around>
        <v-col xs4 md3>
          <v-btn outlined block class="success">1</v-btn>
        </v-col>
        <v-col xs4 md3>
          <v-btn outlined block class="success">2</v-btn>
        </v-col>
      </v-layout>-->
      <v-row class="mb-3">
        <v-btn small text color="grey" @click="sortBy('title')">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>

        <v-btn small text color="grey" class="ml-3" @click="sortBy('person')">
          <v-icon small left>mdi-cloud</v-icon>
          <span class="caption text-lowercase">By people</span>
        </v-btn>
      </v-row>

      <v-card text class="px-3" v-for="project in projects" :key="project.title">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>

          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Persion</div>
            <div>{{project.person}}</div>
          </v-col>

          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>

          <v-col xs2 sm4 md2>
            <!-- <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>-->
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "1st Jan 2019",
          status: "complete"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "1st Jan 2019",
          status: "complete"
        },
        {
          title: "Create a community forum",
          person: "Couken",
          due: "1st Jan 2019",
          status: "overdue"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => {
        return a[prop] < b[prop] ? -1 : 1;
      });
    }
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: #ffaa2c;
}

.v-chip.overdue {
  background: #f83e70;
}
</style>
