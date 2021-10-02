<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item router :to="{name: 'home'}">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item router :to="{name: 'login'}">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="isLogin">웰컴</v-btn>
        <v-btn v-else router :to="{name: 'login'}">로그인</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      ...mapState(["isLogin"])
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>