<template>
  <div class="bg-gray-700 text-white">
    <div class="py-10 py-lg-16">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="d-flex justify-content-center justify-content-lg-start mb-6 mb-lg-0">
              <img class="footer-logo" src="../../assets/image/logo-white.png" alt="花甲學院logo" />
            </div>
            <div class="d-flex gap-2 d-lg-none justify-content-center">
              <a href="#" class="btn btn-outline-light d-flex rounded-circle justify-content-center align-items-center" style="aspect-ratio: 1/1"><i class="bi bi-instagram"></i></a>
              <a href="#" class="btn btn-outline-light d-flex rounded-circle justify-content-center align-items-center" style="aspect-ratio: 1/1"><i class="bi bi-facebook"></i></a>
              <a href="#" class="btn btn-outline-light d-flex rounded-circle justify-content-center align-items-center" style="aspect-ratio: 1/1"><i class="bi bi-envelope-fill"></i></a>
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <div class="row">
              <div class="col-3 d-none d-lg-block">
                <p class="text-primary mb-3">我要上課</p>
                <ul class="d-flex flex-column gap-2">
                  <li class="nav-item">
                    <RouterLink to="/course" class="nav-link nav-btn-link">課程資訊</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/course" class="nav-link nav-btn-link">開辦一覽</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/news" class="nav-link nav-btn-link">最新消息</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="col-3 d-none d-lg-block">
                <p class="text-primary mb-3">我要開課</p>
                <ul class="d-flex flex-column gap-2">
                  <li class="nav-item">
                    <RouterLink to="/course" class="nav-link nav-btn-link">開課單位申請</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/course" class="nav-link nav-btn-link">開課管理</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="col-3 d-none d-lg-block">
                <p class="text-primary mb-3">關於花甲學院</p>
                <ul class="d-flex flex-column gap-2">
                  <li class="nav-item">
                    <RouterLink to="/about" class="nav-link nav-btn-link">關於我們</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/faq" class="nav-link nav-btn-link">常見問題</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="col-3 d-none d-lg-block">
                <p class="text-primary mb-3">條款</p>
                <ul class="d-flex flex-column gap-2">
                  <li class="nav-item">
                    <RouterLink to="/terms-service" class="nav-link nav-btn-link">服務條款</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/terms-privacy" class="nav-link nav-btn-link">隱私權保護政策</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/terms-opendata" class="nav-link nav-btn-link">政府網站資料開放宣告</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-top border-1 border-gray-400 text-gray-400 py-4 fs-3h">
      <div class="container">
        <div class="d-flex justify-content-center justify-content-lg-between align-items-center">
          <div class="d-none d-lg-flex gap-2">
            <a href="#" class="btn btn-outline-gray-400 d-flex rounded-circle justify-content-center align-items-center" style="aspect-ratio: 1/1"><i class="bi bi-instagram"></i></a>
            <a href="#" class="btn btn-outline-gray-400 d-flex rounded-circle justify-content-center align-items-center" style="aspect-ratio: 1/1"><i class="bi bi-facebook"></i></a>
            <a href="#" class="btn btn-outline-gray-400 d-flex rounded-circle justify-content-center align-items-center" style="aspect-ratio: 1/1"><i class="bi bi-envelope-fill"></i></a>
          </div>
          <div class="text-center text-lg-end">
            <p>開發團隊 | Tami, Kelvinnn</p>
            <p>Copyright © 2023 花甲學院, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>