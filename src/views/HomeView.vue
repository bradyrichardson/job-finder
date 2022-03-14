<template>
  <div class="home">
    <h1>Finder</h1>
    <div class="search">
      <form class="" action="index.html" method="post">
        <input
          id="queryJob"
          v-model="query"
          placeholder="Search by job title..."
          style="text-align: center"
        />
      </form>
    </div>
    <div>
      <HomePage :jobs="jobs" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "HomeView",
  components: {
    HomePage,
  },
  data() {
    return {
      query: "",
    };
  },
  computed: {
    jobs() {
      return this.$root.$data.jobs.filter(
        (job) => job.title.toLowerCase().search(this.query.toLowerCase()) >= 0
      );
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
.search {
  display: flex;
  justify-content: center;
}
#queryJob {
  width: 300px;
  font-size: 20px;
}
</style>
