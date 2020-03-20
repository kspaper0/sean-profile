<template>
  <div>、
    <transition
    enter-active-class="animated bounceIn"
    leave-active-class="animated bounceOut"
    >

    <div v-show="show" class="modal" style="display:block" @click.self="close">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">

            <h4 class="modal-title">
              <slot name="title"></slot>
            </h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="desc"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <div v-show="show" class="modal-backdrop fade in" @click="close"></div>
  </transition>
</div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('update:show', false)
    }
  },
  watch: {
    show(value) {
      const bodyClassList = document.body.classList

      if(value) {
        bodyClassList.add('modal-open')
      } else {
        bodyClassList.remove('modal-open')
      }
    }
  }
}
</script>
<style scoped>
.animated {
  animation-duration: .4s;
}
.fade-enter, .fade-leave-to {
  opacity:9;
}
</style>
