<template>
  <div class="modal"
       v-if="show"
       @click="hideModal"
  >
    <div
        @click.stop
        class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  }, methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
 .modal {
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background: rgba(0, 0, 0, .5);
 }

 .modal__content {
   background: #fff;
   border-radius: 10px;
   padding: 20px;
 }
</style>