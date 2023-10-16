import { defineStore } from 'pinia'

export default defineStore('courseData', {
  state: () => ({
    // 課程資料
    course: [
      {
        uid: '',            // 課程id
        title: '',          // 標題
        teacherId: '',      // 教師id
        category: '',       // 課程類別
        unitId: '',         // 單位id
        seasonId: '',       // 期程id
        imageUrl: '',       // 主要圖片
        imagesUrl: [],      // 多張圖片
        introduction: '',   // 課程簡介
        description: '',    // 課程說明
        status: '',         // 課程狀態
        place: '',          // 上課地點
        day: '',            // 上課星期
        time_start: '',     // 上課時間(起)
        time_end: '',       // 上課時間(迄)
        people_num: '',     // 招生人數
        target: '',         // 適合對象
        equip: '',          // 需自備哪些設備
        teaching: '',       // 教學方法
        evaluation: '',     // 評鑑方法
        note: '',           // 備註
        schedule: [],       // 課程進度(array)
        price: 0,           // 總費用
        fees: {
          tuition: 0,       // 學分費用
          miscellaneous: 0, // 雜項費用
          signinFees: 0,    // 報名費用
          insurance: 0,     // 保險費用
          other: 0,         // 其他費用
        },
        student: [],        // 學生名單
      }
    ],
    // 講師資料
    teacher: [
      {
        uid: '',            // 講師id
        name: '',           // 講師名稱
        introduction: '',   // 講師介紹
        expertise: [],      // 講師經驗
        imagerUrl: '',      // 講師照片
      },
    ],
    // 期程資料
    season: [
      {
        uid: '',            // 期程id
        title: '',          // 期程名稱
        date_start: '',     // 報名時間(起)
        date_end: '',       // 報名時間(迄)
        place: '',          // 報名地址
        charge: '',         // 負責人
        tel: '',            // 諮詢電話
        file: '',           // 期程簡章下載
      },
    ],
  }),
  getters: {
    // 期程-前台
    // 取得全部所有期程  getAllSeasons
    // 取得單位所有期程v getUnitSeasons
    // 取得單一期程v    getSeasonData

    // 期程-後台(單位)
    // 取得單位所有期程v getUnitSeasons
    // 取得單一期程v    getSeasonData
    // 新增期程         addSeasonData
    // 編輯期程         editSeasonData
    // 刪除期程         deleteSeasonData

    // 課程-前台
    // 取得全部所有課程  getAllCourses
    // 取得單位所有課程v getUnitCourses
    // 取得單一課程v    getCourseData

    // 課程-後台(單位)
    // 取得單位所有課程v getUnitCourses
    // 取得單一課程v    getCourseData
    // 新增課程         addCourseData
    // 編輯課程         editCourseData
    // 刪除課程         deleteCourseData
  },
})