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
      <div class="row row-cols-1 row-cols-lg-3">
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
      </div>
    </div>

    <!-- icon -->
    <!-- button -->
    <div class="my-6">
      <h2 class="fs-8 pb-4 border-bottom mb-4">Button</h2>
      <button class="btn rounded-5 btn-primary text-white fw-500">我是按鈕 Button</button>
      <button class="btn rounded-5 bg-main-gradient text-white fw-500">我是按鈕 Button</button>
      <button class="btn rounded-5 btn-primary" @click="getData">按鈕</button>
    </div>

    <!-- card -->
  </div>
</template>

<script>
import { doc, setDoc, getFirestore } from 'firebase/firestore'
const db = getFirestore()
// Add a new document in collection "cities"

export default {
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