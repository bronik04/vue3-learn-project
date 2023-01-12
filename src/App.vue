<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
        @click="showModal"
    >Создать пост
    </my-button>
    <my-modal v-model:show="modalVisible">
      <post-form
          @create="createPost"
      />
    </my-modal>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyModal from "@/components/UI/MyModal";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";

export default {
  components: {
    MyModal,
    PostList,
    PostForm,
    MyButton,
  },
  data() {
    return {
      posts: [],
      modalVisible: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        const res = await
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = res.data;
      } catch (err) {
        alert(err);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.app {
  padding: 20px;
  display: grid;
  row-gap: 15px;
}

</style>