<template>
    <div class="row justify-content-center">
        <div class="card shadow col-8">
        <div class="card-body">
            <div class="detail">
                <div v-if="post">
                    <h1 class="mb-4">{{post.title}}</h1>
                    <div v-for="tag in post.tags" :key="tag" class="d-inline mr-2">
                        <span class="badge badge-pill badge-secondary p-2 text-uppercase">{{tag}}</span>
                    </div>
                    <p class="mt-4">{{post.body}}</p>
                    
                </div>
                <!-- <div v-else>
                    <Spinner></Spinner>
                </div> -->
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
export default {
  components: { Spinner },
    props:['id'],
    setup(props){
        let {post,error,load} = getPost(props.id);
        load();
        return {post,error}
    }
}
</script>

<style>
    .detail{
        /* text-align: center; */
    }
</style>