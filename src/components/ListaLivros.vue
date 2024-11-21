<template>
  <div class="lista-livros">
    <h2>Livros Cadastrados</h2>
    <ul>
      <li v-for="livro in livros" :key="livro.id">
        <strong>{{ livro.titulo }}</strong> por {{ livro.autor }} - <em>{{ livro.genero }}</em>
        <button @click="deletarLivro(livro.id)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useLivrosStore } from '@/stores/livros';

export default {
  setup() {
    const livrosStore = useLivrosStore();
    const livros = computed(() => livrosStore.livrosAdicionados);

    const deletarLivro = (livroId) => {
      livrosStore.removerLivro(livroId);
    };

    return {
      livros,
      deletarLivro,
    };
  },
};
</script>

<style scoped>
.lista-livros ul {
  list-style-type: none;
  padding: 0;
}

.lista-livros li {
  margin: 10px 0;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #e57373;
  border: none;
  border-radius: 1.5rem;
}
</style>
