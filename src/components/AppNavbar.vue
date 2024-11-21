<template>
    <div class="container">
      <h1>E-Livros</h1>
      <div class="column">
        <router-link to="/" class="button">Início</router-link>
        <router-link to="/biblioteca" class="button">Sua biblioteca</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    height: 4rem;
    display: flex;
    align-items: center;
    width: 100vw;
    background: #00c1c1;
    padding-left: 3rem;
    position: fixed;
    column-gap: 5rem;
  }
  
  .column {
    display: flex;
    column-gap: 1rem;
  }
  
  h1 {
    margin: 0 !important;
    text-transform: uppercase;
  }
  
  .button {
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    color: black;
    padding: 0.5rem;
    text-decoration: none;
  }
  
  .button:hover {
    background: #018383;
    border-radius: 2rem;
  }
  </style>
  