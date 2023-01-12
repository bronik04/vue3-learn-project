<template>
 <input
     class="input"
     type="text"
     :value="modelValue"
     @input="updateInput"
 >
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  padding: 10px 15px;
  border: 1px solid teal;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 5px;
}
</style>