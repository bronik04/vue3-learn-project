<template>
  <div class="navbar">
    <div class="navbar__logo" @click="$router.push('./')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('./posts')">Посты</my-button>
      <my-button @click="$router.push('./about')">О нас</my-button>
      <my-button @click="$router.push('./composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "MyNavbar",
  components: {MyButton}
}
</script>

<style scoped>
.navbar {
  height: 75px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar__btns {
  display: flex;
  gap: 10px;
}

.navbar__logo {
  cursor: pointer;
}

</style>