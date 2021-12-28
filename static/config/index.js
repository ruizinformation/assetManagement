/*
 * @Author: your name
 * @Date: 2019-09-04 10:55:04
 * @LastEditTime: 2020-06-24 16:06:55
 * @LastEditors: zhangmin
 * @Description: In User Settings Edit
 * @FilePath: /ruiz-vue-elementUI/static/config/index.js
 */
/**
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {}

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'https://test-victory-down.ruiztech.cn:4443/ruiz'

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './' // 域名
  window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()
