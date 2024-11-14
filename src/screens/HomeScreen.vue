
 <!-- Home Screen -->
<template>
  <div class="biblioteca">
    <div class="body-container">
      <BookCard/>
      <BookCard/>
      <BookCard/>
    </div>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue';
export default {
  components: {
    BookCard
  },
  data() {
    return {
      livros: [] // Inicializando a lista de livros
    };
  },
  methods: {
    adicionarLivro(livro) {
      this.livros.push(livro); 
    },
    deletarLivro(index) {
      this.livros.splice(index, 1); 
    }
  }
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
  display:flex;
  gap:2rem;
}
</style>
