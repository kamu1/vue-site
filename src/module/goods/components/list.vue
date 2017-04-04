<template>
<div class="goods-list-block">
  <table class="table-list">
    <thead>
    <tr>
      <th width="40"> </th>
      <th>标题</th>
      <th>条码</th>
      <th>大类</th>
      <th>颜色</th>
      <th>尺码</th>
      <th>库存</th>
      <th>数量</th>
      <th>价格</th>
      <th>小计</th>
      <th>款号</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody id="goods-list">
    <tr v-for="(item, index) in list" @click="alert(item.goodstitle + ', ' + item.barcode)">
      <td class="check-num">
        <label><input type="checkbox" class="cmn-checkbox J-checkbox" name="" id="" /><s></s></label>
        <textarea class="J-data" style="display: none;"></textarea>
      </td>
      <td>{{item.goodstitle}}</td>
      <td>{{item.barcode}}</td>
      <td>{{item.main_type}}</td>
      <td>{{item.color}}</td>
      <td>{{item.size}}</td>
      <td after-content="件">{{item.stock_of_store}}</td>
      <td><input type="number" min="0" :max="item.stock_of_store" :value="item.num" class="J-num" /></td>
      <td :data-value="item.original_price" class="J-original-price" before-content="￥">{{item.original_price}}</td>
      <td data-value="" class="J-count-price" before-content="￥"></td>
      <td>{{item.goodsno}}</td>
      <td>
        <a href="javascript:;" class="J-edit-row">编辑</a>
        <a href="javascript:;" class="J-delete-row">删除</a>
      </td>
    </tr>
    </tbody>
  </table>
  <h4>{{ selected }}</h4>
</div>
</template>
<script>
  import Api from '../common/api.js'
  import Helper from '../common/helper.js'
  export default {
    data () {
      return {
        list: [
          {
            goodstitle: 'goods title',
            barcode: 'barcode',
            main_type: 'main_type',
            color: 'red',
            size: 'XL',
            stock_of_store: 10,
            num: 3,
            original_price: 198,
            goodsno: 'EMS5345348'
          }
        ],
        selected: ''
      }
    },
    mounted () {
      this.ajax()
    },
    methods: {
      ajax () {
        // this.$http.get(Api.list, {credientials: false, emulateJSON: false}).then((response) => {
        //   this.list = response.data.data
        // })
        Helper.ajax(this, Api.list, (response) => {
          this.list = response.data.data
        })
      },
      alert (content) {
        this.selected = content
      }
    }
  }
</script>