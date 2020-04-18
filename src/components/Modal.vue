<template>
  <div>、
    <transition
    enter-active-class="animated zoomIn"
    leave-active-class="animated rollOut"
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
  animation-duration: .5s;
}
.fade-enter, .fade-leave-to {
  opacity:9;
}
.modal-dialog {
  width: 65%;
  height:auto;
}
.modal-content {
  background: #eee;
}
.modal-header {
  height: 40px;
  padding: 5px;
  padding-top: 10px;
}
</style>
