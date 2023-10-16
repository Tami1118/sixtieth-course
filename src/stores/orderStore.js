import {defineStore} from 'pinia'

export default defineStore('orderDate', {
  state: () => ({
    order: [
      {
        uid: '',       // 訂單id
        date: '',      // 下單日期
        time: '',      // 下單時間
        total: '',     // 訂單總額
        pay: '',       // 付款方式
        courseId: [],  // 購買課程id(array)
      }
    ]
  }),
  getters: {
    // 後台(學生)
    // 取得所有訂單   getStudentOrders
    // 取得單一訂單v  getOrderData
    
    // 後台(單位)
    // 取得單位所有訂單 getUnitOrders
    // 取得單一訂單v   getOrderData
    // 編輯訂單        editOrderData
    // 刪除訂單        deleteOrderData
  }
})