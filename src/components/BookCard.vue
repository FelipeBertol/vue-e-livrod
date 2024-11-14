<!-- Book Card -->
<template>
    <router-link>
        <div class='card'>
          <h1>Título</h1>
          <span>Autor</span>
          <div class='row'>
            <GenreLabel/>
           <GenreLabel/>
          </div> 
          <div class="row">
            <AddButton/>
            <RemoveButton/>
          </div>

        </div>
    </router-link>
</template>

<script>
import GenreLabel from './book-components/GenreLabel.vue';
import AddButton from './book-components/AddButton.vue';
import RemoveButton from './book-components/RemoveButton.vue';
export default {
  components: {
    GenreLabel,
    AddButton,
    RemoveButton,
  },

};
</script>

<style scoped>
.card {
    background:#d5d5d5 !important;
    border-radius:1rem;
    height:20vh;
    width:25vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap: .5rem
}

h1 {
    font-size:1.5rem
}

.row {
    display:flex;
    column-gap:.5rem;
}
</style>