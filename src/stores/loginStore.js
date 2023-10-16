import { defineStore } from 'pinia'

export default defineStore('loginData', {
  state: () => ({
    // 學生資料
    student: [
      {
        uid: '',        // 學生id
        name: '',       // 學生姓名
        email: '',      // 電子信箱
        password: '',   // 密碼
        gender: '',     // 性別
        birthday: '',   // 生日
        imageUrl: '',   // 學生照片
        tel: '',        // 聯絡電話
        city: '',       // 所屬縣市
        region: '',     // 所屬行政區
        address: '',    // 學生地址
        emergency_contact: '',  // 緊急聯絡人
        emergency_tel: '',      // 緊急聯絡人電話
        last_time: '',  // 最後一次登入時間
      },
    ],
    // 單位資料
    unit: [
      {
        uid: '',        // 單位id
        title: '',      // 單位名稱
        email: '',      // 單位信箱
        password: '',   // 密碼
        imageUrl: '',   // 單位照片
        city: '',       // 單位所屬縣市
        region: '',     // 單位所屬行政區
        address: '',    // 單位地址
        tel: '',        // 單位電話
        fax: '',        // 單位傳真
        office: '',     // 單位官方網站
        facebook: '',   // 單位facebook
        youtube: '',    // 單位youtube
        last_time: '',  // 最後一次登入時間
      }
    ],
  }),
  getters: {
    // 前台-學生註冊       studentSign
    // 前台-學生登入       studentLogin
    // 後台(學生)-學生驗證  studentIndent

    // 前台-單位註冊       unitSign
    // 前台-單位登入       unitLogin
    // 後台(單位)-單位驗證  unitIndent

    // 後台登出   logOut
  }
})