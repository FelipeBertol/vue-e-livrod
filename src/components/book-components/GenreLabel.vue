<!-- Genre Label Components-->
<template>
    <span>{{ genero }}</span>
  </template>
  
  <script>
  export default {
    props: {
      genero: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  span {
    color: white;
    font-size: 0.6rem;
    font-weight: bold;
    text-transform: uppercase;
    background: #00c1c1;
    padding: 0.4rem;
    border-radius: 3rem;
  }
  </style>
  