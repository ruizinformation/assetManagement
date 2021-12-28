const minix = {
  data() {
    return {
      // 设置属性
      mixinViewModuleOptions: {
        activatedIsNeed: true, // 此页面是否在激活（进入）时，调用查询数据列表接口？
        getDataListURL: "", // 数据列表接口，API地址
        getDataListIsPage: false, // 数据列表接口，是否需要分页？
        deleteURL: "", // 删除接口，API地址
        deleteIsBatch: false, // 删除接口，是否需要批量？
        deleteIsBatchKey: "id", // 删除接口，批量状态下由那个key进行标记操作？比如：pid，uid...
        exportURL: "" // 导出接口，API地址
      },
      // 属性值
      page: 1,
      limit: 10,
      totalPage: 0,
      dataListSelections: [],
      tableData: [],
      autoLoading: true
    };
  },
  created() {
    if(this.autoLoading){
      this.getTableData();
    }
  },
  methods: {
    // 获取表格数据
    getTableData(page) {
      this.dataListLoading = true;
      if (page && page === 1) {
        this.page = page;
      }
      let params = {
        page: this.page,
        limit: this.limit
      };
      this.searchForm.startDate = "";
      this.searchForm.endDate = "";
      console.log(234,this.searchForm)
      for (let key in this.searchForm) {
        if (key === "dateArray" && this.searchForm.dateArray) {
          if (this.searchForm.dateArray.length > 0) {
            this.searchForm.startDate = this.searchForm.dateArray[0];
            this.searchForm.endDate = this.searchForm.dateArray[1];
          }
        } else {
          params[key] = this.searchForm[key];
        }
      }
      this.$http({
        url: this.$http.adornUrl(this.mixinViewModuleOptions.getDataListURL),
        method: "get",
        params: this.$http.adornParams(params, false)
      }).then(({ data }) => {
        let pageData = data.page || data.data;
        if (data && data.code === 0) {
          this.tableData = pageData.records;
          this.totalPage = pageData.total;
          this.handlePageData(pageData)
        } else {
          this.tableData = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 处理分页数据
    handlePageData(pageData){
      
    },
    // 每页数
    sizeChangeHandle(val) {
      this.limit = val;
      this.page = 1;
      this.getTableData();
    },
    // 分页修改
    currentChangeHandle(val) {
      this.page = val;
      this.getTableData();
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
    // 删除
    doDelete(id) {
      let ids = id
        ? [id]
        : this.dataListSelections.map(item => {
            return item.id;
          });
      if (ids.length <= 0) {
        this.$message.warning("请选择需要删除的数据");
        return;
      }
      this.$confirm(`是否确认删除?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl(this.mixinViewModuleOptions.deleteURL),
            method: "DELETE",
            data: this.$http.adornData(ids, false)
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.getTableData();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        })
        .catch(() => {});
    },
    // 编辑
    doEdit(row) {
      this.$parent.$parent.doEdit(row);
    }
  }
};

export default minix;
