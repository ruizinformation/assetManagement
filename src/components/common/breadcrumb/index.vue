<!--
 * @version: 
 * @Author: PengHaiJian
 * @Date: 2021-07-19 17:40:27
 * @LastEditors: PengHaiJian
 * @LastEditTime: 2021-07-20 16:41:32
 * @Descripttion: 
-->
<template>
  <div class="breadcrumb-wrap">
    <div class="breadcrumb-tab" v-for="(tab,index) in tabsData" :key="index">
      <div class="" :class="{'rz-text-primary':index == tabsData.length-1,'tab-cursor':index < tabsData.length-1}" @click="onTabClick(index)">{{tab.name}}</div>
      <i class="right-arrow el-icon-arrow-right rz-text-bold" v-if="index<tabsData.length-1"></i>
    </div>
  </div>
</template>

<script>
  export default {
    mixins: {},
    components: {},
    props: {
      // 面包屑内容
      tabsData:{
        type: Array,
        default: () => {
          return [{
              name: "标题",
              backView: 0
            }]
        }
      }
    },
    computed: {},
    watch: {},
    filters: {},
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {
      // 标签点击
      onTabClick(index){
        if( index < this.tabsData.length-1){
          this.$emit("tabClick",index)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .breadcrumb-wrap{
    padding-left: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    
    .right-arrow{
      padding:0 5px;
    }

    .breadcrumb-tab{
      display: flex;
      align-items: center;
    }

    .tab-cursor{
      cursor: pointer;
    }
    .rz-text-primary{color: #17B3A3;}
  }
</style>