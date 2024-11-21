<template>
  <div class="formulario">
    <h1>Cadastro de Livros</h1>
    <div class="cont">
      <label for="titulo">Título:</label>
      <input 
        v-model="novoLivro.titulo" 
        id="titulo" 
        placeholder="Digite o título do livro" 
      />
    </div>
    <div class="cont">
      <label for="autor">Autor:</label>
      <input 
        v-model="novoLivro.autor" 
        id="autor" 
        placeholder="Digite o nome do autor" 
      />
    </div>
    <div class="cont">
      <label for="genero">Gênero:</label>
      <input 
        v-model="novoLivro.genero" 
        id="genero" 
        placeholder="Digite o gênero do livro" 
      />
    </div>
    <button @click="cadastrarLivro">Cadastrar Livro</button>
  </div>
</template>

<script>
import { useLivrosStore } from '../utils/useLivrosStore';

export default {
  data() {
    return {
      novoLivro: {
        titulo: '',
        autor: '',
        genero: '',
      },
    };
  },
  methods: {
    cadastrarLivro() {
      const { titulo, autor, genero } = this.novoLivro;

      if (!titulo.trim() || !autor.trim() || !genero.trim()) {
        alert('Todos os campos são obrigatórios.');
        return;
      }

      const livrosStore = useLivrosStore();
      const novoLivro = { ...this.novoLivro, id: Date.now(), generos: [genero] };

      livrosStore.adicionarLivro(novoLivro);
      this.novoLivro = { titulo: '', autor: '', genero: '' };
    },
  },
};
</script>


<style scoped>
.formulario {
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 400px;
  margin: auto;
}
button {
  background-color: #00c1c1;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.5rem;
  font-weight: bold;
}
small {
  color: red;
  font-size: 0.8rem;
}

.cont {
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 1rem;
  padding: .6rem;
}
</style>
