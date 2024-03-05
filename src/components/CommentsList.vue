<template>
  <section class="comments_list">
    <div class="input_comment_area">
      <textarea v-model="textComment" rows="1" class="input_comment" placeholder="Новый комментарий ..."></textarea>
      <button-elem
        title="Добавить"
        size="sm"
        color="blue"
        @click="handleAddComment(post.id)"
      >
      </button-elem>
    </div>
    <div 
      v-for="comment in post.comments"
      :key="comment.id"
      class="comment_item"
    >
      <div class="comment_text"> {{ comment.text }}</div>
      <button-elem
        title="Удалить"
        size="sm"
        color="red"
        @click="postsStore.deleteComment(post.id, comment.id)"
      >
      </button-elem>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import ButtonElem from './UI/ButtonElem.vue';
  import { usePostsStore } from '@/stores/postsStore';

  const props = defineProps({
    post: Object,
  })


  const postsStore = usePostsStore();

  let textComment = ref('')

  const handleAddComment = (id) => {
    if (textComment.value !== '') {
       postsStore.addCommentToPost(id, textComment.value);
       textComment.value = '';
    }
  }

</script>

<style>
  .comments_list {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
  }
  .input_comment_area {
    display: flex;
    align-items: center;
    gap: 25px;
    width: 100%;
  }

  .input_comment{
    width: 100%;
    resize: none;
    border-radius: 15px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  .comment_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
  }

  .comment_text {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    background: #FCFBFB;
    border: 2px solid #0094FF;
    border-radius: 15px;
    padding: 10px;
    width: 100%;
  }
</style>