<script setup>
/* eslint-disable */
import { onMounted, watch, ref, onUnmounted } from 'vue'
import $ from 'jquery'

const props = defineProps(['options', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const selcomponent = ref(null)

onMounted(() => {
  $(selcomponent.value)
    .select2({ data: props.options })
    .val(props.modelValue)
    .trigger('change')
    .on('change', (t) => {
      emit('update:modelValue', t.target.value)
    })
})

watch(() => props.modelValue, () => {
  $(selcomponent.value)
    .val(props.modelValue)
    .trigger('change')
})

watch(() => props.options, () => {
  $(selcomponent.value)
    .empty()
    .select2({ data: props.options })
})

onUnmounted(() => {
  $(selcomponent.value)
    .off()
    .select2('destroy')
})

</script>

<template>
  <select ref="selcomponent" class="form-control">
    <slot></slot>
  </select>
</template>