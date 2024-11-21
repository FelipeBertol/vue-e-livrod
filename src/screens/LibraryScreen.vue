<template>
  <div class="biblioteca">
    <h1>Minha Biblioteca</h1>
    <div class="body-container">
      <BookCard
        v-for="livro in livrosAdicionados"
        :key="livro.id"
        :livro="livro"
        @removerLivro="removerLivro"
        isLibrary="yes"
      />
    </div>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue';
import { useLivrosStore } from '../utils/useLivrosStore';

export default {
  components: {
    BookCard,
  },
  setup() {
    const livrosStore = useLivrosStore();

    const removerLivro = (id) => {
      livrosStore.removerLivro(id);
    };

    return {
      livrosAdicionados: livrosStore.livrosAdicionados,
      removerLivro,
    };
  },
};
</script>

<style scoped>
.biblioteca {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  max-width: 100vw;
  margin: 0 auto;
  padding: 6rem 0;
  font-family: Arial, sans-serif;
}

.body-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 5rem;
}
</style>
