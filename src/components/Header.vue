<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="container">
      <div class="b">
        <img
          src="../shared/assets/istockphoto-851887894-1024x1024.jpg"
          alt="" />
        <h1>Doc Expire</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink :to="{name: 'home'}">Home</RouterLink>
        <RouterLink :to="{name: 'about'}">About</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped> 
header { 
  background-color: #bfffff; 
 
  nav { 
    .nav-routes { 
      display: flex; 
      list-style: none; 
      flex: 1; 
      justify-content: flex-end; 
      gap: 15px; 
 
      a { 
        color: inherit; 
        text-decoration: none; 
      } 
    } 
 
    h1 { 
        font-size: 20px; 
      } 
 
    padding: 9px 20px; 
    display: flex; 
    align-items: center; 
 } 
 
 .b { 
    img { 
        max-width: 40px; 
    }   
    display: flex; 
    align-items: center; 
    gap: 8px; 
 } 
} 
</style>