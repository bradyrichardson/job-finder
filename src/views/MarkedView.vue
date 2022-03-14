<template>
  <div class="page">
    <h1>Marked Jobs: {{ this.$root.$data.marked.length }} / 100</h1>
    <div class="empty" v-if="this.$root.$data.marked.length === 0">
      <p style="font-size: 30px">No jobs added...</p>
    </div>
    <MarkedComponent :markedJobs="markedJobs" />
  </div>
</template>

<script>
import MarkedComponent from "@/components/MarkedComponent.vue";
export default {
  name: "MarkedView",
  components: {
    MarkedComponent,
  },
  computed: {
    markedJobs() {
      return this.$root.$data.marked;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 0;
}
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
