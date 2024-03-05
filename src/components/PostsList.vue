<template>

  <section class="posts_list">
    <post-item 
      v-for="post in postsStore.posts" 
      :key="post.id"
      :post="post"></post-item>
  </section>

</template>


<script setup>

import { usePostsStore } from '@/stores/postsStore';
import PostItem from "./PostItem.vue"

const postsStore = usePostsStore();

</script>

<style>

  .posts_list {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

</style>