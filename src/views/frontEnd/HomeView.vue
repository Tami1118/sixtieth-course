<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 order-1 order-lg-0">
          <div class="px-4 pb-10 pb-lg-0 d-flex flex-column justify-content-center h-100">
            <h1 class="text-primary fs-8 fs-lg-14">與未來相約<br />學習永不停歇</h1>
            <p class="fs-4 fs-lg-5 text-gray-700 mb-4">在 <span class="text-danger fw-600">花甲學院</span> 你可以探索各項領域課程<br />盡情享受、充實未來人生</p>
            <a href="#" class="btn btn-primary px-6 text-white w-fit-content rounded-pill shadow-primary fs-5">探索課程 <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-center">
          <img class="home-banner-img" src="../../assets/image/elderly-people.png" alt="Elderly woman and man dance togather" />
        </div>
      </div>
    </div>

    <!-- <div class="bg-gray-100 rounded-10">
              <div class="px-4 py-6">
                <h2 class="fs-6">課程查詢</h2>
                <div class="row row-cols-2 g-3">
                  <div class="col">
                    <select name="" id="" class="form-select">
                      <option value=""></option>
                    </select>
                  </div>
                  <div class="col">
                    <select name="" id="" class="form-select">
                      <option value=""></option>
                    </select>
                  </div>
                  <div class="col">
                    <select name="" id="" class="form-select">
                      <option value=""></option>
                    </select>
                  </div>
                  <div class="col">
                    <select name="" id="" class="form-select">
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>
            </div> -->

    <!-- 最新消息 -->
    <div class="py-10 py-lg-16">
      <div class="container">
        <h2 class="text-center section-title mb-8">最新消息 <span class="d-block fs-4 fw-600 mt-1 text-gray-600">Hot News</span></h2>
      </div>
    </div>

    <!-- 課程列表 -->
    <div class="py-10 py-lg-16">
      <div class="container">
        <h2 class="text-center section-title mb-8">熱門課程 <span class="d-block fs-4 fw-600 mt-1 text-gray-600">Populer Course</span></h2>
        <ul class="row row-cols-1 row-cols-lg-2 row-cols-lg-4 g-5">
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
    </div>

    <!-- 課程類型 -->
    <div class="bg-gray-100 py-10 py-lg-20">
      <div class="container">
        <h2 class="text-center section-title mb-8">課程領域探索 <span class="d-block fs-4 fw-600 mt-1 text-gray-600">Course Types</span></h2>
        <ul class="row row-cols-2 row-cols-lg-5 g-5">
          <li class="col" v-for="item in courseTypes" :key="item.type">
            <a href="#" class="card shadow-gray">
              <div class="py-3 px-4">
                <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                  <h3 class="fs-5 fs-lg-6 fw-600 mb-0 mt-2 mt-lg-0 order-1 order-lg-0">{{ item.type }}</h3>
                  <img style="height: 96px" :src="item.image" :alt="item.type" />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>



<script>
export default {
  data() {
    return {
      courseTypes: [
        {
          type: '運動舞蹈',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-dance.png?raw=true'
        },
        {
          type: '美術創作',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-artlist.png?raw=true'
        },
        {
          type: '風格手作',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-handmake.png?raw=true'
        },
        {
          type: '投資理財',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-stock.png?raw=true'
        },
        {
          type: '烹飪美食',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-cooking.png?raw=true'
        },
        {
          type: '語言學習',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-languages.png?raw=true'
        },
        {
          type: '養身保健',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-healthy.png?raw=true'
        },
        {
          type: '生活應用',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-life.png?raw=true'
        },
        {
          type: '音樂戲劇',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-music.png?raw=true'
        },
        {
          type: '影像視覺',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-photo.png?raw=true'
        },
        {
          type: '資訊科技',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-tech.png?raw=true'
        },
        {
          type: '環境科學',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-plant.png?raw=true'
        },
        {
          type: '社會人文',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-culture.png?raw=true'
        },
        {
          type: '其他',
          image: 'https://github.com/Tami1118/sixtieth-course/blob/main/src/assets/image/activity-other.png?raw=true'
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
  components: {}
}
</script>
