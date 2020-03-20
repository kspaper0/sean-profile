<template>
  <div class="projectsWrapper">
    <div class="projectsTitle" @click="toggleList">

      <div :class="color">
        {{project}}
      </div>
    </div>
    <div :class="['projectsContent', {'maxHeight': isDisplay}]">
      {{ content }}
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
        type: String,
        default:''
      },
      color:{
        type: String,
        default:''
      },
      content: {
        type: String,
        default: ''
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
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-indent: 1em;
    cursor: pointer;
  }
  .projectsContent {
    max-height: 0;
    overflow: hidden;
    transition: max-height .5s ease-out;
    color:#000;
  }

  .maxHeight {
    max-height: 500px;
    transition: max-height .5s ease-in;
    color:#000;
  }
</style>
