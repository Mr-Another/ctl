<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import routing from '@/components/routing'
  import { setToken } from "../utils/auth";

  export default {
    mixins:[routing],
    created() {
      console.log(this.msgtitle)
      setToken('123456')
      console.log(this.$route.meta)
    }
  }
</script>
