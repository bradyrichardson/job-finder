<template>
  <div class="page">
    <h1>Map</h1>
    <div class="search">
      <div class="map">
        <div class="cell cell-map">
          <MapComponent :key="this.$root.$data.refresh"/>
        </div>
      </div>
      <div class="city-input">
        <form>
        <input id="inputQuery"v-model="cityInput" placeholder="Search a city..." style="text-align: center">
        <div class="num-jobs">
          {{ this.jobs.length }} / 100 jobs
        </div>
        </form>
      </div>
    </div>
    <div>
      <JobLocator :jobs="jobs" />
    </div>
  </div>
</template>

<script>
import JobLocator from "@/components/JobLocator.vue";
import MapComponent from "@/components/MapComponent.vue";
export default {
  name: "MapView",
  components: {
    JobLocator,
    MapComponent,
  },
  data() {
    return {
      cityInput: "",
    };
  },
  computed: {
    jobs() {
      return this.$root.$data.jobs.filter(job => job.city.toLowerCase().search(this.cityInput.toLowerCase()) >= 0);
    },
  },
};
</script>
<style scoped>
.page {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  width: 100vw;
  background-color: #fff;
  color: rgba(0,0,0,.7);
  margin-top: 0;
}
.map {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  display: grid;
  grid-template-columns: 100vh;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}
.cell {
  border-radius: 4px;
  background-color: lightgrey;
}
.cell-map {
  height: 400px;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}
#inputQuery {
  width: 300px;
  font-size: 20px;
}
.num-jobs {
  margin-top: 10px;
}
.city-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}
</style>
