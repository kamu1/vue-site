<template>
<div>
  <mu-raised-button label="scrollable dialog" @click="open"/>
  <mu-dialog :open="dialog" title="Scrollable Dialog" scrollable>
    <mu-menu>
      <mu-menu-item :title="'menu item ' + menu" v-for="menu in menus"/>
    </mu-menu>
    <mu-flat-button primary label="关闭" @click="close" slot="actions"/>
  </mu-dialog>
	<div>
	<h1>{{ msg }}</h1>
	  <mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
	  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
	    <mu-list @itemClick="closeBottomSheet">
	      <mu-sub-header>
	        请选择一个
	      </mu-sub-header>
	      <mu-list-item :title="item" v-for="item in msg" @click.native="modmsg" />
	    </mu-list>
	  </mu-bottom-sheet>
	</div>
</div>

</template>

<script>
export default {
  data () {
    const menus = []
    for (let i = 0; i < 30; i++) {
      menus.push(i + 1)
    }
    return {
      dialog: false,
      menus,
      bottomSheet: false,
      msg: [333, 444, 555]
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    },
    modmsg () {
      let content = [1, 2, 3]
      window.alert()
      this.msg = content
    }
  }
}
</script>
<style lang="scss">
h1{
  border:1px solid #CCCCCC;
}
</style>