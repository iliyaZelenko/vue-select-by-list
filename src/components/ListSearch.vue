<template lang="html">
  <div>
    <cool-select
      :value="item"
      :items="list"
      item-text="name"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { CoolSelect } from 'vue-cool-select'

export default {
  props: {
    list: {
      type: Array,
      required: true
    },

    item: {
      type: Object,
      required: true
    },

    onSelect: {
      type: Function,
      required: true
    },
  },
  components: {
    CoolSelect
  },
  data: () => ({
    selected: null
  })
}
</script>

<style lang="css" scoped>
</style>
