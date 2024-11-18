<!--Book Card Component-->
<template>
  <div>
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
        <AddButton v-if="!jaAdicionado" @click="adicionarLivro" />
        <RemoveButton v-if="jaAdicionado" @click="removerLivro" />
      </div>

      <div class="row">
        <router-link :to="{ name: 'livro', params: { id: livro.id } }" class="button">
          Ver mais
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useLivrosStore } from '../utils/useLivrosStore';
import GenreLabel from './book-components/GenreLabel.vue';
import AddButton from './book-components/AddButton.vue';
import RemoveButton from './book-components/RemoveButton.vue';

export default {
  props: {
    livro: Object,
  },
  components: {
    GenreLabel,
    AddButton,
    RemoveButton,
  },
  setup(props) {
    const livrosStore = useLivrosStore();

    const jaAdicionado = livrosStore.jaAdicionado(props.livro.id);

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
  background: #d5d5d5 !important;
  border-radius: 1rem;
  height: 30vh;
  width: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  padding: 1.5rem;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
}

.row {
  display: flex;
  column-gap: .5rem;
  padding-top: .5rem;
}

.button {
  background: #018383;
  color: white;
  font-size:small;
  font-weight: bolder;
  padding: .5rem .7rem;
  border-radius: 1.5rem;

}
</style>