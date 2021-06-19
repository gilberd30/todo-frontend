<template>
  <div>
    <div>
      <label for="username"></label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label for="password"></label>
      <input type="password" v-model="password" />
    </div>
    <button @click="simpan">Simpan</button>
    <button @click="hapus">Hapus</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  created: function () {
    this.username = localStorage.getItem("usr");
    this.password = localStorage.getItem("pwd");
  },
  methods: {
    simpan: function () {
      localStorage.setItem("usr", this.username);
      localStorage.setItem("pwd", this.password);
    },
    hapus: function () {
      localStorage.removeItem('usr', this.username)
      localStorage.removeItem('pwd', this.password)
      this.username =''
      this.password =''
    },
  },
};
</script>