<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
          :value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Название"
      >
      <input
          :value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Описание"
      >
      <button
          class="btn"
          @click="createPost"
      >Создать
      </button>
    </form>

    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Описание поста'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'}
      ],
      title: '',
      body: '',
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
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

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  border-radius: 5px;
}

.input {
  padding: 10px 15px;
  border: 1px solid teal;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 5px;
}

.app {
  padding: 20px;
  display: grid;
}

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

.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 5px;
  cursor: pointer;
}

</style>