<template>
  <div class="container mt-4">
    <h1 class="mt-5 font-weight-bold">Blog</h1>
    <h4 class="font-weight-light">sometimes i write and sharing</h4>
    <div class="row mt-5 mb-3">
      <div class="col-lg-4 col-md-6" v-for="blog in blog" :key="blog.index">
        <div class="card mb-4 border-0">
          <p
            class="position-absolute text-center bg-dark text-white p-3 font-weight-bold"
          >
            {{ getDate(blog.date) }}
          </p>
          <img
            class="card-img-top"
            src="http://placehold.it/300x200"
            alt="Card image cap"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold">{{ blog.title }}</h3>
            <p class="card-text font-weight-light mb-0">
              {{ blog.decs.substring(0, 100) }}...
            </p>
            <router-link
              :to="'/blog/' + blog.slug"
              class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
              >Read More</router-link
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
