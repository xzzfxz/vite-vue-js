<template>
  <div>
    课程列表页
    <Child :msg="msg" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Child from './child.vue'

const msg = undefined

const store = useStore()
store.dispatch('increament')

// setTimeout(() => {
// 	store.dispatch('increament')
// }, 2000)
</script>

<style lang="scss" scoped>

</style>