/*
 * @version: 
 * @Author: PengHaiJian
 * @Date: 2019-10-09 10:11:12
 * @LastEditors: PengHaiJian
 * @LastEditTime: 2021-07-19 20:55:09
 * @Descripttion: 
 */
const pageContent = {
  computed: {
    // 计算容器高度
    documentClientHeight: {
      get () {
        return this.$store.state.common.documentClientHeight
      }
    },
    siteContentViewHeight () {
      var height = this.documentClientHeight - 50 - 70
      return height
    }
  },
  data () {
    return {}
  },
  methods: {
    
  }
}

export default pageContent
