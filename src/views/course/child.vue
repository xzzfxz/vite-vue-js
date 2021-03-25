<template>
  <div>
    这是子组件：{{props.msg}}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
	msg: {
		type: String,
		default: '这是默认值',
	},
})
console.log(props)
</script>
<style lang="scss" scoped>

</style>