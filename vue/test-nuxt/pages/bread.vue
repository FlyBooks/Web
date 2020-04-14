<template>
  <div>
    <v-breadcrumbs :items="items" divider=">" ></v-breadcrumbs>

    <v-breadcrumbs :items="items" divider="-" ></v-breadcrumbs>
  </div>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: '/about'
        },
        {
          text: 'Link 2',
          disabled: false,
          href: '/haha'
        }
      ]
    })
  }
</script>