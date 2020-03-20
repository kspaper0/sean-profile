<template>
  <div class="skills" id="skills">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 skills-title">
          <div v-for="(item, index) in tabLists" @click="cur=index" :class="['skill', item.color, { active:cur==index }]">
            {{ item.title }}
          </div>
        </div>
        <div class="col-sm-offset-2 col-sm-7 skills-content">
          <div v-for="(content, index) in tabContents" v-show="cur==index"> <p>{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheSkills',
  data() {
    return {
      tabLists: [
       {
        title: 'Technical Skills',
        color: 'skill1'
       },
       {
        title: 'Soft Skills',
        color: 'skill2'
       },
       {
        title: 'Other Skills',
        color: 'skill3'
       }
      ],
      tabContents: [
        'HTML5, CSS3..',
        'Attention-on-Details',
        'Hobbiles?'
      ],
      cur: 0
    }
  }
}
</script>
<style scoped>
  .active {
    border: 2px solid black;
  }
  .skill:hover {
    opacity: 0.3;
  }
</style>
