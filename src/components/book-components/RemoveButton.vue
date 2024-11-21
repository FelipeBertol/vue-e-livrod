<template>
    <div class="button-container" @click="removerLivro">
      <i class="fi fi-rs-trash"></i>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      removerLivro() {
        this.$emit('removerLivro'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .button-container {
    background: red;
    border-radius: 10rem;
    padding: 0.4rem 0.9rem;
  }
  i {
    color: rgb(255, 255, 255);
  }
  </style>
  