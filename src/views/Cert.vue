<template>
  <div class="container mt-4">
    <h1 class="mt-5 font-weight-bold">Certificate</h1>
    <h4 class="font-weight-light">my certificate collection</h4>
    <div class="row mt-5 mb-3">
      <div class="col-lg-4 col-md-6" v-for="blog in blog" :key="blog.index">
        <div class="card mb-4 border-0">
          <div class="card-body">
            <h3 class="card-title font-weight-bold">{{ blog.title }}</h3>
            <p class="card-text font-weight-light mb-0">
             
            </p>
            <a
              :href="blog"
              class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
              >See credential</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
// import axios from "axios";
export default {
  computed: {
    ...mapState(["blog"]),
  },
  methods: {
    getDate(date) {
      return moment(date).format("DD MMM");
    },
  },
};
</script>

<style></style>
