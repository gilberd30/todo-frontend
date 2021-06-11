<template>
 <div>
  <h1> Selamat datang </h1>
  <ul>
    <li v-for="item in todos" :key="item.id">{{ item.deskripsi}}
      <button @click="hapus(item.id)">&times;</button>
    </li>
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
  .then(result=>{
    this.todos = result.data
  })
},

methods: {
  tambah: function () {
    const newItem = { deskripsi: this.myText}
    axios.post('http://localhost:3031/todo', newItem)
    this.todos.push(newItem)
  },
  hapus: function (id) {
    const index = this.todos.indexOf(id) + 1
    axios.delete(`http://localhost:3031/todo/${id}`)
    this.todos.splice(index,1)
  }
}
}
</script>






