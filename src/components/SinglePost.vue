<template>
    
    <router-link :to="{name:'Detail',params:{id:post.id}}">
        <h2 class="text-capitalize">{{post.title}}</h2>
    </router-link>
    <div v-for="tag in post.tags" :key="tag" class="d-inline mr-2">
        <span class="badge badge-pill badge-primary p-1">
            <!-- tag:tag=tag -->
            <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link> 
        </span>
    </div>
    <h5 class="mt-4">{{cutPostBody}}</h5>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:["post"],
    setup(props){
        let cutPostBody = computed(()=>{
            return props.post.body.substring(0,100)+"...";
        })
        return {cutPostBody};
    }
}
</script>

<style>
    span a{
        color: white;
        /* margin-right: 20px; */
        transition: 0.5s;
    }
    span a:hover{
        text-decoration: none;
        color: white;
    }
</style>