import { defineStore } from 'pinia'

export default defineStore ('favoriteData', {
  state: () => ({
    favorite: {
      courseId: [],
    }
  }),
  getters: {
    // 後台(學生)
    // 加入我的收藏  addFavorite
    // 取得所有收藏  getFavorite
    // 刪除單一收藏  deleteFavorite
  }
})