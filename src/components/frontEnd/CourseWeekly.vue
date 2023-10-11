<template>
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