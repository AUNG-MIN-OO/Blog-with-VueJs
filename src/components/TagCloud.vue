<template>
    <h3 class="text-uppercase">Tag  Cloud</h3>
    <hr>
    <div v-for="tag in uniqueTags" :key="tag">
        <div class="tag">
            <router-link :to="{name:'Tag',params:{tag}}" class="">{{tag}}</router-link>    
        </div> 
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:["posts"],
    setup(props){
        let tags =ref([]);
        props.posts.forEach((post)=>{
            post.tags.forEach((tag)=>{
                tags.value.push(tag);
            })
        })

        let uniqueTags = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag) === index;
        })

        return {uniqueTags};
    }
}
</script>

<style>
    .tag{
        padding: 5px 10px;
        border: 1px solid none;
        border-radius: 20px;
        width: 70%;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 5px;
        background-color: #74f9ff;
    }
    .tag a{
        color: white;
    }
    .tag a:hover{
        text-decoration: none;
    }
    .tag :active{
    }
    .tag a.router-link-active { 
        color: black;
    }
</style>