<template>
    <div class="row justify-content-center">
        <div class="card shadow col-8">
            <div class="card-body">
                <div class="detail">
                        <div v-if="post">
                            <h1 class="mb-4">{{post.title}}</h1>
                            <hr>
                            <div v-for="tag in post.tags" :key="tag" class="d-inline mr-2">
                                <span class="badge badge-pill badge-secondary p-2 text-uppercase">
                                    <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
                                </span>
                            </div>
                            <p class="mt-4">{{post.body}}</p>
                        </div>
                        <div v-else class="text-center">
                            <Spinner></Spinner>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import { useRoute } from 'vue-router' // to use params for id

export default {
  components: {
    TagCloud, Spinner },
    props:['id'],
    setup(props){
        let route = useRoute();

        let {post,error,load} = getPost(props.id);//getPost(route.params.id) same with props id
        load();
        return {post,error}
    }
}
</script>

<style>
    
</style>