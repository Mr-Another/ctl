<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import routing from './routing'
export default {
  name: 'HelloWorld',
  mixins: [routing],
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.msgname)
  }
}
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 100%;
  height: 20px;
  margin: 0 10px;
  background: #f90;
}
a {
  color: #42b983;
}
</style>
