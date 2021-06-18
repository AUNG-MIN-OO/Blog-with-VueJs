<template>
    
    <div class="title">
        <div>
            <router-link :to="{name:'Detail',params:{id:post.id}}">
                <h2 class="text-capitalize">{{post.title}}</h2>
            </router-link>
        </div>
        <div class="delete-btn">
            <button @click="deletePost">delete</button>
        </div>
    </div>
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
import {db} from "../firebase/config"
import {useRouter} from "vue-router"

export default {
    props:["post"],
    setup(props){
        let cutPostBody = computed(()=>{
            return props.post.body.substring(0,100)+"...";
        })

        let router = useRouter();
        let deletePost = async()=>{
            let id = props.post.id;
            await db.collection("posts").doc(id).delete();
            router.push("/")
        }

        return {cutPostBody,deletePost};
    }
}
</script>

<style>
    .title{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .title .delete-btn button{
        border-radius: 10px;
        background: red;
        color: black;
        font-weight: bold;
        border: none;
        padding: 0 10px;
        text-transform: uppercase;
    }
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