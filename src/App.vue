<template>
  <AppNavbar /> <!-- Navbar do sistema -->
  <div class="biblioteca">
    <div class="body-container">
      

<!-- Formulário de Cadastro -->
<FormLivro @adicionar-livro="adicionarLivro" />

<!-- Lista de Livros -->
<ListaLivros :livros="livros" @deletar-livro="deletarLivro" />
    </div>
    

  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import FormLivro from './components/FormLivro.vue';
import ListaLivros from './components/ListaLivros.vue';


export default {
  components: {
    FormLivro,
    ListaLivros,
    AppNavbar
  },
  data() {
    return {
      livros: [] // Inicializando a lista de livros
    };
  },
  methods: {
    adicionarLivro(livro) {
      this.livros.push(livro); // Adiciona o livro à lista
    },
    deletarLivro(index) {
      this.livros.splice(index, 1); // Remove o livro com base no índice
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
  background-color: #000000;
  height: 90vh;
background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
.body-container {

}
</style>
