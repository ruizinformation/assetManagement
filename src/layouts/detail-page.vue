<!--
 * @version: 
 * @Author: PengHaiJian
 * @Date: 2021-07-19 17:04:48
 * @LastEditors: PengHaiJian
 * @LastEditTime: 2021-07-20 18:40:57
 * @Descripttion: 
-->
<template>
  <div class="page-content">
    <rz-breadcrumb slot="content" :show-view.sync="showView" :tabs-data="breadcrumbData" @tabClick="tabClick"></rz-breadcrumb>
    <slot name="content">
      sadsada
    </slot>
  </div>
</template>

<script>
import PageContent from '@/minix/page-content.js'
export default {
  mixins: [PageContent],
  components: {
    
  },
  props: {
    showView: {
      type: Number
    },
    breadcrumbData: {
      type: Array,
      default: () =>{
        return []
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 面包屑点击
    tabClick(index){
      console.log(index)
      const item = this.breadcrumbData[index]
      if(item.backView >= 0) {
        this.$emit('update:showView', item.backView)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.bottom-btn-wrap{
  width: 100%;
  height:90px;
  background-color: #ffffff;
  position: fixed;
  padding-left: 250px;
  bottom:0px;
  right: 0px;
  display: flex;
  align-items: center;
}
</style>


