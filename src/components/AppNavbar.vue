<!--Navbar Component-->

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
    background-image: url("https://www.transparenttextures.com/patterns/brilliant.png");
    box-shadow: 1px 3px 10px 0px black;
    padding-left: 3rem;
    position: fixed;
    opacity: 100%;
    column-gap:5rem
}

.column {
    display: flex;
    column-gap:1rem;
}

h1 {
    margin: 0 !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
}

.button {
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    color:black;
    padding:.5rem;
    text-decoration:none;
}

.button:hover {
    background:#018383;
    
    border-radius:2rem;
}
</style>
