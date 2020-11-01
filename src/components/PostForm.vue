<template>
  <form @submit.prevent="onSub">
      <input type="text" placeholder="Title" v-model="title">
      <input type="text" placeholder="Text" v-model="body">
      <button type="submit">Save</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  }, 
  methods: {
    ...mapMutations(['createPost']),
    onSub() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = ''
    }
  }
}
</script>

<style scoped> 
form {
  text-align: center;
}
input {
    text-align: center;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px 0;
    border-radius: 10px;
    margin-bottom: 10px;
}
button {
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}
button:focus {
  outline: none;
  border: 3px solid #888;
}
</style>