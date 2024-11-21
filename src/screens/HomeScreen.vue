<!--Home Screen--><template>
  <div class="biblioteca">
    <FormLivro />
    <div class="body-container">
      <BookCard
        v-for="livro in livros"
        :key="livro.id"
        :livro="livro"
        isLibrary="no"
      />
    </div>
  </div>
</template>

<script>
import { useLivrosStore } from '../utils/useLivrosStore';
import livros from '../assets/livros.json';
import BookCard from '../components/BookCard.vue';
import FormLivro from '../components/FormLivro.vue';

export default {
  components: {
    BookCard,
    FormLivro
  },
  setup() {
    const livrosStore = useLivrosStore();

    if (livrosStore.livros.length === 0) {
      livrosStore.carregarLivros(livros);
    }

    return {
      livros: livrosStore.livros,
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
