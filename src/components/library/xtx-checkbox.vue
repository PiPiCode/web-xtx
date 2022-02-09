<template>
  <div class="xtx-checkbox" @click="changeChecked()">
    <i class="iconfont icon-checked" v-if="checked"></i>
    <i class="iconfont icon-unchecked" v-else></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </div>
</template>

<!-- <script>
  import { ref, watch } from 'vue'
  export default {
    name: 'XtxCheckbox',
    props: {
      modelValue: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {
      const checked = ref(false)
      const changeChecked = () => {
        checked.value = !checked.value
        // 使用 emmit 通知父组件数据的改变
        emit('update:modelValue', checked.value)
      }
      // 使用侦听器，得到父组件传递数据，给checked 数据
      watch(
        () => props.modelValue,
        () => {
          checked.value = props.modelValue
        },
        { immediate: true }
      )
      return { checked, changeChecked }
    }
  }
</script> -->

<script>
  import { useVModel } from '@vueuse/core'
  export default {
    name: 'XtxCheckbox',
    props: {
      modelValue: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {
      // 使用 useVModel 实现双向数据绑定
      // 1.使用props接收modelValue
      // 2.使用useVModel来包装props中的modelValue属性数据
      // 3.在使用checked.value就是使用父组件数据
      // 4.在使用checked.value = '数据' 赋值，触发 emit('update:modelValue','数据')
      const checked = useVModel(props, 'modelValue', emit)
      const changeChecked = () => {
        const newVal = !checked.value
        //通知父组件
        checked.value = newVal
        // 让组件支持change事件
        emit('change', newVal)
      }
      return { checked, changeChecked }
    }
  }
</script>

<style lang="scss" scoped></style>
