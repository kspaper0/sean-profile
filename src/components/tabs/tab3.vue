<template>
  <ul>
    <li v-for="(item, index) in tabContents">
        <h4><u>{{item.title}}</u></h4>
        <p>{{item.content}}  &#149; {{item.address}}</p>
    </li>
    <h4><u>Hobbies</u></h4>
    <ul>
      <li v-for="(item, index) in hobbies" class="hobbies">
        <p>{{item}}</p>
      </li>
    </ul>
  </ul>

</template>
<script>
  export default {
    name: 'tab3',
    data() {
      return {
        tabContents: [
          {
            title: 'Education',
            content: 'Master of I.T',
            address: 'Monash University'
          },
          {
            title: 'Experience',
            content: 'Lead Web Developer - Tekamas Group',

            address: 'Melbourne CBD'
          }
        ],
        hobbies: [
          'Sports',
          'Fitness',
          'Self-Study',
          'Social contact',
          'Movies',
        ]
      }
    }
  }
</script>
<style scoped>
  .hobbies {
    height:20px;
    list-style:disc;
    text-indent: 25px;
  }
</style>
