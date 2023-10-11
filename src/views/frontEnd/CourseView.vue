<template>
  <div class="container pb-10">
    <!-- todo:
      - 元件化
      - 進入course 時，卡片式button顯示狀態
    -->
    <ul class="nav nav-pill justify-content-end gap-3 py-4" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link bg-primary text-white px-3 py-2 rounded-3" id="card-tab" data-bs-toggle="tab" data-bs-target="#course-card" type="button" role="tab" aria-controls="course-card" aria-selected="false">卡片式</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link bg-primary text-white px-3 py-2 rounded-3" id="list-tab" data-bs-toggle="tab" data-bs-target="#course-list" type="button" role="tab" aria-controls="course-list" aria-selected="true">列表式</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link bg-primary text-white px-3 py-2 rounded-3" id="weekly-tab" data-bs-toggle="tab" data-bs-target="#course-weekly" type="button" role="tab" aria-controls="course-weekly" aria-selected="false">週課表</button>
      </li>
    </ul>

    <div class="row g-0">
      <div class="col-2">
        <div class="position-sticky top-0 pt-26" style="margin-top: -104px">
          <div class="card rounded-3">
            <div class="px-3 py-4">
              <p class="mb-3">課程查詢</p>
              <!-- select: 課程類別、開課星期、開課地區、單位類型(社區大學、樂齡學習中心、社區樂齡) -->
              <select name="" id="" class="form-select mb-2" aria-label="course type">
                <option selected>課程類別</option>
                <option v-for="item in courseType" :key="item" :value="item">{{ item }}</option>
              </select>

              <select name="" id="" class="form-select mb-2" aria-label="course type">
                <option selected>開課地區</option>
                <option v-for="item in courseType" :key="item" :value="item">{{ item }}</option>
              </select>

              <select name="" id="" class="form-select mb-2" aria-label="course type">
                <option selected>開課星期</option>
                <option v-for="item in courseType" :key="item" :value="item">{{ item }}</option>
              </select>

              <select name="" id="" class="form-select mb-2" aria-label="course type">
                <option selected>開辦單位類型</option>
                <option v-for="item in courseType" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10">
        <div class="ms-4">
          <div class="tab-content" id="myTabContent">
            <!-- 卡片式 -->
            <div class="tab-pane fade show active" id="course-card" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
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

            <!-- 列表式 -->
            <div class="tab-pane fade" id="course-list" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <table class="course-table table table-hover table-striped table-bordered">
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

            <!-- 週課表 -->
            <div class="tab-pane fade" id="course-weekly" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
              <table class="weekly-table table table-hover table-bordered">
                <thead class="table-green-dark">
                  <tr class="text-center">
                    <th scope="col"></th>
                    <th scope="col">星期一</th>
                    <th scope="col">星期二</th>
                    <th scope="col">星期三</th>
                    <th scope="col">星期四</th>
                    <th scope="col">星期五</th>
                    <th scope="col">星期六</th>
                    <th scope="col">星期日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle text-center">早上</td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="card mb-2 rounded-3 overflow-hidden" v-for="item in courseData" :key="item.title">
                        <a href="#">
                          <div class="p-3 text-center">
                            <p class="mb-2">{{ item.unit }}</p>
                            <h3 class="fs-5">{{ item.title }}</h3>
                            <p>{{ item.class_time }}</p>
                          </div>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle text-center">中午</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="align-middle text-center">晚上</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { doc, setDoc, getFirestore } from 'firebase/firestore'
const db = getFirestore()

export default {
  data() {
    return {
      courseType: ['社會科學類', '自然科學類', '資訊科技類', '國際語文類', '美術工藝類', '表演藝術類', '影像視覺類', '運動舞蹈類', '養身保健累', '生活應用類', '烹飪美食類', '投資理財類', '其他'],
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
          title: '樂齡律動',
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