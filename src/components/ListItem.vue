<template>
  <div class="list-item">
    <div><ListSearch :list="list" :item="item" :onSelect="onSelect" /></div>
    <div>{{ item.id }}</div>
    <div>{{ item.name }}</div>
    <button @click.prevent="removeItem(index)">Delete Item</button>
  </div>
</template>

<script>
import ListSearch from './ListSearch.vue'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    list: {
      type: Array,
      required: true
    },

    removeItem: {
      type: Function,
      required: true
    }
  },
  components: {
    ListSearch
  },
  methods: {
    onSelect(item) {
      if (item) {
        this.item.id = item.id
        this.item.name = item.name
      }
    },
  }
}
</script>

<style lang="css" scoped>
.list-item {
  display: flex;
  margin: 1rem;
  align-items: baseline;
}

.list-item > div {
  margin: 0 10px;
  width: 140px;
}
</style>
