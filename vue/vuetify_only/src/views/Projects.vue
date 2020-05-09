<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-expansion-panels>
      <v-expansion-panel v-for="item in projects" :key="item.title">
        <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <div>{{item.person}}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: "Projects",
  data(){
      return {
          projects: [
              {title: 'Design a new website', person: "The Net Ninja", due: '1st Jan 2019',status: 'overdue'},
              {title: 'Code up the homepage', person: "The Net Ninja", due: '1st Jan 2019',status: 'overdue'},
              {title: 'Design video thumbnails', person: "The Net Ninja", due: '1st Jan 2019',status: 'overdue'},
              {title: 'Create a community forum', person: "The Net Ninja", due: '1st Jan 2019',status: 'overdue'},
              {title: 'Do inbox', person: "The Net Ninja", due: '1st Jan 2019',status: 'overdue'}
          ]
      }
  }
};
</script>

<style scoped>
</style>
