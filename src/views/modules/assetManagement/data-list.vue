<template>
  <div class="mod-role">
    <el-form
      :inline="true"
      :model="dataForm"
      @keyup.enter.native="getDataList()"
    >
      <el-form-item>
        <el-input
          v-model="dataForm.productName"
          placeholder="物品名称"
          clearable
        ></el-input>
      </el-form-item>
       <el-form-item>
        <el-input
          v-model="dataForm.depotName"
          placeholder="仓库名称"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button @click="reset()">重置</el-button>
        <!-- <el-button v-if="isAuth('sys:role:save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button v-if="isAuth('sys:role:delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button> -->
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%"
    >
      <el-table-column label="编号" width="50" align="center">
        <template slot-scope="scope">
          <div>
            {{ scope.$index + 1 + (pageIndex - 1) * pageSize }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="productNum"
        header-align="center"
        align="center"
        label="物品编号"
      >
      </el-table-column>
      <el-table-column
        prop="productName"
        header-align="center"
        align="center"
        label="物品名称"
      >
      </el-table-column>
      <el-table-column
        prop="depotName"
        header-align="center"
        align="center"
        label="所在仓库"
      >
      </el-table-column>
      <el-table-column
      :show-overflow-tooltip="true"
        prop="productType"
        header-align="center"
        align="center"
        label="类型"
      >
      </el-table-column>
      <el-table-column
        prop="productUnit"
        header-align="center"
        align="center"
        width="100"
        label="单位"
      >
      </el-table-column>
      <el-table-column
        prop="amount"
        header-align="center"
        align="center"
        width="180"
        label="库存"
      >
      </el-table-column>
      <!-- <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="150"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="detailHandle(scope.row.id)"
            >详情</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>

  </div>
</template>

<script>
//   import AddOrUpdate from './role-add-or-update'
export default {
  data() {
    return {
      dataForm: {
        depotName: "",
        productName:''
      },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
    };
  },
  components: {
    //   AddOrUpdate
  },
  mounted() {
    //this.totalPage=this.dataList.length
    this.getDataList();
  },
  methods: {
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/warehouse/page"),
        method: "get",
        params: this.$http.adornParams({
               'page': this.pageIndex,
            'limit': this.pageSize,
          depotName:this.dataForm.depotName,
          productName:this.dataForm.productName
        }),
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.records;
          this.totalPage=data.data.total;
          this.pageIndex=data.data.current
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    reset(){
      this.dataForm={}
      this.getDataList()
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
    //查看详情
    detailHandle(id) {
      this.$emit("update:showView",1)
     this.$parent.openDetail(id)
    },
  },
};
</script>
