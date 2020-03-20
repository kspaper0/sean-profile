<template>
  <div>
    <TheHeader/>
    <TheProfile/>
    <TheProjects/>
    <TheSkills/>
    <!-- <router-view/> -->
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import TheFooter from '@/components/layouts/TheFooter'
import TheProfile from '@/components/layouts/TheProfile'
import TheProjects from '@/components/layouts/TheProjects'
import TheSkills from '@/components/layouts/TheSkills'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheProfile,
    TheProjects,
    TheSkills
  }
}
</script>

<style lang="scss">
$navbar-default-bg: #333;

$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/common";
@import "./styles/style";
@import "animate.css/animate.min.css";
</style>
