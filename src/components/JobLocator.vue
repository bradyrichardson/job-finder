<template lang="html">
  <div class="page">
    <div class="content">
      <div class="results">
        <div class="list-header">
          <h3><u>Title</u></h3>
          <h3><u>City</u></h3>
        </div>
        <div v-for="job in jobs" :key="job.id">
          <div class="job-entry">
            <button class="job-title" @click.prevent="toggleDetails(job.id)">
              {{ job.title }}
              <div class="job-city">
                {{ job.city }}
              </div>
            </button>
            <div class="dropdown-info" v-if="job.detail === true">
              <div class="dropdown-info-details">
                <ul style="list-style: none">
                  <li>Salary: ${{ job.salary }}.00</li>
                  <li>Company: {{ job.company }}</li>
                  <li>Email: {{ job.email }}</li>
                  <li>Phone: {{ job.phone }}</li>
                </ul>
              </div>
              <div>
                <button
                  class="show-button"
                  @click.prevent="showJob(job.latitude, job.longitude)"
                >
                  Show
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jobs: Array,
  },
  methods: {
    toggleDetails(id) {
      if (this.$root.$data.jobs.find((job) => job.id === id).detail === false) {
        this.$root.$data.jobs.find((job) => job.id === id).detail = true;
      } else {
        this.$root.$data.jobs.find((job) => job.id === id).detail = false;
      }
    },
    showJob(lat, long) {
      this.$root.$data.show = [lat, long];
      this.$root.$data.refresh++;
    },
  },
};
</script>
<style scoped>
.content {
  margin: auto;
  max-width: 800px;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  justify-content: center;
}
.list-header {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}
.job-title {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 5px 0px;
  border-radius: 10px;
  padding: 0px 30px;
}
.job-title:hover {
  background-color: #d3d3d3;
}
.show-button {
  height: 60px;
  width: 80px;
  margin-left: 20px;
  background-color: rgba(0, 0, 255, 0.5);
  color: #fff;
  border-radius: 5px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  border: solid black 1px;
}
.show-button:hover {
  background-color: rgba(0, 0, 255, 0.3);
}
.show-button:active {
  background-color: rgba(0, 0, 255, 0.7);
}
.dropdown-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.dropdown-info-details {
  text-align: left;
}
.results {
  min-width: 60vw;
  max-width: 80vw;
}
h3 {
  font-size: 15px;
}

@media only screen and (min-width: 400px) {
  .job-title {
    font-size: 20px;
  }
  .dropdown-info-details {
    font-size: 15px;
  }
}
</style>
