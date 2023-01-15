<template>
  <h4>Список постов</h4>
  <ul
      class="post-list"
  >
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
  </ul>
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
</style>