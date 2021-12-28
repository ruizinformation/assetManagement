
<template>
  <div class="production-plan-add-or-edit">
    <el-form inline ref="dataForm" label-width="120px" label-position="right">
      <div class="form-line-wrap">
        <div class="form-item">
          <el-form-item label="是否匿名">
            <el-radio-group v-model="dataForm.anonymous">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
           <div class="form-item">
          <el-form-item label="所在村落：">
            <span>{{dataForm.regions[0]}}</span>
          </el-form-item>
        </div>
      </div>

      <div class="form-line-wrap">
        <div class="form-item">
          <el-form-item label="反映人姓名：">
            <span>{{dataForm.username}}</span>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="反映人电话：">
            <span>{{dataForm.mobile}}</span>
          </el-form-item>
        </div>
      </div>

      <div class="form-line-wrap">
        <div class="form-item">
          <el-form-item label="反映事项：">
            <span>{{dataForm.title}}</span>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="反映事项内容：">
            <span>{{dataForm.content}}</span>
          </el-form-item>
        </div>
      </div>

      <div class="form-line-wrap">
        <div class="form-item">
          <el-form-item label="附件：">
         <img v-for="item in dataForm.annex" :src="item.fullUrl" :key="item.fileName" style="width:150px;height:150px" alt="" srcset="">
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="反映事项描述：">
            <span>{{dataForm.description}}</span>
          </el-form-item>
        </div>
      </div>

      <div class="form-line-wrap">
        <div class="form-item">
          <el-form-item label="反映时间：">
            <span>{{dataForm.createDate}}</span>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="受理状态：">
         <span v-if="dataForm.acceptStatus == -1"> 无效 </span>
          <span v-if="dataForm.acceptStatus == 0"> 待提交 </span>
          <span v-if="dataForm.acceptStatus == 1"> 待受理 </span>
          <span v-if="dataForm.acceptStatus == 2"> 办理中 </span>
          <span v-if="dataForm.acceptStatus == 3"> 待核查 </span>
          <span v-if="dataForm.acceptStatus == 4"> 已办结 </span>
          </el-form-item>
        </div>
      </div>
      <div class="form-line-wrap">
        <div class="form-item">
          <el-form-item label="办理部门：">
            <span>{{dataForm.handleDept}}</span>
          </el-form-item>
        </div>
        <div class="form-item">
          <el-form-item label="办理人:">
            <span>{{dataForm.handleUsername}}</span>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: {
      detailId:[Number]
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {
      // 表单参数
      dataForm: {
      },

    };
  },
  created() {},
  mounted() {
      this.getInfo(this.detailId)
  },
  methods: {
   getInfo(id){
       this.$http({
        url: this.$http.adornUrl("/complaint/info?id="+id),
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 0) {
         this.dataForm=data.data
        } else {
     
        }
      });
   }
  },
};
</script>


