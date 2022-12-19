<script>
/* eslint-disable */
import $ from 'jquery'

export default {
  name: 'select2',
  props: ['options', 'modelValue'],
  mounted() {
    var vm = this
    console.log('mount select', this.modelValue)
    $(this.$el)
      .select2({ data: this.options })
      .val(this.modelValue)
      .trigger('change')
      .on('change', (t) => {
        console.log('change', t.target.value)
        vm.$emit('update:modelValue', t.target.value)
      })
  },
  watch: {
    modelValue() {
      console.log('watch')
      $(this.$el)
        .val(this.modelValue)
        .trigger('change')
    },
    options() {
      $(this.$el)
        .empty()
        .select2({ data: this.options })
    }
  },
  destroyed: () => {
    $(this.$el)
      .off()
      .select2('destroy')
  }
}

</script>

<template>
  <select class="form-control">
    <slot></slot>
  </select>
</template>