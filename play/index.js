import { play } from 'vue-play'

play('MyButton')
  .add('with text', {
    template: `<button @click="$log('123')">Hello</button>`
  })
