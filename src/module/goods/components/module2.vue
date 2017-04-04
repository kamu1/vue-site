<template>
  <div id="m2" class="m2">
    i am {{ id2 }}
  </div>
</template>

<script>
export default {
  name: 'm2',
  data () {
    return {
      id: 5
    }
  },
  computed: {
    id2 () {
      return 44
    }
  }
}
</script>
<style lang="less" scoped>
.m2{
	border:5px solid red;
}
</style>