<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Dashboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item><a href="/">
            <q-img
              src="../assets/logo.jpg"
              class="q-ml-lg"
              width="200px"
              height="80px"
              alt="monitor.patist"
              rel="preload"
              loading="lazy"
            />
          </a></q-item>
        <q-item-label class="text-center"><h5>METEHAN KIRAN</h5></q-item-label>
        <q-item clickable rel="noopener" href="/dashboard">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item clickable rel="noopener" href="/dashboard/watchlist">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Watchlist</q-item-label>
            <q-item-label caption>Actively pursued patents</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable rel="noopener" href="/dashboard/watchlist/add">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-plus" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Add Patent</q-item-label>
            <q-item-label caption>Add patent to watch</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable rel="noopener" href="/dashboard/search">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-magnifying-glass" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Search</q-item-label>
            <q-item-label caption>Search for a patent</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item clickable rel="noopener" href="/dashboard/account">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Account</q-item-label>
            <q-item-label caption>Account Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable rel="noopener" href="/dashboard/contact">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-phone" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
            <q-item-label caption>Contact Us</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script>
