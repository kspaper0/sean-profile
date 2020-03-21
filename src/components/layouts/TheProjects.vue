<template>
  <div>
    <div class="projects" id="projects">
      <div v-for="(item, index) in projects" :class="['project', 'animation', item.color]">
        <h3>{{ item.name }}</h3>
        <p>{{ item.category }}</p>
        <br>
        <small>
          <em>{{ item.keyword }}</em>
        </small>
        <a @click="showMoreButton(index)" class="btn btn-link info" href="javascripte:;">More</a>
      </div>
    </div>
    <Modal id="myModal" :show.sync="showMore" class="text-center">
      <div slot="title">
        {{ projects[cur].title }}
      </div>
      <div>This will be pic</div>
      <div slot="desc">
        <div class="text-center">This is description</div>

      </div>
    </Modal>
    <div class="mobile-projects" id="mobile">
      <Accordion v-for="(item, index) in projects" :project="item" :key="index"></Accordion>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheProjects',
  data() {
    return {
      projects: [
      {
        name: 'Project 1:',
        category: 'Social Platform App',
        keyword: 'K.W.: HTML5, CSS3, Linux, Apache, MySQL, PHP7, Laravel, Boostrap, SASS, etc.',
        color: 'project1',
        title: 'This is project 1'
      },
      {
        name: 'Project 2:',
        category: 'Backend & Frontend',
        keyword: 'K.W.: RESTful, Less, OAuth(JWT & Passport), Javascript, Postman, Git & GitHub, etc.',
        color: 'project2',
        title: 'This is project 2'
      },
      {
        name: 'Project 3:',
        category: 'E - Commerce App',
        keyword: 'K.W.: MySQL Transaction, Vagrant, SLB, JQuery, Vue, JMeter, Nginx, ElasticSearch, etc.',
        color: 'project3',
        title: 'This is title 3'
      },
      {
        name: 'Project 4:',
        category: 'Bulletin Board System',
        keyword: 'K.W.: VUE, Vuex, Vue-Router, Github Pages, ES6, NodeJS, NPM, AJAX, etc.',
        color: 'project4',
        title: 'This is title 4'
      }
      ],
      showMore: false,
      cur: 0,
      curWidth: 0
    }
  },
  created() {
    this.curWidth = document.body.clientWidth || document.documentElement.clientWidth
    // console.log( this.curWidth )
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.curWidth = document.body.clientWidth || document.documentElement.clientWidth
        // console.log( this.curWidth )
      })()
    }
  },
  methods: {
    showMoreButton(index) {

      this.cur = index;

      this.showMore = true
      // console.log(this.cur);
    }
  },
  watch: {
    curWidth(value) {
      console.log(value);
      const projects = document.getElementById('projects');
      // const parent = projects.parentNode;
      const mobile = document.getElementById('mobile');
      const myModal = document.getElementById('myModal');
      if(value < 768)
      {
        projects.style.display="none";
        myModal.style.display="none";
        mobile.style.display="";
      } else {

        mobile.style.display="none";
        projects.style.display="";
      }

    }
  }
}
</script>
<style scoped>
.projects .project small { font-size: 60%; }
.mobile-projects {
  min-height: 250px;
  width: 85%;
  margin: 0 auto;
}
</style>
