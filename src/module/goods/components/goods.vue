<template>
  <div id="app" class="main-block">
    <div id="top">
      <!--头部-->
      <v-top></v-top>
    </div>
    <div class="main-info">
      <div id="left">
        <!--在栏-->
        <v-list></v-list>
      </div>
      <div id="right">
        <!--右栏-->right
      </div>
    </div>
    <div id="bottom">
      <!--底部-->bttom
    </div>
  </div>
</template>
<script>
  import top from './top.vue'
  import list from './list.vue'

  export default {
    name: 'app',
    components: {
      'v-top': top,
      'v-list': list
    }
  }
</script>
