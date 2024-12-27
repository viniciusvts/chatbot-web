<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-dark bg-primary px-3 pb-0">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: $route.name === 'home' }" :to="{ name: 'home' }">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: $route.name === 'chat' }" :to="{ name: 'chat' }">Chat</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: $route.name === 'about' }" :to="{ name: 'about' }">About</RouterLink>
      </li>
    </ul>
  </nav>
  <header class="container">
    <div class="row">
    </div>
  </header>

  <RouterView />
</template>
