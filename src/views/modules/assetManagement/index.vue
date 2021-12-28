
<template>
  <div>
        <!--列表区域-->
        <div class="content-wrap"  v-if="showView==0">
          <data-list :show-view.sync="showView"></data-list>
        </div>

    <rz-detail-page v-if="showView==1" :show-view.sync="showView" :breadcrumb-data="breadcrumbData[showView]">
       <el-scrollbar slot="content" :style="{ 'height': 'calc(100% - 36px)'}">
        <div class="content-wrap">
            <Detail :detailId.sync="detailId" ref="detail" :show-view.sync="showView"></Detail>
        </div>
         </el-scrollbar>
    </rz-detail-page>
    
  </div>
</template>

<script>
import DataList from './data-list.vue'
import PageContent from '@/minix/page-content.js'
 import Detail from './detail.vue'
export default {
  mixins: [PageContent],
  components: {
    DataList,
    Detail
  },
  props: {
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      showView: 0,
      breadcrumbData: {
        1: [{ name: '一点通列表', backView: 0 }, { name: '一点通详情' }],
      },
      detailId:0
    }
  },
  created() {},
  mounted() {},
  methods: {
      openDetail(id){
          this.detailId=id
      }
  },
}
</script>


