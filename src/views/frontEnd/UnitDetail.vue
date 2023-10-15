<template>
  <main>
    <!-- 麵包屑
      - 元件
      - 改成router
      - 中間頁面採用迴圈
     -->

    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
          <li class="breadcrumb-item"><RouterLink to="/unit">主辦單位一覽</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">板橋社區大學</li>
        </ol>
      </nav>
    </div>

    <div class="container">
      <div class="row gy-lg-0 mt-0">
        <!-- 單位資訊
          - 關注及關注中切換
          - 社群迴圈(如data有該社群屬性，顯示按鈕)
          - 關注人數更新
          - 文章或課程任一更新顯示更新時間
         -->
        <div class="col-lg-4 mt-0">
          <div class="position-sticky top-0" style="padding-top: 100px; margin-top: -100px">
            <section class="pb-10 pb-lg-16">
              <div class="card border-0 overflow-hidden shadow-sm">
                <div class="unit-banner text-white p-4">
                  <div class="d-flex gap-4 flex-column align-items-center position-relative">
                    <div class="rounded-circle bg-white overflow-hidden mt-8 border border-3 border-primary">
                      <img class="unit-logo" :src="unit.logo" :alt="unit.title" />
                    </div>
                    <h1 class="fs-7 fs-lg-8 text-center">
                      {{ unit.title }}
                      <span class="d-block fs-3h">{{ unit.title_eng }}</span>
                    </h1>
                    <div class="d-flex gap-3">
                      <a :href="unit.office" class="btn btn-outline-light d-flex justify-content-center align-items-center rounded-circle" style="height: 36px; aspect-ratio: 1/1"><i class="bi bi-globe-americas"></i></a>
                      <a :href="unit.facebook" class="btn btn-outline-light d-flex justify-content-center align-items-center rounded-circle" style="height: 36px; aspect-ratio: 1/1"><i class="bi bi-facebook"></i></a>
                      <a :href="unit.youtube" class="btn btn-outline-light d-flex justify-content-center align-items-center rounded-circle" style="height: 36px; aspect-ratio: 1/1"><i class="bi bi-youtube"></i></a>
                    </div>
                    <div class="position-absolute end-0 top-0">
                      <button class="btn btn-light text-primary"><i class="fi fi-sr-bookmark me-2"></i>關注中</button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-around border-bottom border-gray-200 pb-3">
                    <div class="text-center">
                      <p class="text-gray-600 fs-lg-3h">關注人數</p>
                      <p class="text-primary fw-600 fs-6 fs-lg-5">1,234</p>
                    </div>
                    <div class="text-center">
                      <p class="text-gray-600 fs-lg-3h">最近更新時間</p>
                      <p class="text-primary fw-600 fs-6 fs-lg-5">2023/09/10</p>
                    </div>
                  </div>

                  <div class="row g-5 m-0 p-0">
                    <div class="col-6">
                      <div class="d-flex">
                        <i class="fi fi-sr-phone-call me-1"></i>
                        <div class="ms-1">
                          <p class="fs-3h mb-1">聯絡電話 Tel</p>
                          <a href="#" class="text-primary fw-500">{{ unit.tel }}</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex">
                        <i class="fi fi-sr-fax me-1"></i>
                        <div class="ms-1">
                          <p class="fs-3h mb-1">傳真 Fax</p>
                          <a href="#" class="text-primary fw-500">{{ unit.fax }}</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-flex">
                        <i class="fi fi-sr-envelope me-1"></i>
                        <div class="ms-1">
                          <p class="fs-3h mb-1">電子信箱 Email</p>
                          <a href="#" class="text-primary fw-500">{{ unit.email }}</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-flex">
                        <i class="fi fi-sr-navigation me-1"></i>
                        <div class="ms-1">
                          <p class="fs-3h mb-1">地址 Address</p>
                          <a href="#" class="text-primary fw-500">{{ unit.city }}{{ unit.area }}{{ unit.address }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="col-lg-8">
          <!-- 最新消息
            - 最新消息顯示前8則
            - 最新的消息標前文章顯示"最新"的tag(bg-red-light, text-danger)
            - modal 開啟查看消息內容
           -->
          <section class="pb-10 pb-lg-16 px-4 px-lg-8 pt-4">
            <div class="d-flex flex-column align-items-center align-items-lg-start mb-5">
              <h2 class="order-1">最新消息</h2>
              <span class="badge bg-primary text-white mb-2 w-fit-content" style="border-radius: 10px 10px 0 10px">Hot News</span>
            </div>

            <table class="table">
              <tbody>
                <tr v-for="item in news" :key="item.title">
                  <td width="20%">{{ item.date }}</td>
                  <td width="80%">
                    <a href="#">
                      <span class="badge text-bg-secondary text-primary">{{ item.tag }}</span>
                      {{ item.title }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="text-end">
              <a href="#" class="btn btn-outline-primary rounded-pill">更多消息</a>
            </div>
          </section>

          <!-- 開課期程
            - 轉跳至開課期程詳細內容頁面
            - swiper 特效(每六個)
           -->
          <section class="py-10 py-lg-16 px-4 px-lg-8 bg-gray-100 rounded-20">
            <div class="d-flex justify-content-center justify-content-lg-between align-items-end mb-5">
              <div class="d-flex flex-column align-items-center align-items-lg-start">
                <h2 class="order-1">開課期程</h2>
                <span class="badge bg-primary text-white mb-2 w-fit-content" style="border-radius: 10px 10px 0 10px">Season</span>
              </div>

              <div class="d-none d-lg-flex gap-3">
                <button class="btn btn-primary rounded-circle" style="height: 48px; aspect-ratio: 1/1"><i class="bi bi-caret-left-fill text-white"></i></button>
                <button class="btn btn-primary rounded-circle" style="height: 48px; aspect-ratio: 1/1"><i class="bi bi-caret-right-fill text-white"></i></button>
              </div>
            </div>

            <ul class="row row-cols-1 row-cols-lg-3 g-5">
              <li class="col" v-for="item in season" :key="item.title">
                <div class="row g-0">
                  <div class="col-5 col-lg-12">
                    <img class="mb-2 rounded-20 overflow-hiddden w-100 object-fit-cover object-position-center" :src="item.imageUrl" style="height: 156px" alt="" />
                  </div>
                  <div class="col-7 col-lg-12">
                    <div class="ms-2 py-4 h-100 d-flex flex-column">
                      <h3 class="fs-5 fs-lg-6 mb-1">{{ item.title }}</h3>
                      <p class="fs-3h fs-lg-4">{{ item.signin_start }}~{{ item.signin_end }}</p>

                      <a href="" class="mt-auto ms-auto fw-600 text-primary">查看課程</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- 最新熱門課程
            - 顯示最新一期課程
            - 轉跳至最新開課詳細內容頁面
            - swiper 特效
            - 愛心收藏
            - 我要報名加入購物車
           -->
          <section class="py-10 py-lg-16 px-4 px-lg-8">
            <div class="d-flex flex-column align-items-center align-items-lg-start mb-5">
              <h2 class="order-1">最新熱門課程</h2>
              <span class="badge bg-primary text-white mb-2 w-fit-content" style="border-radius: 10px 10px 0 10px">Popular Course</span>
            </div>

            <div class="row row-cols-1 row-cols-lg-2 g-5">
              <div class="col" v-for="item in course" :key="item">
                <div class="card shadow-gray">
                  <div class="row g-0 p-4 pb-6">
                    <div class="col-lg-12">
                      <div class="card-course-img rounded-20 overflow-hidden position-relative">
                        <img class="img-cover" :src="item.imageUrl" :alt="item.title" />
                        <button class="btn bg-gray-700 position-absolute top-0 end-0 m-4 d-flex justify-content-center align-items-center rounded-circle bg-opacity-75" style="width: 48px; height: 48px; backdrop-filter: blur(5px)">
                          <i v-if="true" class="bi bi-suit-heart-fill text-white fs-5"></i>
                          <!-- click 確認 -->
                          <i v-else class="bi bi-suit-heart-fill text-yellow fs-5"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="card-body d-flex flex-column">
                        <a class="badge bg-secondary text-primary px-3 mb-3 w-fit-content fs-3h">{{ item.type }}</a>
                        <h3 class="fs-5 fs-lg-6 mb-1">{{ item.title }}</h3>
                        <ul class="my-3">
                          <li class="text-gray-600"><i class="bi bi-person-fill me-2"></i>{{ item.teacher }} 老師</li>
                          <li class="text-gray-600"><i class="bi bi-calendar-date-fill me-2"></i>{{ item.date_start }}－{{ item.date_end }}</li>
                          <li class="text-gray-600"><i class="bi bi-clock-fill me-2"></i>{{ item.day }} {{ item.time_start }}~{{ item.time_end }}</li>
                        </ul>
                        <div class="d-flex flex-wrap justify-content-between mt-auto">
                          <p class="text-gray-600 fw-600">{{ item.city }}{{ item.area }}</p>
                          <a href="#" v-if="item.status === '開課中'" class="bg-blue text-white rounded-10 px-3">開課中</a>
                          <a href="#" v-else-if="item.status === '滿額'" class="bg-danger text-white rounded-10 px-3">滿額</a>
                          <a href="#" v-else-if="item.status === '招生中'" class="bg-green text-white rounded-10 px-3">招生中</a>
                          <a href="#" v-else-if="item.status === '停招'" class="bg-gray-500 text-white rounded-10 px-3">停招</a>
                        </div>
                      </div>
                      <div class="px-4 px-lg-0 d-flex gap-3">
                        <a href="#" class="w-100 btn btn-primary text-white rounded-20 shadow-primary">詳細資訊</a>
                        <button class="w-100 btn btn-primary text-white rounded-20 shadow-primary">我要報名</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- 關於主辦單位 -->
    <div class="bg-primary position-relative">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="py-10 py-lg-16 px-4 px-lg-8">
              <div class="d-flex flex-column align-items-center align-items-lg-start mb-5">
                <h2 class="order-1 fs-6 fs-lg-6 text-white">關於 {{ unit.title }}</h2>
                <span class="badge bg-white text-primary mb-2 w-fit-content" style="border-radius: 10px 10px 0 10px">About</span>
              </div>
              <p class="text-justify text-white mb-2">{{ unit.intro }}</p>
            </div>
          </div>
          <div class="col d-none d-lg-block">
            <div class="position-absolute top-0 bottom-0 end-0 start-50">
              <iframe :src="unit.map" style="border: 0; width: 100%; height: 100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative d-lg-none" style="height: 296px">
        <iframe class="position-absolute top-0 bottom-0 end-0 start-0" :src="unit.map" style="border: 0; width: 100%; height: 100%; margin: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </main>
</template>



<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      news: [
        {
          title: '小犬颱風停課公告',
          date: '2023/10/07',
          tag: '公告'
        },
        {
          title: '2023秋季班課程開跑囉',
          date: '2023/09/15',
          tag: '課程'
        },
        {
          title: '2023春季班課程開跑囉',
          date: '2023/01/07',
          tag: '課程'
        },
        {
          title: '2022秋季班課程開跑囉',
          date: '2022/09/15',
          tag: '課程'
        }
      ],
      unit: {
        city: '新北市',
        area: '板橋區',
        title: '板橋社區大學',
        title_eng: 'Banqiao community colleges',
        tel: '02-29516166',
        fax: '02-29516385',
        office: 'http://www.google.com',
        facebook: 'http://www.facebook.com',
        youtube: 'http://www.youtube.com',
        email: 'pccuteacher@gmail.com',
        address: '成都街30號',
        logo: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/season_banner.png?raw=true',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.8614349981426!2d121.45901577522405!3d25.004823939466018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802a6dc998ca1%3A0xc3a8f207d8ad4352!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5oiQ6YO96KGXMzDomZ8!5e0!3m2!1szh-TW!2stw!4v1697279417488!5m2!1szh-TW!2stw',
        intro:
          '板橋社區大學成立於1999年，是在民間發起第一波的知識文化運動浪潮下成立，本校長期投注於地方知識建構工作、關注社會公共議題、投入社區營造、社區藝術、提供終身學習資源，在多年耕耘下社大逐漸成為豐富的人文藝術學習與公民實踐場域。2007年，本校辦理瑞芳社大，成為新北市第一所跨越城鄉辦學的社大，陸續拓展範疇至平溪、雙溪、貢寮，打造城鄉共學平台，建構區域地方知識學中心。'
      },
      course: [
        {
          id: '112Q401001',
          date_start: '2023/10/01',
          date_end: '2023/12/31',

          category: '風格手作',
          title: '創意手工皂課程',
          imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
          imagesUrl: ['', ''],
          introduction: '本期課程內容著重在隨處可取得的香草、青草藥，從採摘、低溫熬製、萃取液、凝膠等等製作成各式成品',
          description:
            '指導同學如何用很少的花費運用在保養品及手工皂，設計屬於自己與家人的手工皂配方，呵護家人及自己的皮膚，材料採集→熬製過程→成品。運用植物特性、功能入皂、膏類、保護生態環境，減少化學殘留、汙染地球，老師講解，示範後由學員自己操作一人一鍋，全程參與，學員不論從哪一期加入，都可以在老師的引導下，很快上手製作手工皂',
          day: '星期二',
          time_start: '09:30',
          time_end: '11:30',
          people_num: 30,
          people_remain: 12,
          status: '滿額',

          teacher: 'Tami',
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
        },
        {
          id: '112Q401001',
          date_start: '2023/10/01',
          date_end: '2023/12/31',

          category: '風格手作',
          title: '創意手工皂課程',
          imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
          imagesUrl: ['', ''],
          introduction: '本期課程內容著重在隨處可取得的香草、青草藥，從採摘、低溫熬製、萃取液、凝膠等等製作成各式成品',
          description:
            '指導同學如何用很少的花費運用在保養品及手工皂，設計屬於自己與家人的手工皂配方，呵護家人及自己的皮膚，材料採集→熬製過程→成品。運用植物特性、功能入皂、膏類、保護生態環境，減少化學殘留、汙染地球，老師講解，示範後由學員自己操作一人一鍋，全程參與，學員不論從哪一期加入，都可以在老師的引導下，很快上手製作手工皂',
          day: '星期二',
          time_start: '09:30',
          time_end: '11:30',
          people_num: 30,
          people_remain: 12,
          status: '滿額',

          teacher: 'Tami',
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
      ],
      season: [
        {
          title: '2024年度樂齡春季採花班如果標題可以長一點',
          tel: '02-2987-6543',
          signin_start: '2023/09/15',
          signin_end: '2023/09/30',
          imageUrl: 'https://img.freepik.com/free-vector/flat-geometric-background_23-2149336475.jpg?w=1800&t=st=1697354412~exp=1697355012~hmac=37d62e1048fcbfcab414f8f5e37a03eacd0e449c245c27ad6f81b8bba4c881ac',

          course: [
            {
              id: '112Q401001',
              date_start: '2023/10/01',
              date_end: '2023/12/31',

              category: '風格手作',
              title: '創意手工皂課程',
              imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
              imagesUrl: ['', ''],
              introduction: '本期課程內容著重在隨處可取得的香草、青草藥，從採摘、低溫熬製、萃取液、凝膠等等製作成各式成品',
              description:
                '指導同學如何用很少的花費運用在保養品及手工皂，設計屬於自己與家人的手工皂配方，呵護家人及自己的皮膚，材料採集→熬製過程→成品。運用植物特性、功能入皂、膏類、保護生態環境，減少化學殘留、汙染地球，老師講解，示範後由學員自己操作一人一鍋，全程參與，學員不論從哪一期加入，都可以在老師的引導下，很快上手製作手工皂',
              day: '星期二',
              time_start: '09:30',
              time_end: '11:30',
              people_num: 30,
              people_remain: 12,
              status: '滿額',

              teacher: 'Tami',
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
          ]
        },
        {
          title: '2023年度樂齡秋季盛開班',
          tel: '02-2987-6543',
          signin_start: '2023/09/15',
          signin_end: '2023/09/30',
          imageUrl: 'https://img.freepik.com/free-vector/flat-geometric-background_23-2149336477.jpg?w=1800&t=st=1697356085~exp=1697356685~hmac=df50467b12cd6e154d7650f9481fa6bbacc52a8ffff9140ff80fb39204bf7a95',

          class: [
            {
              id: '112Q401001',
              date_start: '2023/10/01',
              date_end: '2023/12/31',

              category: '風格手作',
              title: '創意手工皂課程',
              imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
              imagesUrl: ['', ''],
              introduction: '本期課程內容著重在隨處可取得的香草、青草藥，從採摘、低溫熬製、萃取液、凝膠等等製作成各式成品',
              description:
                '指導同學如何用很少的花費運用在保養品及手工皂，設計屬於自己與家人的手工皂配方，呵護家人及自己的皮膚，材料採集→熬製過程→成品。運用植物特性、功能入皂、膏類、保護生態環境，減少化學殘留、汙染地球，老師講解，示範後由學員自己操作一人一鍋，全程參與，學員不論從哪一期加入，都可以在老師的引導下，很快上手製作手工皂',
              day: '星期二',
              time_start: '09:30',
              time_end: '11:30',
              people_num: 30,
              people_remain: 12,
              status: '滿額',

              teacher: 'Tami',
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
          ]
        },
        {
          title: '2023年度樂齡春季花開班',
          tel: '02-2987-6543',
          signin_end: '2023/09/30',
          signin_start: '2023/09/15',
          imageUrl: 'https://img.freepik.com/free-vector/flat-geometric-background_23-2149336473.jpg?w=1800&t=st=1697356053~exp=1697356653~hmac=933496aaecccb3862130580762ea48e886614b295a520bbb0d0036979462b634',

          class: [
            {
              id: '112Q401001',
              date_start: '2023/10/01',
              date_end: '2023/12/31',

              category: '風格手作',
              title: '創意手工皂課程',
              imageUrl: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
              imagesUrl: ['', ''],
              introduction: '本期課程內容著重在隨處可取得的香草、青草藥，從採摘、低溫熬製、萃取液、凝膠等等製作成各式成品',
              description:
                '指導同學如何用很少的花費運用在保養品及手工皂，設計屬於自己與家人的手工皂配方，呵護家人及自己的皮膚，材料採集→熬製過程→成品。運用植物特性、功能入皂、膏類、保護生態環境，減少化學殘留、汙染地球，老師講解，示範後由學員自己操作一人一鍋，全程參與，學員不論從哪一期加入，都可以在老師的引導下，很快上手製作手工皂',
              day: '星期二',
              time_start: '09:30',
              time_end: '11:30',
              people_num: 30,
              people_remain: 12,
              status: '滿額',

              teacher: 'Tami',
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
          ]
        }
      ]
    }
  }
}
</script>