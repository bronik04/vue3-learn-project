<template>
  <div class="posts">
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button
          @click="showModal"
      >Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      >
      </my-select>
    </div>
    <my-modal
        v-model:show="modalVisible"
    >
      <post-form
          @create="createPost"
      />
    </my-modal>
    <post-list
        :posts="sortedAndSearchPosts"
        @remove="removePost"
        v-if="!isLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="fetchMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyModal from "@/components/UI/MyModal";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import axios from "axios";

export default {
  components: {
    MyModal,
    PostList,
    PostForm,
    MyButton,
    MySelect,
    MyInput,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ],
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isLoading = true;
        const res = await
            axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit,
              }
            });
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit);
        this.posts = res.data;
      } catch (err) {
        alert(err);
      } finally {
        this.isLoading = false;
      }
    },
    async fetchMorePosts() {
      try {
        this.page += 1;
        const res = await
            axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit,
              }
            });
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit);
        this.posts = [...res.data, ...res.data];
      } catch (err) {
        alert(err);
      }
    },
  },
  mounted() {
    this.fetchPosts();

  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchPosts() {
      return this.sortedPost.filter(post =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {}
}
</script>

<style>

.posts {
  display: grid;
  row-gap: 10px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
}

</style>