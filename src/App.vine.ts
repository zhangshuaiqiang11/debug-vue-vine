// import { HelloWorld } from './components/HelloWorld.vine'
import Test from './components/test.vue'
import { ref } from 'vue'


function SlotCpt() {
  return vine`
    <div>张帅强</div>
  `
}

export function App() {
  const title = ref('')
  function handleTitleClick(val) {
    title.value = val
    console.log('title', val)
  }
  return vine`
    <div>
      <span>{{ title }}</span>
      <Test :rrr="'hahahahahaha'" />
    </div>
    `
}