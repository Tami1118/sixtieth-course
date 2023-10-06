<template>
  <UserHeader></UserHeader>
  <RouterView></RouterView>
  <UserFooter></UserFooter>
</template>

<script>
import {RouterView} from 'vue-router'
import UserHeader from '@/components/frontEnd/UserHeader.vue'
import UserFooter from '@/components/frontEnd/UserFooter.vue'

export default {
  components: {
    RouterView,
    UserHeader,
    UserFooter,
  }
}
</script>