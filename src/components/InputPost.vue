<template>
  <div class="input_post">
   <textarea 
      v-model="titleText"
      rows="1"
      class="textarea_post"
      placeholder="Новый пост ..."
      @input="autoHeight"
      >
    </textarea>
    <button-elem
      title="Добавить"
      size="bg"
      color="blue"
      @click="handleAdd"
    >
    </button-elem>

    </div>
 

</template>

<script setup>
  import {ref} from 'vue'

  let titleText = ref('')

  import ButtonElem from './UI/ButtonElem.vue';
  import { usePostsStore } from '@/stores/postsStore';

  const postsStore = usePostsStore();



  const handleAdd = () => {
    if (titleText.value !== '') {
      postsStore.addPost(titleText.value);
      titleText.value = ''
    } 
  }

  function autoHeight(e) {
    e.target.style.height = "5px"
    e.target.style.height = (e.target.scrollHeight) + "px";
  }

</script>

<style>
  .input_post {
    margin-top: 20px;
    background: #FCFBFB;
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 19px 21px;
    border: 2px solid #0094FF;
    border-radius: 15px;
  }

  .textarea_post {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    border-radius: 15px;
    border: 1px solid #6E6E6E;
    resize: none;
    padding: 6px 16px;
  }


</style>