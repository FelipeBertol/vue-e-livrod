<!-- Book Screen-->
<template>
  <div class="container">
    <h1>{{ livro.titulo }}</h1>
    <div class="content">
      <div class="image-container">
        <img :src="livro.imagem" :alt="`Capa do livro: ${livro.titulo}`" />
      </div>
      <div class="column">
        <p><strong>Autor:</strong> {{ livro.autor }}</p>
        <p><strong>Gêneros:</strong> {{ livro.generos.join(', ') }}</p>
        <p class="description"><strong>Descrição:</strong> {{ livro.descricao }}</p>
        <div class="row">
          <AddButton v-if="!jaAdicionado" @click="adicionarLivro" />
          <RemoveButton v-if="jaAdicionado" @click="removerLivro" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'; // Importa o hook useRoute
import { useLivrosStore } from '../utils/useLivrosStore';
import AddButton from '../components/book-components/AddButton.vue';
import RemoveButton from '../components/book-components/RemoveButton.vue';


export default {
  components: {
    AddButton,
    RemoveButton,
  },
  setup() {
    const route = useRoute(); 
    const livrosStore = useLivrosStore();

    const livroId = route.params.id; 

    const livro = livrosStore.livros.find((livro) => livro.id === Number(livroId));

    console.log("Teste")
    return {
      livro,
      livrosStore,
    };
  },
};
</script>


<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  padding-top: 9rem;
  max-width: 100vw;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.content {
  display: flex;
  align-items: center;
  column-gap: 1.7rem;
  justify-content: center;
  padding: 3rem 0rem;
  width: 55%;
}

.column {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.row {
  display: flex;
  align-items: center;
}

.image-container {
  margin-bottom: 1rem;
}

.image-container img {
  width: 15rem;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.description {
  width: 100%;
}
</style>