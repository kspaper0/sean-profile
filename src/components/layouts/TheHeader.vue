<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand">{{logo.title}}</a>
        <!-- <router-link to='/' class="navbar-brand"> {{logo.title}} </router-link> -->

      </div>
      <div id="navbar-collapse-content" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav}]">
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in navList" :class="{ active: index === activeNavIdx }">
            <a :href="`#${item.link}`" @click="clickActive(index)"> {{ item.tab }} </a>
          </li>
        </ul>
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search" name="search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      logo: {
        title: 'Shuo\'s Profile'
      },
      navList: [
        {
          tab: 'Home',
          link: 'profile'
        },
        // {
        //   tab: 'Profile',
        //   link: 'profile'
        // },
        // {
        //   tab: 'Projects',
        //   link: 'porjects'
        // },
        {
          tab: 'Skills',
          link: 'skills'
        }
      ],
      activeNavIdx:0,
      showCollapsedNav: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    clickActive(index) {
      this.activeNavIdx = index
    },
    toggleNav(){
      this.showCollapsedNav = !this.showCollapsedNav
    },
    onScroll(){
      const scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      // console.log(scrolled)
      if (scrolled > 500) {
        // console.log(scrolled)
        this.activeNavIdx = 1;
      } else {
        this.activeNavIdx = 0;
      }
    }
  }
}
</script>
<style scoped>
  .navbar-inverse .navbar-nav > li > a:hover { background-color: rgba(96,96,96,0.2); }
</style>
