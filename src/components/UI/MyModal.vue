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
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "MyModal",
  mixins: [toggleMixin],
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