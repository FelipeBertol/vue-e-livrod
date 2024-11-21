<template>
  <div class="button-container" @click="adicionarLivro">
    <i class="fi fi-rs-plus"></i>
  </div>
</template>

<script>
export default {
  methods: {
    adicionarLivro() {
      this.$emit('adicionarLivro'); // Emite o evento 'adicionarLivro' para o componente pai
    },
  },
};
</script>

<style scoped>
.button-container {
  background: #00ff00;
  border-radius: 10rem;
  padding: 0.4rem 0.9rem;
}
i {
  color: rgb(0, 0, 0);
  font-size: 1rem;
}
</style>
