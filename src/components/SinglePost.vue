<template>
    
    <router-link :to="{name:'Detail',params:{id:post.id}}">
        <h2 class="text-capitalize">{{post.title}}</h2>
    </router-link>
    <h5>{{cutPostBody}}</h5>
    <div v-for="tag in post.tags" :key="tag" class="d-inline mr-2">
        <span class="badge badge-pill badge-primary p-1">{{tag}}</span>
    </div>
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

</style>