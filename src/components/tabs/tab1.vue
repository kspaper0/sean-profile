<template>
  <ul>
    <li v-for="(item, index) in tabContents">
        <h4><u>{{item.title}}</u></h4>
        <p>{{item.content}}</p>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'tab1',
    data() {
      return {
        tabContents: [
          {
            title: 'Programming Languages',
            content: 'PHP7 (Laravel), SQL, Vue, Angular, React, HTML5, CSS3, JavaScript, JQuery, AJAX, ElasticSearch '
          },
          {
            title: 'Concepts, Tools & Others',
            content: 'MVC, MVVM, RESTful, Responsive Layout, SASS & LESS, Apache, Bootstrap, Photoshop, Linux, JWT & Passport, Postman, Git & GitHub, Nginx, NodeJS, NPM, WordPress'
          },

        ]
      }
    }
  }
</script>
<style scoped>
</style>
