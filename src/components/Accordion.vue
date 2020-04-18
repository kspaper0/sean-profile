<template>
  <div class="projectsWrapper">
    <div class="projectsTitle" @click="toggleList">

      <div :class="project.color">

        <span :class="['closeIcon', { 'open_menu': isDisplay, 'close_menu': !isDisplay }]">&times</span>
        <span>{{ project.name }} - {{ project.category }}</span>
      </div>
    </div>
    <div :class="['projectsContent', project.color, {'maxHeight': isDisplay}]">
      <div class="contents">{{ project.keyword }}</div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isDisplay: false
      }
    },
    props: {
      project: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      toggleList() {
        this.isDisplay = !this.isDisplay
      }
    }
  }
</script>
<style scoped>
  .projectsWrapper {
    display: flex;
    flex-direction: column;
  }
  .projectsTitle {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-indent: 1em;
    cursor: pointer;
    margin: 5px auto;
  }
  .closeIcon {
    color: #fff;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .projectsContent {
    max-height: 0;
    overflow: hidden;
    transition: max-height .5s ease-out;
  }

  .maxHeight {
    max-height: 500px;
    transition: max-height .5s ease-in;
    margin-top: -5px;
    border: 2px solid rgba(0,0,0,0.1);
  }

  .contents {
    padding: 10px;
  }

@keyframes open-menu {
    to {
      opacity: 1;
      filter: alpha(opacity=100);
    }
  }
@keyframes close-menu {
    from {
      opacity: 1;
      filter: alpha(opacity=100);
    }

    to {
      opacity: 0;
      filter: alpha(opacity=0);
    }
  }
  .open_menu {
    animation: open-menu 0.4s ease-out forwards;
  }
  .close_menu {
    animation: close-menu 0.4s ease-out forwards;
  }
</style>
