<template>
  <router-link to="/">首页</router-link><br />
  <router-link to="/course-list">课程列表页</router-link>
  <div>{{store.state.count}}</div>
  <router-view></router-view>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
import { useStore } from 'vuex'
import { computed, watch } from 'vue'

// eslint-disable-next-line no-unused-vars
const store = useStore()
// eslint-disable-next-line no-unused-vars
const name = computed(() => {
	return store.state.count
})
watch(() => store.state.count, (val) => {
	console.log(val)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>