<template>
  <li class="post">
    <div>
      <p>{{post.id}}</p>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
          @click="$router.push(`/posts/${post.id}`)"
      >Открыть
      </my-button>
      <my-button
          @click="$emit('remove', post)"
      >Удалить
      </my-button>
    </div>
  </li>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: "PostItem",
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  border-radius: 5px;
}

.post__btns {
  display: flex;
  gap: 10px;
}
</style>