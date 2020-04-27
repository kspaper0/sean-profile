<template>
  <div>
    <div class="projects" id="projects">
      <div v-for="(item, index) in projects" :class="['project', 'animation', item.color]">
        <h3>{{ item.name }}:</h3>
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
        {{ projects[cur].name }} - {{ projects[cur].category }}
      </div>
      <div>
        <!-- <img :src="`../../assets/${project[cur].color}.gif`"> -->
        <img :src="projects[cur].pic" class="img-box">
      </div>
      <div slot="desc">
        <div class="text-left desc-content">
          <p class="lead">{{ projects[cur].title }}</p>
          <ul>
            <li v-for="(item,index) in projects[cur].desc">{{ item }}</li>
          </ul>
        </div>

      </div>
    </Modal>
    <div class="mobile-projects" id="mobile">
      <Accordion v-for="(item, index) in projects" :project="item" :key="index"></Accordion>
    </div>
  </div>
</template>
<script>
import project1 from '../../assets/project1.gif'
import project2 from '../../assets/project2.gif'
import project3 from '../../assets/project3.gif'
import project4 from '../../assets/project4.gif'
export default {
  name: 'TheProjects',
  data() {
    return {
      projects: [
      {
        name: 'Project 1',
        category: 'Social Platform App',
        keyword: 'K.W.: HTML5, CSS3, Linux, Apache, MySQL, PHP7, Laravel, Boostrap, SASS, etc.',
        color: 'project1',
        pic: project1,
        title: ' A micro-blogging application is developed with the mode of MVC, which',
        desc: [
          "provides feedback on validation error and unauthorised action, etc.",
          "utilises built-in user authentication for registration and login",
          "interacts with database for manipulating data with CRUD",
          "supports administrators to delegate multiple roles and their permissions",
          "sends emails for activating account and resetting password",
          "allows legal users to manage their info., blogs, followers and followings",
          "enables real-time communication through notification",
          "introduces and optimises with concept of SEO"
        ]
      },
      {
        name: 'Project 2',
        category: 'Backend & Frontend',
        keyword: 'K.W.: RESTful, Less, OAuth(JWT & Passport), Javascript, Postman, Git & GitHub, etc.',
        color: 'project2',
        pic: project2,
        title: 'This project builds API server on the backend and is used for the mobile end. On the basis of the first project, it:',
        desc: [
          "strictly follows and applies the design principle of RESTful",
          "makes the system robust, readable and extendable",
          "structures and tests all interfaces (Unit & Integration)",
          "develops neat and friendly UI on the mobile-side on a mobile simulator",
          "receives all interfaces, and debugs on the simulated device",
          "manages to login with the third party account (e.g. WeChat)",
          "registers with verification code received from mobile phone"
        ]
      },
      {
        name: 'Project 3',
        category: 'E - Commerce App',
        keyword: 'K.W.: MySQL Transaction, Vagrant, SLB, JQuery, Vue, JMeter, Nginx, ElasticSearch, etc.',
        color: 'project3',
        pic: project3,
        title: 'An online shopping application (B2C mode) and ebay are little alike. The system:',
        desc: [
          "requires users to register, to login, and to manage address list and orders, etc.",
          "performs multiple payment methods (i.e. coupon, crowd funding, installment & seckill)",
          "has the payment & refund tested on sandbox provided by Alipay and notifies via email",
          "builds a complete background management system",
          "is capable of faceted search and offers consumers similar products",
          "deploys hierarchical categories and aggregates breadcrumbs into search result",
          "had chosen hosting, configured and installed under production environment",
          "had executed script to test application performance under a heavy load"
        ]
      },
      {
        name: 'Project 4',
        category: 'Bulletin Board System',
        keyword: 'K.W.: VUE, Vuex, Vue-Router, Github Pages, ES6, NodeJS, NPM, AJAX, etc.',
        color: 'project4',
        pic: project4,
        title: 'The development of this application adopts the most popular framework, MVVM. The single webpage is designed to:',
        desc: [
          "fulfil responsive layout and enrich animation effect",
          "satisfy user interactions (register, login & post, etc.)",
          "control DOM component output in a dynamic way",
          "be easily and economically hosted as a static site"
        ]
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
      // console.log(value);
      const projects = document.getElementById('projects');
      // const parent = projects.parentNode;
      const mobile = document.getElementById('mobile');
      const myModal = document.getElementById('myModal');
      if(value < 768)
      {
        projects.style.display="none";
        // myModal.style.display="none";
        this.showMore = false;
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

/* -- Accordion -- */
.mobile-projects {
  min-height: 250px;
  width: 85%;
  margin: 0 auto;
  font-family: noteFont;
  font-size:12px;
}

/* -- Modal -- */
.img-box {
  width:75%;
  height:75%;
  background: #fff;
}
.desc-content {
  background: #fff;
  border: 2px solid #7f7f7f;
  box-shadow:inset 0 0 2px 2px #ccc;
  width:75%;
  margin: 0 auto;

}
.desc-content > p {
  margin: 10px;
  font-size: 18px;
}

.desc-content > ul {
  margin: 15px;
  padding: 10px;
}

.desc-content > ul > li {
  list-style-type: square;
}
</style>
