<template>
  <div>
    <h1>Berikut adalah pengguna kita</h1>
    <ul>
      <li v-for="item in users" :key="item.id">
        {{ item.user }}
        <button @click="hapus(item.id)">&times;</button>
      </li>
    </ul>
    <input v-model="username" />
    <input v-model="password" />
    <button @click="tambah">Add</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      users: [],
      username: "",
      password: "",
    };
  },

  created: function () {
    const username = localStorage.getItem("usr");
    const password = localStorage.getItem("pwd");
    axios.get("http://localhost:3031/user", { headers: { username, password } }).then((result) => {
      this.users = result.data;
    });
  },

  methods: {
    tambah: function () {
      const username = localStorage.getItem("usr");
      const password = localStorage.getItem("pwd");
      axios.post("http://localhost:3031/user", {
        headers: { username, password },
      });
    },
    hapus: function (id) {
      axios.delete(`http://localhost:3031/user/${id}`);
    },
  },
};
</script>






