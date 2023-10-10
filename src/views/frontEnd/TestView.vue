<template>
  <div class="container">
    <div class="my-6">
      <h2 class="fs-8 pb-4 border-bottom mb-4">Color</h2>
      <div class="my-4 d-flex flex-wrap gap-4">
        <div class="bg-primary rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-green-dark rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-secondary rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-danger rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-warning rounded-4" style="height: 120px; width: 180px"></div>
      </div>
      <div class="my-4 d-flex flex-wrap gap-4">
        <div class="bg-primary bg-gradient rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-green-dark bg-gradient rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-main-gradient rounded-4" style="height: 120px; width: 180px"></div>
      </div>
      <div class="my-4 d-flex flex-wrap gap-4">
        <div class="bg-gray-900 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-800 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-700 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-600 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-500 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-400 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-300 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-200 rounded-4" style="height: 120px; width: 180px"></div>
        <div class="bg-gray-100 rounded-4" style="height: 120px; width: 180px"></div>
      </div>
    </div>
    <div class="my-6">
      <h2 class="fs-8 pb-4 border-bottom mb-4">Typography</h2>
      <h1 class="h1">思源黑體 This is content.</h1>
      <h2 class="h2">思源黑體 This is content.</h2>
      <h3 class="h3">思源黑體 This is content.</h3>
      <h4 class="h4">思源黑體 This is content.</h4>
      <h5 class="h5">思源黑體 This is content.</h5>
      <h6 class="h6">思源黑體 This is content.</h6>
      <hr />
      <p class="fs-16">思源黑體 This is content.</p>
      <p class="fs-12">思源黑體 This is content.</p>
      <p class="fs-8">思源黑體 This is content.</p>
      <p class="fs-6">思源黑體 This is content.</p>
      <p class="fs-5">思源黑體 This is content.</p>
      <p class="fs-4">思源黑體 This is content.</p>
    </div>
    <div class="my-6">
      <h2 class="fs-8 pb-4 border-bottom mb-4">Image</h2>
      <!-- <div class="row row-cols-1 row-cols-lg-3">
        <div class="col">
          <img src="../../assets/image/activity-analyze.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-artlist.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-cooking.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-dance.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-exercise.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-languages.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-mind.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-music.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-photo.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-plant.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/activity-stock.png" alt="activity" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-404.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-banner.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-banner2.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-carts.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-complete.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-course.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-FAQs.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-news.png" alt="page" />
        </div>
        <div class="col">
          <img src="../../assets/image/page-pay.png" alt="page" />
        </div>
      </div> -->
    </div>

    <!-- icon -->
    <!-- button -->
    <div class="my-6">
      <h2 class="fs-8 pb-4 border-bottom mb-4">Button</h2>
      <button class="btn rounded-5 btn-primary text-white fw-500">我是按鈕 Button</button>
      <button class="btn rounded-5 btn-primary text-white" @click="getData">取得資料</button>
    </div>

    <!-- card info
      學校一覽、課程資訊、課程期別、常見問題

      學校類別 - 社區大學、樂齡/樂活
      1. index - school: 單位名稱、學校圖片、行政區域
      2. index - season course: 課程季度名稱、學校名稱
      2. index - course: 課程名稱、學校名稱、課程時間、課程狀態、授課講師
      3. index - type: 類型名稱、類型圖片
      4. index - news: 發布時間、文章標題、發布單位
      4. course, course detail
      5. school, school detail
      6. news, news modal,

      問題：
      1. 報名規定、流程不一致
      2. 費用規定、方式不一致(優惠、退費) => 收費方式選擇:現金、信用卡、超商
      3. 評鑑方式
    -->

    <div class="my-6">
      <h2 class="fs-8 pb-4 border-bottom mb-4">Card</h2>

      <!-- 課程狀態 -->
      <div class="mb-8">
        <h3 class="mb-3">課程狀態</h3>
        <div class="d-flex gap-2">
          <a href="#" class="bg-green text-white rounded-10 px-3">招生中</a>
          <a href="#" class="bg-danger text-white rounded-10 px-3">滿額</a>
          <a href="#" class="bg-blue text-white rounded-10 px-3">開課中</a>
          <a href="#" class="bg-gray-500 text-white rounded-10 px-3">停招</a>
        </div>
      </div>

      <!-- 課程 - 卡片 -->
      <!-- 欄位：課程圖片、開課時間、課程類型、課程名稱、授課教師、授課時間、開課狀態、單位名稱、區域 -->
      <div class="mb-8">
        <h3 class="mb-3">課程卡片</h3>
        <ul class="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-5">
          <li class="col" v-for="item in courseData" :key="item.title">
            <div class="card shadow-gray">
              <div class="row g-0 p-4 pb-6">
                <div class="col-5 col-lg-12">
                  <div class="card-course-img rounded-20 overflow-hidden position-relative">
                    <img class="img-cover" :src="item.image" :alt="item.title" />
                    <button class="btn bg-gray-700 position-absolute top-0 end-0 m-4 d-flex justify-content-center align-items-center rounded-circle bg-opacity-75" style="width: 48px; height: 48px; backdrop-filter: blur(5px)">
                      <i v-if="true" class="bi bi-suit-heart-fill text-white fs-5"></i>
                      <!-- click 確認 -->
                      <i v-else class="bi bi-suit-heart-fill text-yellow fs-5"></i>
                    </button>
                  </div>
                </div>
                <div class="col-7 col-lg-12">
                  <div class="card-body d-flex flex-column">
                    <a class="badge bg-secondary text-primary px-3 mb-3 w-fit-content fs-3h">{{ item.type }}</a>
                    <h3 class="fs-lg-8 mb-1">{{ item.title }}</h3>
                    <a href="#" class="fs-3h fs-lg-4 text-primary">{{ item.unit }}</a>
                    <ul class="my-3">
                      <li class="text-gray-600"><i class="bi bi-person-fill me-2"></i>{{ item.teacher }} 老師</li>
                      <li class="text-gray-600"><i class="bi bi-calendar-date-fill me-2"></i>{{ item.start_date }}－{{ item.end_date }}</li>
                      <li class="text-gray-600"><i class="bi bi-clock-fill me-2"></i>{{ item.class_day }} {{ item.class_time }}</li>
                    </ul>
                    <div class="d-flex flex-wrap justify-content-between mt-auto">
                      <p class="text-gray-600 fw-600">{{ item.city }}{{ item.area }}</p>
                      <a href="#" v-if="item.status === '開課中'" class="bg-blue text-white rounded-10 px-3">開課中</a>
                      <a href="#" v-else-if="item.status === '滿額'" class="bg-danger text-white rounded-10 px-3">滿額</a>
                      <a href="#" v-else-if="item.status === '招生中'" class="bg-green text-white rounded-10 px-3">招生中</a>
                      <a href="#" v-else-if="item.status === '停招'" class="bg-gray-500 text-white rounded-10 px-3">停招</a>
                    </div>
                  </div>
                  <div class="px-4 px-lg-0 d-none d-md-flex gap-3">
                    <a href="#" class="w-100 btn btn-primary text-white rounded-20 shadow-primary">詳細資訊</a>
                    <button class="w-100 btn btn-primary text-white rounded-20 shadow-primary">我要報名</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 課程 - 列表 -->
      <!-- 欄位：開課時間、課程類型、課程名稱、授課教師、授課時間、開課狀態、單位名稱、區域 -->
      <!-- 功能：篩選(開課狀態、課程類型)、排序(開課時間、授課時間) -->
      <div class="mb-8">
        <h3 class="mb-3">課程列表</h3>
        <table class="table table-hover table-striped table-bordered">
          <thead class="table-green-dark">
            <tr class="text-center">
              <th scope="col">開課日期</th>
              <th scope="col">課程分類</th>
              <th scope="col">課程名稱</th>
              <th scope="col">授課教師</th>
              <th scope="col">授課時間</th>
              <th scope="col">開課狀況</th>
              <th scope="col">開課單位</th>
              <th scope="col">區域</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-end text-lg-center" v-for="item in courseData" :key="item.title">
              <td data-label="開課日期" scope="row">{{ item.start_date }}</td>
              <td data-label="課程分類">{{ item.type }}</td>
              <td data-label="課程名稱">
                <a class="d-block text-lg-start" href="#">{{ item.title }}</a>
              </td>
              <td data-label="授課教師">{{ item.teacher }}</td>
              <td data-label="授課時間">{{ item.class_day }} {{ item.class_time }}</td>
              <td data-label="開課狀況">
                <span v-if="item.status === '開課中'" class="bg-blue text-white rounded-10 px-3">開課中</span>
                <span v-else-if="item.status === '滿額'" class="bg-danger text-white rounded-10 px-3">滿額</span>
                <span v-else-if="item.status === '招生中'" class="bg-green text-white rounded-10 px-3">招生中</span>
                <span v-else-if="item.status === '停招'" class="bg-gray-500 text-white rounded-10 px-3">停招</span>
              </td>
              <td data-label="開課單位">{{ item.unit }}</td>
              <td data-label="區域">{{ item.city }}{{ item.area }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 單位 - 卡片 -->
      <!-- 欄位：單位圖片、單位名稱、單位地區、聯絡電話、電子信箱、網站連結 -->
      <div class="mb-8">
        <h3 class="my-3">單位卡片</h3>
        <ul class="row row-cols-1 row-cols-lg-4 g-3">
          <li class="col" v-for="item in unitData" :key="item.title">
            <div class="card">
              <a class="d-block" href="#">
                <div class="p-4">
                  <h3 class="fs-4 fs-lg-6 text-primary">{{ item.title }}</h3>
                  <p>{{item.tel}}</p>
                  <p>{{item.email}}</p>
                  <p>{{item.city}}</p>
                  <a href="#" class="btn btn-primary text-white">更多相關資訊</a>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 課程類型 - 卡片 -->
      <div class="mb-8">
        <h3 class="my-3">課程類型卡片</h3>
        <ul class="row row-cols-2 row-cols-lg-5 g-5">
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50" style="height: 120px" src="../../assets/image/activity-analyze.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">財務</p>
              </a>
            </div>
          </li>
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50 object-position-20" style="height: 120px" src="../../assets/image/activity-artlist.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">美術</p>
              </a>
            </div>
          </li>
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50 object-position-40" style="height: 120px" src="../../assets/image/activity-music.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">音樂</p>
              </a>
            </div>
          </li>
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50 object-position-40" style="height: 120px" src="../../assets/image/activity-cooking.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">烹飪</p>
              </a>
            </div>
          </li>
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50 object-position-20" style="height: 120px" src="../../assets/image/activity-languages.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">語言</p>
              </a>
            </div>
          </li>
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50 object-position-center" style="height: 120px" src="../../assets/image/activity-exercise.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">運動</p>
              </a>
            </div>
          </li>
          <li class="col">
            <div class="card overflow position-relative shadow-gray">
              <a href="#" classs="d-block">
                <img class="w-100 opacity-50 object-position-40" style="height: 120px" src="../../assets/image/activity-dance.png" alt="course" />
                <p class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center fs-6 fw-700">跳舞</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="my-6">
      <form action="">
        <div class="mb-2">
          <input type="text" class="form-control" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { doc, setDoc, getFirestore } from 'firebase/firestore'
const db = getFirestore()

export default {
  data() {
    return {
      // courseType: ['社會科學類','自然科學類','資訊科技類','國際語文類','美術工藝類','表演藝術類','影像視覺類','運動舞蹈類','養身保健累','生活應用類','烹飪美食類','投資理財類','其他'],
      // unitType: ['社區大學', '樂齡大學', '樂齡學習中心', '長青學苑']
      unitData: [
        {
          title: '板橋社區大學',
          image: '',
          city: '新北市',
          area: '板橋區',
          email: 'abc@gmail.com',
          tel: '2345-6789'
        },
        {
          title: '瑞芳社區大學',
          image: '',
          city: '新北市',
          area: '瑞芳區',
          email: 'abc@gmail.com',
          tel: '2345-6789'
        },
        {
          title: '新北市樂齡學習中心',
          image: '',
          city: '新北市',
          area: '板橋區',
          email: 'abc@gmail.com',
          tel: '2345-6789'
        },
        {
          title: '北投社區大學',
          image: '',
          city: '台北市',
          area: '北投區',
          email: 'abc@gmail.com',
          tel: '2345-6789'
        },
        {
          title: '大安社區大學',
          image: '',
          city: '台北市',
          area: '大安區',
          email: 'abc@gmail.com',
          tel: '2345-6789'
        }
      ],
      courseData: [
        {
          title: '樂齡律動如果標題超過第一行不知道會怎麼樣',
          type: '運動舞蹈',
          start_date: '2023/10/23',
          end_date: '2023/12/23',
          class_day: '星期三',
          class_time: '16:00~18:00',
          teacher: '王小美',
          unit: '板橋社區大學',
          status: '開課中',
          // q.為何無法使用自己存擋的圖片?
          image: 'https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2739&q=80',
          city: '新北市',
          area: '板橋區'
        },
        {
          title: '后翼棄兵',
          type: '社會科學',
          start_date: '2023/10/23',
          end_date: '2023/12/23',
          class_day: '星期五',
          class_time: '16:00~18:00',
          teacher: '劉德華',
          unit: '士林社區大學',
          status: '招生中',
          image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
          city: '台北市',
          area: '士林區'
        },
        {
          title: '手工肥皂',
          type: '風格手作',
          start_date: '2023/10/23',
          end_date: '2023/12/23',
          class_day: '星期二',
          class_time: '16:00~18:00',
          teacher: '胡曉玲',
          unit: '板橋社區大學',
          status: '滿額',
          image: 'https://images.unsplash.com/photo-1605264964528-06403738d6dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
          city: '新北市',
          area: '板橋區'
        }
      ]
    }
  },
  methods: {
    async getData() {
      console.log('我被執行')
      await setDoc(doc(db, 'cities', 'LA'), {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
      })
    }
  }
}
</script>