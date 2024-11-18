<!--Remove Button-->

<template>
    <div class="button-container">
        <i class="fi fi-rs-trash"></i>
    </div>
</template>

<style scoped>
    .button-container {
        background:red;
        border-radius:10rem;
        padding: .4rem .9rem;
    }
    i {
        color:rgb(255, 255, 255);
    }
    i[class^="fi-rs-"]:before, i[class*=" fi-rs-"]:before {
        line-height: 2;
    }
</style>