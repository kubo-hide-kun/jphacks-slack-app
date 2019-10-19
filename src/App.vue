<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Slack Rain</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
      <transition name="page">
        <router-view/>
      </transition>
    </v-app>
</template>

<script>
</script>
