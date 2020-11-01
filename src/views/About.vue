<template>
  <div class="about">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-6 mb-5 animate__animated animate__fadeIn">
          <!-- <img src="me/about.jpg" width="440" class="img-fluid animate__animated animate__fadeIn" /> -->
          <ImageBlur
            :image="'/me/about.jpg'"
            :thumb="'/me/about.jpg'"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="font-weight-bolder text-redhat text-uppercase mb-0 pb-0">
            about me
          </h1>
          <h1
            class="font-weight-bolder text-redhat text-uppercase display-2 text-secondary"
          >
            who am i
          </h1>
          <p>
            Hello my name is Muhammad Rafli Ramadhan, someone who likes to spend
            time learning new things.
          </p>
          <p>
            Now it focuses on learning web-based hybrid programming that can be
            accessed on desktop and android.
          </p>
          <p>My work that you see is my learning progress.</p>
          <p>
            I like to make podcasts and share content on Instagram and the media
            and also like to create innovations and ideas that I like.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ImageBlur } from "@djanoskova/vue-image-blur";
import "@djanoskova/vue-image-blur/public/css/imageBlur.css";
export default {
  name: "about",
  components: {
    ImageBlur,
  },
};
</script>
<style scoped>
.image-blur {
  width: 100%;
  height: 500px;
}
</style>
