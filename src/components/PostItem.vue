<template>
  <section class="post_item_wrapper">   
    <div class="post_item_title">{{ post.title }}</div>
    <hr>
    <div v-if="post.commentsVisible">
      <comments-list      
        :post="post"
        >
      </comments-list>
      <button-elem
        title="Спрятать"
        size="sm"
        color="blue"
        @click="postsStore.switchCommentsVisibility(post.id)"
      >

      </button-elem>
    </div>
    <div v-else class="post_item_buttons_area">
      <button-elem
        title="Комментарии"
        size="sm"
        color="blue"
        @click="postsStore.switchCommentsVisibility(post.id)"
      >
      </button-elem>
      
      <p>Количество комментариев: {{ post.comments.length }}</p>

      <button-elem
        title="Изменить"
        size="sm"
        color="blue"
        @click="handleChangePost(post.id, post.title)"
      >
      </button-elem>

      <button-elem
        title="Удалить"
        size="sm"
        color="red"
        @click="postsStore.deletePostById(post.id)"
      >
      </button-elem>
    </div>
  </section>
</template>


<script setup>
  import { ref } from 'vue';
  import ButtonElem from './UI/ButtonElem.vue';
  import CommentsList from './CommentsList.vue';
  import { usePostsStore } from '@/stores/postsStore';
  import { useModalStore } from '@/stores/modalStore';


  const postsStore = usePostsStore();
  const modalStore = useModalStore();

  const props = defineProps({
    post: Object,
  })

  const handleChangePost = (id, title) => {
    modalStore.setModalText(title);
    modalStore.setModalId(id);
    modalStore.switchModalVisibility();
  }
</script>

<style>
  .post_item_wrapper {
    background: #FCFBFB;
    padding: 19px 21px;
    border: 2px solid #0094FF;
    border-radius: 15px;
  }

  .post_item_title {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
  }

  .post_item_buttons_area {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>