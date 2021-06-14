<template>
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="posts.length>0">
        <PostList :posts="posts"></PostList>
    </div>  
    <div v-else class="text-center">
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts.js'

export default {
  components: {
    Spinner, PostList },
    setup(){
        let {posts,error,load} = getPosts()
        load()
        return {posts,error};
    }
}
</script>

<style>
    .home{

        text-align: center;
    }
</style>
