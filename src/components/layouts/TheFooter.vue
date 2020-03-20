<template>
  <footer class="navbar-default navbar-fixed-bottom footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-5 col-md-offset-1 col-md-4">
          &copy;&nbsp;{{ person.info }}
          <strong>{{ person.name }}</strong>
        </div>
        <div class="col-sm-3">
          <abbr title="Phone">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </abbr>
          {{ person.phone }}
        </div>
        <div class="col-sm-4">
          <abbr title="Email">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
          </abbr>
          <a href="mailto:seankangaroo@gmail.com" target="_blank">{{ person.email }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        person: {
          info: 'Developed with Vue by ',
          name: 'Shuo Kang',
          phone: '0423 850 797',
          email: 'seankangaroo@gmail.com'
        }
      }
    }
  }
</script>
<style scoped>
</style>
