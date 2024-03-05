<template>
  <main class="wrapper">
    <input-post></input-post>
    <posts-list></posts-list>
    <modal-elem></modal-elem>
  </main>
  
</template>

<script setup>
  
  import InputPost from "./components/InputPost.vue"
  import PostsList from "./components/PostsList.vue"
  import ModalElem from "./components/ModalElem.vue"

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    background-color: rgb(229,	247,	254);
    
  }

  .wrapper {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }

</style>