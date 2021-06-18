<template>
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="posts.length>0">
        <div class="layout">
            <div class="post">
                <PostList :posts="posts"></PostList>
            </div>
            <div class="tagcloud">
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
    </div>  
    <!-- <div v-else class="text-center">
        <Spinner></Spinner>
    </div> -->
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts.js'

export default {
  components: {
    TagCloud,
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
    .layout{
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 30px;
    }
</style>
