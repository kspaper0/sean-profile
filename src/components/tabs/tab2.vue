<template>
  <ul>
    <li v-for="(item, index) in tabContents" class="soft">
      <p>{{ item }}</p>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'tab2',
    data() {
      return {
        tabContents:[
          'Self-motivated and detail-orientated',
          'Good written and verbal communication skills',
          'Problem solving autonomously and efficiently',
          'Fast learner and willing to study',
          'Thriving in a team environment'
        ]
      }
    }
  }
</script>
<style scoped>
  .soft {
    list-style:disc;
    margin-left: 25px;
  }
</style>
