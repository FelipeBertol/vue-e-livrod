<template>
  <div class="card">
    <h1>{{ livro.titulo }}</h1>
    <span>{{ livro.autor }}</span>
    <div class="row">
      <GenreLabel
        v-for="(genero, index) in livro.generos"
        :key="index"
        :genero="genero"
      />
    </div>
    <div class="row">
      <AddButton v-if="!jaAdicionado" @adicionarLivro="adicionarLivro" />
      <RemoveButton v-if="jaAdicionado" @removerLivro="removerLivro" />
    </div>
    <div class="row">
      <router-link 
        v-if="isLibrary !== 'yes'" 
        :to="{ name: 'livro', params: { id: livro.id } }" 
        class="button"
      >
        Ver mais
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useLivrosStore } from '../utils/useLivrosStore';
import GenreLabel from './book-components/GenreLabel.vue';
import AddButton from './book-components/AddButton.vue';
import RemoveButton from './book-components/RemoveButton.vue';

export default {
  props: {
    livro: Object,
    isLibrary: {
      type: String,
      default: 'no',
    },
  },
  components: {
    GenreLabel,
    AddButton,
    RemoveButton,
  },
  setup(props) {
    const livrosStore = useLivrosStore();

    const jaAdicionado = computed(() => livrosStore.jaAdicionado(props.livro.id));

    const adicionarLivro = () => {
      livrosStore.adicionarLivro(props.livro);
    };

    const removerLivro = () => {
      livrosStore.removerLivro(props.livro.id);
    };

    return {
      jaAdicionado,
      adicionarLivro,
      removerLivro,
    };
  },
};
</script>

<style scoped>
.card {
  background: #d5d5d5;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
}

.row {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.button {
  background: #018383;
  color: white;
  font-size: small;
  font-weight: bold;
  padding: 0.5rem 0.7rem;
  border-radius: 1.5rem;
}
</style>
