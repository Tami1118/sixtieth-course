import { defineStore } from 'pinia'

export default defineStore ('cartData', {
  state: () => ({
    cart: {
      uid: '',
      courseId: [],
      total: 0,
      messages: [],
    },
  }),
  getters: {
    // 前台
    // 取得購物車    getAllCart
    // 新增購物車    addCartData
    // 編輯購物車    editCartData
    // 刪除單一課程  deletCartCourse
    // 刪除全部課程  delteCartAll

    // 結帳  orderForm
    // 結帳  orderCheck
    // 付款  pay
  }
})