<template>
  <div class="position-fixed top-0 start-0 end-0 mt-2" style="z-index: 100">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-white rounded-10 rounded-lg-pill border border-1 border-gray-200 shadow-gray pb-3">
        <div class="container-fluid ps-lg-10 px-lg-8">
          <a href="#" class="d-flex align-items-center">
            <img class="me-2 header-logo" src="../../assets/image/logo.png" alt="花甲學院 logo" />
          </a>
          <RouterLink to="/login" class="btn btn-primary shadow-primary text-white ms-auto order-lg-1 rounded-20">會員登入</RouterLink>

          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- to do: when click pages, collapse have been close -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto gap-4">
              <li class="nav-item mt-6 mt-lg-0">
                <RouterLink to="/course" class="nav-link nav-btn-link">課程資訊</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/unit" class="nav-link nav-btn-link">開辦一覽</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/news" class="nav-link nav-btn-link">最新消息</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/faq" class="nav-link nav-btn-link">常見問題</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/test" class="nav-link nav-btn-link">測試頁面</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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