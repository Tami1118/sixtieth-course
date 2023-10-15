<template>
  <div class="container">
    <div class="unit-banner rounded-20 text-white d-flex align-items-center justify-content-center">
      <p class="fs-6 fs-lg-8 fw-600">主辦單位一覽</p>
    </div>

    <div class="row g-5">
      <div class="col-12 col-lg-3">
        <div class="row row-cols-1">
          <div class="col-6">
            <label for="" class="form-label">縣市</label>
            <select name="" id="" class="form-select"></select>
          </div>
          <div class="col-6">
            <label for="" class="form-label">行政區</label>
            <select name="" id="" class="form-select"></select>
          </div>
          <div class="col">
            <label for="" class="form-label">主辦單位類型</label>
            <select name="" id="" class="form-select"></select>
          </div>
          <div class="col">
            <label for="" class="form-label">關鍵字搜尋</label>
            <input name="" id="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-9">
        <ul class="row row-cols-1 row-cols-lg-3">
          <li class="col">
            <RouterLink to="/unit/unit-detail" class="card"> 點我進去</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- 篩選單位性質
      單位性質：社區大學、樂齡學苑、社區樂齡、
     -->

    <nav aria-label="pagination label" class="my-4">
      <ul class="pagination justify-content-center gap-3">
        <li class="page-item disabled">
          <a class="page-link">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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