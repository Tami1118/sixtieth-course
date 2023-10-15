<template>
  <div class="pt-4">
    <!-- 
      麵包屑
      - 連結改為 Router
      - 麵包屑改為 components
     -->
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">首頁</a></li>
          <li class="breadcrumb-item"><a href="#">課程探索</a></li>
          <li class="breadcrumb-item active">樂齡律動</li>
        </ol>
      </nav>
    </div>

    <!-- 
      課程內容
      課程名稱
      
     -->
    <div class="container mb-10 pb-10 pb-lg-16">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-base rounded-20 mb-4 mb-lg-0">
            <img class="course-detail-img" :src="courseData.image" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <p class="mb-2">{{ course.unit }}</p>
          <h1 class="fs-6 fs-lg-10">{{ course.title }}</h1>
          <p class="text-justify text-gray-600 fs-4h">{{ course.intro }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div class="container py-10 py-16">
        <div class="row">
          <div class="col-lg-9">
            <div class="mb-10">
              <h2 class="fs-5 fs-lg-6">關於課程</h2>
              <!--  -->
              <ul class="row">
                <li class="col"></li>
              </ul>
              <p>{{ course.title }}</p>
              <p>{{ course.unit }}</p>
              <p>{{ course.intro }}</p>
            </div>

            <div class="mb-10">
              <h2 class="fs-5 fs-lg-6">課程進度</h2>
              <i class="fi fi-rr-broom"></i>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unit: {
        city: '新北市',
        area: '板橋區',
        title: '板橋社區大學',
        tel: '02-2987-6543',
        email: 'abc@gmail.com',
        address: '文化路一段1號'
      },
      season: {
        title: '2023秋季班',
        tel: '02-2987-6543'
      },
      course: {
        id: '112Q401001',
        date_start: '2023/10/01',
        date_end: '2023/12/31',
        
        category: '風格手作',
        title: '創意手工皂課程',
        imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        imagesUrl: ['', ''],
        introduction: '本期課程內容着重在隨處可取得的香草.青草藥.從採摘、低溫熬製、萃取液、凝膠等等製作成各式成品',
        description:
          '指導同學如何用很少的花費運用在保養品及手工皂，設計屬於自己與家人的手工皂配方，呵護家人及自己的皮膚.材料採集→熬製過程→成品。運用植物特性、功能入皂、膏類、保護生態環境，減少化學殘留、汙染地球，老師講解，示範後由學員自己操作一人一鍋，全程參與，學員不論從哪一期加入，都可以在老師的引導下，很快上手製作手工皂',
        day: '星期二',
        time_start: '09:30',
        time_end: '11:30',
        people_num: 30,
        people_remain: 12,
        status: '滿額',
        
        teacher: '胡曉玲',
        teacher_info: '',

        price: 3500,
        fees: {
          tuition: 2600,
          miscellaneous: 500,
          signup: 200,
          insurance: 200
        },

        schedule: [
          {
            weekly: 1,
            theme: '課程大綱簡介、手工皂分類與優缺點分析',
            content: '本學期課程內容重點介紹、薰衣草蘆薈膠製作'
          }
        ],

        teaching: '分組或一對一個別輔導，由老師親自教學示範操作方法及傳授打皂技巧、課堂討論、分析與成品心得分享。',
        evaluation: '以上課出席率及與人互動為評分標準',
        request: '對於手工皂有興趣者亦可',
        note: '課程順序會應實際材料到貨時間而稍作調整冷製皂每人一鍋(CP皂每次約可帶回8~9顆皂)'
      }
    }
  }
}
</script>