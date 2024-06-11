<template>
  <div class="q-pa-md q-gutter-md">
    <q-layout view="hHh lpR fFf">

      <!-- Sidebar -->
      <q-drawer v-model="sidebarOpen" show-if-above content-class="bg-primary text-white" :style="{width: sidebarWidth}">
        <div class="q-pa-md">
          <h4 class="q-mb-sm">Sidebar Title</h4>
          <q-list>
            <q-item to="/" exact>
              <q-item-section icon="home">Home</q-item-section>
            </q-item>
            <q-item to="/page1">
              <q-item-section icon="list">Page 1</q-item-section>
            </q-item>
            <q-item to="/page2">
              <q-item-section icon="view_quilt">Page 2</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-drawer>

      <!-- Main content -->
      <q-page-container>
        <q-header elevated class="bg-primary text-white">
          <q-toolbar>
            <q-btn dense flat round icon="menu" @click="sidebarOpen = !sidebarOpen" class="q-mr-sm" />
            <q-toolbar-title>Dashboard</q-toolbar-title>
          </q-toolbar>
        </q-header>
        <q-page class="q-pa-md">
          <!-- Your main content here -->
          <router-view></router-view>
        </q-page>
      </q-page-container>

    </q-layout>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
  data() {
    return {
      sidebarOpen: false,
      sidebarWidth: '200px'
    }
  }
}
</script>

<style>
/* Customize the sidebar drawer */
.q-drawer {
  z-index: 999;
}
/* Customize the sidebar list items */
.q-item {
  padding: 12px;
}
.q-item__section {
  font-weight: bold;
}
.q-item__icon {
  font-size: 18px;
  margin-right: 10px;
}
</style>
