<template>
  <div class="py-10 py-lg-12">
    <div class="container">
      <div class="row justify-content-lg-around">
        <div class="col-12 col-lg-6">
          <h2 class="mt-6 mb-8 fs-6 text-center">會員登入</h2>
          <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
              <a href="#" class="btn btn-outline-dark w-100 py-3 rounded-10"><i class="bi bi-google me-2"></i>使用 Google 帳戶繼續</a>
              
              <div class="text-center my-5 position-relative">
                <span class="orLine d-inline-block bg-white px-2">或</span>
              </div>

              <form action="login.html" class="needs-validation" novalidate>
                <div class="form-floating mb-3">
                  <input type="email" id="userEmail" class="form-control" placeholder="name@example.com" required />
                  <label for="userEmail">電子信箱</label>
                  <div class="invalid-feedback">請輸入電子信箱</div>
                </div>
                <div class="form-floating mb-4">
                  <input type="password" class="form-control" id="password" placeholder="Password" required />
                  <label for="password">密碼</label>
                  <div class="invalid-feedback">請輸入密碼</div>
                </div>
                <div class="d-flex justify-content-between mb-8">
                  <div class="form-check">
                    <input class="form-check-input border border-2 border-gray-400" id="rememberMe" type="checkbox" />
                    <label class="form-check-label" for="rememberMe">記住我</label>
                  </div>
                  <RouterLink to="/login" class="link-underline-gray-600 text-gray-600">忘記密碼？</RouterLink>
                </div>
                <div class="row justify-content-center mb-3">
                  <div class="col-6">
                    <button class="w-100 btn btn-primary text-white py-3 rounded-10" type="submit">登入</button>
                  </div>
                </div>
              </form>
              <p class="text-center">還沒註冊嗎？ 點我 <RouterLink to="/signin" class="link-underline-primary text-primary">開始註冊</RouterLink></p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <div class="row justify-content-center">
            <div class="col-10">
              <img src="../../assets/image/elderly-people.png" alt="elderly people" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .orLine::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    display: block;
    background: #ced4da;
    margin: auto;
    z-index: -1;
  }
</style>

<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      user: {
        userEmail: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      console.log('登入')
    }
  },
  components: {
    RouterLink
  }
}
</script>