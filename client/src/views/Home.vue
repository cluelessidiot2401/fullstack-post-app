<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <pre v-if="error" class="danger" v-text="error"></pre>
    <Suspense v-else>
      <template #default>
        <PostComponent :key="routerPath" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onErrorCaptured, ref } from "vue";
import PostComponent from "@/components/PostComponent.vue"; // @ is an alias to /src
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    PostComponent,
  },
  setup() {
    const route = useRoute();
    const routerPath = computed(() => route.fullPath);
    const error = ref("");
    onErrorCaptured((e: any) => {
      console.log("Error Occured!!!");
      const msg = e?.message ?? e;
      error.value = JSON.stringify(msg, null, 2);
      return false;
    });

    return { error, routerPath };
  },
});
</script>

<style scoped>
pre.danger {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
</style>
