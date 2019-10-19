<template>
  <v-app>
    <v-app-bar app class="purple darken-4">
 
      <v-toolbar-title class="headline white--text center--text">

        <span> Slack Rain</span>
      </v-toolbar-title>
    

    </v-app-bar>

        <transition name="page">
            <router-view/>
        </transition>

  </v-app>
</template>

<script>
</script>
