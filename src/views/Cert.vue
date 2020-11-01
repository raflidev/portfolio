<template>
  <div class="container mt-4">
    <h1 class="mt-5 font-weight-bold">Certificate</h1>
    <h4 class="font-weight-light">My competency certificate</h4>
    <div class="row mt-5 mb-3">
      <div class="col-lg-6 col-md-12" v-for="cert in cert" :key="cert.index">
        <div class="card mb-4 border-0 animate__animated animate__fadeIn">
          <ImageBlur
            :image="'/cert/' + cert.credential + '.png'"
            :thumb="'/cert/' + cert.credential + '.png'"
            class="card-img-top"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold">{{ cert.title }}</h3>
            <p class="card-text font-weight-light mb-0">
              {{ cert.exp }} <br />
              Credential ID : {{ cert.credential }}
            </p>
            <a
              :href="cert.link"
              target="_blank"
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
import { ImageBlur } from "@djanoskova/vue-image-blur";
import "@djanoskova/vue-image-blur/public/css/imageBlur.css";
// import axios from "axios";
export default {
  computed: {
    ...mapState(["cert"]),
  },
  methods: {
    getDate(date) {
      return moment(date).format("DD MMM");
    },
  },
  components: {
    ImageBlur,
  },
};
</script>

<style scoped>
.image-blur {
  width: 100%;
  height: 360px;
}
</style>

