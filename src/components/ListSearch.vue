<template lang="html">
  <CoolSelect item-text="name" :items="list" @select="onSelect">
    <template slot="item" slot-scope="{ item }">
      <span class="item"> ({{ item.id }}) - {{ item.name }} </span>
    </template>
  </CoolSelect>
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
}
</script>

<style lang="css" scoped>
</style>
