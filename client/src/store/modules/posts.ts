import axios from "axios";
import { getPosts, insertPost, deletePost } from "@/PostService";

const state = {
  posts: [],
};
const mutations = {
  SET_POSTS: (state: { posts: any }, posts: any) => (state.posts = posts),
};

const getters = {};

const actions = {
  async fetchPosts({ commit }: { commit: Function }) {
    const response = await getPosts();
    commit("SET_POSTS", response);
  },
  async addPost(
    { commit, dispatch }: { commit: Function; dispatch: Function },
    text: string
  ) {
    const response = await insertPost(text);
    dispatch("fetchPosts");
  },
  async deletePost(
    { commit, dispatch }: { commit: Function; dispatch: Function },
    id: number
  ) {
    const response = await deletePost(id);
    dispatch("fetchPosts");
  },
};

export const PostsModule = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
