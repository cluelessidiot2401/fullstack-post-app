<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <!-- Create Post here -->
    <div class="create-text">
      <label for="create-post">Say something</label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        placeholder="Create a post"
      />
      <button @click="createPost">Post!</button>
    </div>
    <div v-if="posting">Posting...</div>
    <hr />
    <div class="posts-container">
      <div
        class="post"
        v-for="(post, idx) in allPosts"
        :key="post._id"
        :index="idx"
        :item="post"
      >
        {{ `${formattedTimeString(post.createdAt)}` }}
        <p class="text" v-text="post.text"></p>
        <i @click="deletePost(post._id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PostComponent",
  async setup() {
    const state = reactive({
      posting: false,
    });
    const text = ref("");
    const store = useStore();
    const allPosts = computed(() => store.state.Posts.posts);
    await store.dispatch("Posts/fetchPosts");

    async function createPost() {
      state.posting = true;
      await store.dispatch("Posts/addPost", text.value);
      text.value = "";
      state.posting = false;
    }

    async function deletePost(id: number) {
      await store.dispatch("Posts/deletePost", id);
    }

    const formattedTimeString = (date: Date) => `${date.toUTCString()}`;

    return {
      allPosts,
      text,
      createPost,
      formattedTimeString,
      ...toRefs(state),
      deletePost,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

div.post i {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  cursor: pointer;
}
</style>
