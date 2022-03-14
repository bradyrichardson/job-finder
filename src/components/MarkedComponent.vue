<template>
<div class="wrapper">
  <div>
    <div class="marked-jobs" v-for="job in markedJobs" :key="job.id">
      <div class="job">
        <div>
          Title: {{ job.title }}
        </div>
        <div>
          Salary: ${{ job.salary }}.00
        </div>
        <div>
          Company: {{ job.company }}
        </div>
        <div>
          Email: {{ job.email }}
        </div>
        <div>
          Phone: {{ job.phone }}
        </div>
        <div>
          Location: {{ job.city }}, {{ job.state }}
          <hr />
        </div>
      </div>
      <div class="remove-div">
        <button @click="removeJob(job.id)">Remove</button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: {
    markedJobs: Array,
  },
  methods: {
    removeJob(id) {
        this.$root.$data.marked = this.$root.$data.marked.filter(job => job.id !== id);
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.marked-jobs {
  border-radius: 10px;
  margin: 10px 0px;
  margin-left: 50px;
  max-width: 70vw;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.job {
  padding: 20px;
}
.remove-div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
button {
  width: 150px;
  height: 70px;
  background-color: rgba(255,0,0,0.6);
  color: #fff;
  border: solid black 1px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 5px;
}
button:hover {
  background-color: rgba(255,0,0,0.2);
}
button:active {
  background-color: rgba(255,0,0,0.7);
}
@media only screen and (min-width: 400px) {
  .marked-jobs {
    font-size: 30px;
    text-align: left;
  }
}
</style>
