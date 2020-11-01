<template>
  <div id="app">
    <div class="container">
      <h1 align="center">{{postsCount}} posts</h1>
      <hr>
      <h2 align="center">New post</h2>
      <PostForm />
      <hr>
      <div class="post" v-for="post in valedPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'App',
  components: {
    PostForm
  },
  computed: mapGetters(['valedPosts', 'postsCount']),
  methods: mapActions(['getPosts']),
  mounted() {
    this.getPosts()
  }
}
</script>

<style>
.post {
  width: 70%;
  text-align: center;
  border: 3px solid #ccc;
  border-radius: 24px;
  margin: 1rem 15%;
}
.container {
  width: 80%;
  margin-left: 10%;
}
</style>
