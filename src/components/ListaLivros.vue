<template>
  <div class="lista-livros">
    <h2>Livros Cadastrados</h2>
    <ul>
      <li v-for="(livro, index) in livros" :key="index">
        <strong>{{ livro.titulo }}</strong> por {{ livro.autor }} - <em>{{ livro.genero }}</em>
        <button @click="$emit('deletar-livro', index)">Deletar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    livros: {
      type: Array,
      required: true
    }
  }
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
  align-items: center;
}

button {
  background-color: #e57373;
  padding: 10px 15px;
    border-radius: 1.5rem;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
}

button:hover {
  background-color: #d32f2f;
}
</style>
