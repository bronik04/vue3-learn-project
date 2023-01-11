<template>
  <li class="post">
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
  </li>
</template>

<script>
export default {
  name: "PostItem",
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
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  border-radius: 5px;
}
</style>