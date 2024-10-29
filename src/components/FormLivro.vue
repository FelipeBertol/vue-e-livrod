<template>
  <div class="formulario">
    <h1>Cadastro de Livros</h1>
    <div>
      <label for="titulo">Título:</label>
      <input v-model="novoLivro.titulo" id="titulo" placeholder="Digite o título do livro" />

    </div>

    <div>
      <label for="autor">Autor:</label>
    <input v-model="novoLivro.autor" id="autor" placeholder="Digite o nome do autor" />

    </div>

    <div>
      <label for="genero">Gênero:</label>
    <input v-model="novoLivro.genero" id="genero" placeholder="Digite o gênero do livro" />

    </div>

    <button @click="cadastrarLivro">Cadastrar Livro</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoLivro: {
        titulo: '',
        autor: '',
        genero: ''
      }
    };
  },
  methods: {

    cadastrarLivro() {
      if (this.novoLivro.titulo && this.novoLivro.autor && this.novoLivro.genero) {
        this.$emit('adicionar-livro', { ...this.novoLivro });
        this.novoLivro.titulo = '';
        this.novoLivro.autor = '';
        this.novoLivro.genero = '';
      } else {
        alert("Preencha todos os campos para cadastrar o livro.");
      }
    }
  }
};
</script>

<style scoped>
h1{text-align: center;}
.formulario {
  background-color: white;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  width: 25vw;
}

.formulario label {
  display: block;
  margin: 10px 0 5px;
}

.formulario input {
  width: 94%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: .5rem;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: rgba(0, 193, 193, 0.647);
  color: rgb(0, 0, 0);
  font-weight: bolder;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 1.5rem;
}

button:hover {
  background-color: rgb(0, 89, 89);
}
</style>
