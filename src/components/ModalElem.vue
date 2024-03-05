<template>
  <section :class="modalStore.modalVisible ? 'modal_wrapper active' : 'modal_wrapper'">
    <div class="modal_content">
      <textarea rows="3" class="modal_text" @input="autoHeight" @focus="autoHeight" v-model="modalStore.modalText">Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.</textarea>
      <div class="modal_buttons">
        <button-elem
          title="Подтвердить"
          size="sm"
          color="blue"
          @click="handleChangePost"
        >         
        </button-elem>
        <button-elem
          title="Закрыть"
          size="sm"
          color="red"
          @click="handleClose"
        >         
        </button-elem>
      </div>
    </div>
  </section>

</template>



<script setup>
  import { useModalStore } from '@/stores/modalStore';
  import ButtonElem from './UI/ButtonElem.vue';
  import { usePostsStore } from '@/stores/postsStore';

  const modalStore = useModalStore();

  const postsStore = usePostsStore();


  function autoHeight(e) {
    e.target.style.height = "5px"
    e.target.style.height = (e.target.scrollHeight) + "px";
  }

  const handleChangePost = () => {
    postsStore.updatePostTitle(modalStore.modalId, modalStore.modalText);
    modalStore.modalText = '';
    modalStore.modalId = '';
    modalStore.modalVisible = false;

  }

  const handleClose = () => {
    modalStore.modalText = '';
    modalStore.modalId = '';
    modalStore.modalVisible = false;
  }

</script>

<style>

  .modal_wrapper {
    width: 100%;
    height: 100%;
    padding: 32px;
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    opacity: 0;
    transition: 0.5s;
    z-index: 1000;
  }

  .modal_wrapper.active {
    opacity: 1;
    background: rgba(28, 28, 28, 0.6);
    pointer-events: all;
}

  .modal_text {
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
    margin-bottom: 16px;
  }
  .modal_content {
    width: 100%;
    max-width: 800px;
    padding: 30px 20px 18px 20px;
    border: 2px solid #0094FF;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 15px;
    background: #FCFBFB;

  }

  .modal_buttons {
    display: flex;
    justify-content: flex-end;
    gap: 26px;
  }
</style>