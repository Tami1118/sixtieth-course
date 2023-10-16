import {defineStore} from 'pinia'

export default defineStore ('newsData', {
  state: () => ({
    news: [
      {
        uid: '',          // 消息id
        title: '',        // 消息標題
        date: '',         // 消息發布日期
        time: '',         // 消息發布時間
        tag: [],          // 標籤
        unitId: '',       // 單位id
        introduction: '', // 消息簡介
        description: '',  // 消息內容
        imageUrl: '',     // 消息主圖
        imagesUrl: [],    // 消息附圖
      },
    ]
  }),
  getters: {
    // 前台
    // 取得所有最新消息   getAllNews
    // 取得單位所有消息v  getUnitNews
    // 取得單一消息v     getNewsData
    
    // 後台(單位)
    // 取得單位所有消息v  getUnitNews
    // 取得單一消息v     getNewsData
    // 新增消息          addNewsData
    // 編輯消息          editNewsData
    // 刪除消息          deleteNewsData
  }
})