import { defineStore } from "pinia";
import { ref } from "vue";


export const useModalStore = defineStore('modalStore', ()=> {

  let modalVisible = ref(false);
  let modalText = ref('Текст поста');
  let modalId = ref('');

  const switchModalVisibility = () => {
    modalVisible.value = !modalVisible.value;
  }

  const setModalText = (text) => {
    modalText.value = text;
  }

  const setModalId = (id) => {
    modalId.value = id
  }

  return {
    modalVisible,
    modalText,
    modalId,
    switchModalVisibility,
    setModalText,
    setModalId
  }

})