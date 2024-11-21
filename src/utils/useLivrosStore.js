import { defineStore } from 'pinia';
import livros from '../assets/livros.json';

export const useLivrosStore = defineStore('livros', {
  state: () => ({
    livros: [...livros], // Livros disponíveis
    livrosAdicionados: JSON.parse(localStorage.getItem('livrosAdicionados')) || [], // Carrega do localStorage ou usa vazio
  }),
  actions: {
    carregarLivros(listaDeLivros) {
      if (this.livros.length === 0) {
        this.livros = [...listaDeLivros];
      }
    },
    adicionarLivro(livro) {
      if (!this.jaAdicionado(livro.id)) {
        this.livrosAdicionados.push({ ...livro });
        this.syncLocalStorage(); // Atualiza o localStorage
      }
    },
    removerLivro(livroId) {
      this.livrosAdicionados = this.livrosAdicionados.filter(
        (livro) => livro.id !== livroId
      );
      this.syncLocalStorage(); // Atualiza o localStorage
    },
    syncLocalStorage() {
      // Sincroniza o estado com o localStorage
      localStorage.setItem('livrosAdicionados', JSON.stringify(this.livrosAdicionados));
    },
  },
  getters: {
    jaAdicionado: (state) => (id) =>
      state.livrosAdicionados.some((livro) => livro.id === id),
  },
});
