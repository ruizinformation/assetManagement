<!--
 * @version: 
 * @Author: PengHaiJian
 * @Date: 2021-07-19 17:04:48
 * @LastEditors: PengHaiJian
 * @LastEditTime: 2021-07-20 16:18:02
 * @Descripttion: 
-->
<template>
  <div class="page-content" :style="{ 'height': siteContentViewHeight + 'px'}">
    <slot name="content">
      
    </slot>
  </div>
</template>

<script>
import PageContent from '@/minix/page-content.js'
export default {
  mixins: [PageContent],
  components: {
    
  },
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>


