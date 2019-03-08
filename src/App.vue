<template>
  <div id="app">
    <ListItem
      v-for="(item, index) in listSelected"
      :key="item.id || item.key"
      :item.sync="listSelected[index]"
      :index="index"
      :list="list"
      :removeItem="removeItem"
    />

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
      itemTest: {id: 777, name: "Test"},
      itemTest2: {id: 888, name: "Test 2"},

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
      // same result (shallow copy) but es6
      this.listSelected.push({
        ...this.schema,
        key: Math.round(+new Date() * Math.random())
      })
    },

    removeItem(item) {
      this.listSelected = this.listSelected.filter(i => i !== item)
    }
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
