<!--Add Button Button-->

<template @click="adicionarLivro">
    <div class="button-container" >
        <i class="fi fi-rs-plus"></i>
    </div>
</template>

<script>
export default {
  methods: {
    adicionarLivro() {
      console.log("Guardou")
      this.$emit('adicionar'); // Emite o evento 'adicionar' para o componente pai
    }
  }
};
</script>

<style scoped>
.button-container {
    background: #00ff00;
    border-radius: 10rem;
    padding: .4rem .9rem;
}
i {
    color: rgb(0, 0, 0);
    font-size: 1rem;
}
i[class^="fi-rs-"]:before, i[class*=" fi-rs-"]:before {
    line-height: 2;
    font-weight: bolder !important;
}
</style>
