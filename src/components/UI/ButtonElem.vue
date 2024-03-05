<template>
  <button
    :class="` button ${size} ${color}`"
  >
    {{ title }}</button>
</template>

<script setup>

const props = defineProps({
  title: String,
  size: String,
  color: String,
})
</script>

<style scoped>

  .button {
    border: none;
    border-radius: 15px;
    padding: 12px 18px 14px 18px;
    color: white;
    cursor: pointer;
  }

  .bg {
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }

  .sm {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  .red {
    background: #FF218B;
  }

  .blue {
    background: #216CFF;
  }
</style>