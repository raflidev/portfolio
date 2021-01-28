<template>
  <div class="container mt-4">
    <h1 class="mt-5 font-weight-bold">Blog</h1>
    <h4 class="font-weight-light">sometimes i write and sharing</h4>
    <div class="row mt-5 mb-3">
       <div class="col-lg-4 col-md-6" v-for="medium in medium.items" :key="medium.index">
           <div class="card mb-4 border-0 animate__animated animate__fadeIn">
            <p
              class="position-absolute text-center bg-dark text-white p-3 font-weight-bold"
            >
              {{ getDate(medium.pubDate) }}
            </p>
            <img
              class="card-img-top"
              :src="medium.thumbnail"
              alt="Card image cap"
            />
            <div class="card-body">
              <h3 class="card-title font-weight-bold" style="min-height:100px">{{ medium.title }}</h3>
              <a target="_blank"
                :href="medium.link"
                class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
                >Read More</a
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
    ...mapState(["medium"]),
  },
  methods: {
    getDate(date) {
      return moment(date).format("DD MMM");
    },
  },
  mounted(){
    this.$store.dispatch("getMedium");
  }
  // mounted() {
  //   axios
  //     .get(
  //       "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40raflidev"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  // },
};
</script>

<style></style>
