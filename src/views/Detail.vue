<template>
    <div class="detail">
        <div v-if="post">
            <h1>Detail</h1>
            {{post}}
        </div>
        <div v-else>
            <Spinner></Spinner>
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