<template>
  <h4>Список постов</h4>
  <ul
      class="post-list"
      v-if="posts.length"
  >
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </ul>
  <h2 v-else>
    Список постов пуст
  </h2>
</template>

<script>
import postItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {postItem},

  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list {
  list-style: none;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>