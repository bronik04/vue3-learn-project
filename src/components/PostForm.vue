<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание"
    >
    <my-button
        @click="createPost"
    >Создать
    </my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostForm",
  components: {MyButton},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>

form {
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

form > h4 {
  margin-bottom: 15px;
}

.input {
  padding: 10px 15px;
  border: 1px solid teal;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 5px;
}
</style>