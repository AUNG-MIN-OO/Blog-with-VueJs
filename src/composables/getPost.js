const { ref } = require("@vue/reactivity");

let getPost = (id)=>{
    let post = ref(null);
    let error = ref("")
    let load = async()=>{
        try{
            await new Promise((resolve,reject)=>{
                setTimeout(resolve, 500);
            })
            let response = await fetch("http://localhost:3000/posts/"+id)
            if(response.status===404){
                throw new error("not found url");
            }
            let data = await response.json();
            post.value = data;
        }catch(err){
            error.value = err;
        }      
    }
    return {post,error,load}
}

export default getPost;