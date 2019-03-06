<template>
  <div id="app">
    <ListItem v-for="(item, index) in listSelected" :key="index"
      :item="item"
      :index="index"
      :list="list"
      :removeItem="removeItem" />

    <button @click.prevent="addItem()">Add Item</button>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue'

export default {
  name: 'app',
  data() {
    return {
      listSelected: [],

      list: [
        {id: 1, name: "IBM"},
        {id: 2, name: "Apple"},
        {id: 3, name: "Microsoft"},
        {id: 4, name: "Xiaomi"},
        {id: 5, name: "Samsung"},
        {id: 6, name: "Tesla"}
      ],

      schema: { id: "", name: "" }
    }
  },
  components: {
    ListItem
  },
  methods: {
    addItem() {
      this.listSelected.push(Object.assign({}, this.schema))
    },

    removeItem(index) {
      this.listSelected.splice(index, 1)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
