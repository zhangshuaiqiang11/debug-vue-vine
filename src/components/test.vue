<template>
  <a>{{title}}</a>
  <HelloWorld :test="'zhang'" :info="'333'" @titleClick="handleTitleClick">
    <SlotCpt />
  </HelloWorld>
</template>
<script lang="ts" setup>
import { HelloWorld } from './HelloWorld.vine'
import { ref } from 'vue'

const props = defineProps(['rrr'])

function handleTitleClick(val) {
    title.value = val
    console.log('title', val, props.rrr)
}
const title = ref('')
console.log('222')
</script>