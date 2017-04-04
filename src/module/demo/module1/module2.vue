<template>
  <div id="m2" class="m2">
    i am {{ id }}
    <div>
                <router-link to='/demo/5'>demo5</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm2',
  data () {
    return {
      id1: 0
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
<style lang="less" scoped>
.m2{
	border:5px solid red;
}
</style>