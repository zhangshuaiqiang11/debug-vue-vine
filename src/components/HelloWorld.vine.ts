// import { VineStyleLang } from './../../../../vue-vine/packages/compiler/src/types';
// import { log } from '@clack/prompts';
// import { vineEmits } from 'vue-vine';
import { ref } from 'vue'

export function SecondCpt() {
  vineStyle(`
    .name{
      color: red
    }
  `)

  const list = [
    { index: 0, name: '1' },
    { index: 1, name: '2' },
    { index: 2, name: '3' },
  ]

  return vine`
    <ul>
      <li v-for="item in list" :key="item.index" class="name">{{ item.name }}</li>
    </ul>
  `
}


export function HelloWorld(
//   props: { // 第一种使用props传参
//   info: string
// } 
) {
  console.log('style', vineStyle(``))
  // const info = props.info 一
  // const info = vineProp<string>() 二
  const test = vineProp.withDefault(false) // 定义的名称需要为传过来的参数的某一个，参数随意，否则以定义的取值为主， 如果参数里面没有，取到的则是 后面定义的 value
  console.log('props:', test)
  const isClick = ref(true)
  const emit = vineEmits<{
    titleClick: [string]
  }>() // 这个是函数，必须自调用
  function handleTestClick() {
    console.log('ts',)
    isClick.value = !isClick.value
    const title = isClick.value ? '测试1' : '测试2'
    emit('titleClick', title)

  }


  return vine`
    <div>{{ test }}</div>
    <SecondCpt />
    <slot />
    <button @click="handleTestClick">测试</button>
  `
}