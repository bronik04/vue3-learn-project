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

export default {
  components: {
    MyModal,
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Описание поста'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'}
      ],
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
    }
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