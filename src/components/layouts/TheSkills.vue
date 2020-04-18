<template>
  <div class="skills" id="skills">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 skills-title">
          <ul>
            <li v-for="(tab, index) in tabLists" @click="toggle(index, tab.view)" :class="['skill', tab.color, { active:active==index }]">
              {{ tab.title }}
            </li>
          </ul>
        </div>
        <div class="col-sm-offset-2 col-sm-7 skills-content">
          <component :is="currentView"></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tab1 from '@/components/tabs/tab1.vue'
import tab2 from '@/components/tabs/tab2.vue'
import tab3 from '@/components/tabs/tab3.vue'
export default {
  name: 'TheSkills',
  data() {
    return {
      active: 0,
      currentView: 'tab1',
      tabLists: [
        {
          title: 'Technical Skills',
          view: 'tab1',
          color: 'skill1'
        },
        {
          title: 'Transferable Skills',
          view: 'tab2',
          color: 'skill2'
        },
        {
          title: 'Others',
          view: 'tab3',
          color: 'skill3'
        }
      ]

    }
  },
  methods:{
    toggle(i,v){
      this.active=i;
      this.currentView=v;
    }
  },
  components:{
    tab1,
    tab2,
    tab3
  }
}
</script>
<style scoped>
  .active {
    transform: scale(1.1);
  }
  .skill:hover {
    border: 2px solid rgba(16,16,16,0.4)
  }
</style>

