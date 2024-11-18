import { defineStore } from 'pinia';
import livros from '../assets/livros.json';

export const useLivrosStore = defineStore('livros', {
  state: () => ({
    livros: livros, // Todos os livros disponíveis
    livrosAdicionados: [], // Livros adicionados à biblioteca
  }),
  actions: {
    carregarLivros(listaDeLivros) {
      this.livros = listaDeLivros;
    },
    adicionarLivro(livro) {
      if (!this.livrosAdicionados.some((l) => l.id === livro.id)) {
        this.livrosAdicionados.push(livro);
      }
    },
    removerLivro(livroId) {
      this.livrosAdicionados = this.livrosAdicionados.filter(
        (l) => l.id !== livroId
      );
    },
  },
  getters: {
    jaAdicionado: (state) => (id) =>
      state.livrosAdicionados.some((l) => l.id === id),
  },
});
