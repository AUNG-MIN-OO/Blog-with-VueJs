<template>
    <header class="text-center mt-3 mb-4">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="mb-3 text-secondary">Bloggy Vue</h1>
            <nav class="mb-3 text-uppercase text-secondary">
                <router-link :to="{name:'Home'}" class="">Home</router-link>
                <router-link :to="{name:'Create'}">Create</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    header a{
        color: grey;
        margin-right: 20px;
        transition: 0.5s;
    }
    header a:hover{
        text-decoration: none;
        color: grey;
    }
    header a.router-link-active{
        color: black;
        font-weight: bold;
        text-decoration: none;
        border-bottom: 5px solid grey;
    }
</style>