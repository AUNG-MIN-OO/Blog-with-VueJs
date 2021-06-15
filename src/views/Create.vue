<template>
    <!-- <div class="container"> -->
        <div class="row justify-content-center align-items-center">
            <div class="card shadow col-6">
                <div class="card-header bg-white text-center">
                    <h2 class="font-weight-bold">Create Post</h2>
                </div>
                <div class="card-body">
                    <form @submit.prevent="addPost">
                        <div class="form-group">
                            <label for="" class="font-weight-bold">Title</label>
                            <input type="text" class="form-control" required v-model="title">
                        </div>
                        <div class="form-group">
                            <label for="" class="font-weight-bold">Body</label>
                            <textarea cols="30" rows="5" class="form-control" v-model="body"></textarea>
                        </div>
                        <div class="form-gorup mb-4">
                            <label for="" class="font-weight-bold">Tags(tap enter to add a tag)</label>
                            <input type="text" class="form-control" v-model="tag" @keydown.enter.prevent="handleKeydown">
                        </div>
                        <div class="d-block mb-4">
                            <div v-for="tag in tags" :key="tag" class="d-inline mr-2">
                                <span class="badge badge-pill badge-success">{{tag}}</span>
                            </div>
                        </div>
                        <button class="btn btn-primary float-right">Add Post</button>
                    </form>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    setup(){
        let router = useRouter();
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeydown= ()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value=""
        }

        let addPost = async()=>{
            await fetch("http://localhost:3000/posts",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(
                    {
                        title:title.value,
                        body:body.value,
                        tags:tags.value
                    }
                )
            })
            // redirect user to homepage
            router.push("/");
        }

        return {title,body,tag,handleKeydown,tags,addPost}
    }
}
</script>

<style>

</style>