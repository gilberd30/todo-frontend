<template>
 <div>
  <h1> Selamat datang </h1>
  <ul>
    <li v-for="item in todos">{{ item.desc}}</li>
  </ul>
  <input v-model="myText"/>
  <button @click="tambah">Add</button>
 </div>
</template>

<script>
import axios from 'axios'
export default { 
data: function () {
  return {
    todos: [],
    myText: ''
  }
},

created: function () {
  axios.get('http://localhost:3031/todo')
},

methods: {
  tambah: function () {
    this.todos.push({desc: this.myText})
  }
}
}
</script>






