<template>
  <h1>{{ msg }}</h1>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <div class="test">这是一段话</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
	msg: String,
})

const state = reactive({ count: 0 })

const name = 'test'
console.log(name, state)
</script>

<style scoped lang="scss">
.test {
  color: $color;
  display: flex;
  transform: translateX(30px);
}
</style>
