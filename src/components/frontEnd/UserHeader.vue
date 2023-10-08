<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>

      <!-- mobile 漢堡選單
        1. 補動畫，參考 https://ithelp.ithome.com.tw/articles/10269809?sc=iThomeR
        2. nav-link active 時，點其他的地方 active 效果會不見
      -->
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
          <li class="nav-item">
            <RouterLink to="/course" class="nav-link nav-btn-link">課程探索</RouterLink>
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

        <RouterLink to="/login" class="btn btn-primary text-white">會員登入</RouterLink>
      </div>

      <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink,
  }
}
</script>