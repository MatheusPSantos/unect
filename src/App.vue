<template>
  <div>
      <Menu></Menu>
     
        <router-view></router-view>

  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Down from './components/Down.vue'
export default {
  components: {
    Menu,
    Down
  }
}
</script>
