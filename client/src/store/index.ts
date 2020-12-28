import { createStore } from "vuex";
import { PostsModule } from "./modules/posts";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Posts: PostsModule,
  },
});
