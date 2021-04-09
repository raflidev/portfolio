<template>
  <main id="app">
    <div class="container border-bottom py-5 mb-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-redhat">
            <h2 class="text-muted font-weight-light">Hello, I'm</h2>
            <h1 class="font-weight-bolder">Rafli Ramadhan</h1>
            <h5 class="text-muted">Frontend Web Developer</h5>
            <div class="media-sosial mt-4 pb-2">
              <a
                href="https://instagram.com/raflidev"
                target="_blank"
                class="pr-4"
              >
                <img
                  src="@/assets/social-media/instagram.svg"
                  class="pb-2"
                  width="40"
                />
              </a>
              <a
                href="https://twitter.com/raflidev"
                target="_blank"
                class="pr-4"
              >
                <img
                  src="@/assets/social-media/twitter.svg"
                  class="pb-2"
                  width="40"
                />
              </a>
              <a href="https://" target="_blank" class="pr-4">
                <img
                  src="@/assets/social-media/youtube.svg"
                  class="pb-2"
                  width="40"
                />
              </a>
              <a
                href="https://open.spotify.com/show/5TcR4q4Gy3rplg026XGo5Q?si=xSj1CgCqShK7BtDT1gb4WA"
                target="_blank"
                class="pr-4"
              >
                <img
                  src="@/assets/social-media/spotify.svg"
                  class="pb-2"
                  width="40"
                />
              </a>
              <a
                href="https://github.com/raflidev"
                target="_blank"
                class="pr-4"
              >
                <img
                  src="@/assets/social-media/github.svg"
                  class="pb-2"
                  width="40"
                />
              </a>
              <a href="https://t.me/raflidev" target="_blank" class="pr-4">
                <img
                  src="@/assets/social-media/telegram.svg"
                  class="pb-2"
                  width="40"
                />
              </a>
            </div>
            <div class="action-link pt-3 mb-3">
              <router-link
                to="/contact"
                class="btn btn-dark rounded-pill py-2 mb-3 px-4 mr-3 font-weight-bolder"
                >HIRE ME</router-link
              >

              <a
                href="/Rafli_Resume.pdf"
                target="_blank"
                class="btn btn-outline-dark rounded-pill py-2 mb-3 px-4 font-weight-bolder"
                >DOWNLOAD MY RESUME</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-none d-sm-block">
          <ImageBlur :image="myImage.large" :thumb="myImage.thumb" />
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 py-4"
            v-for="work in home"
            :key="work.index"
          >
            <div class="card work animate__animated animate__fadeIn">
              <img
                v-bind:src="work.image"
                class="card-img-top"
                width="325"
                srcset
              />
              <div class="card-body py-0 pt-2">
                <div class="info-porfolio">
                  <router-link
                    v-bind:to="'project/' + work.slug"
                    class="stretched-link text-dark"
                  >
                    <span class="material-icons rounded-circle"
                      >visibility</span
                    >
                  </router-link>
                </div>
                <h6
                  class="font-weight-bold mb-0 text-muted text-uppercase category"
                >
                  {{ work.platform }}
                </h6>
                <p class="font-weight-bold float-left text-uppercase">
                  {{ work.name }}
                </p>
                <p class="font-weight-bold float-right">{{ work.year }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">

          <router-link
            to="/project"
            class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
            >Load more work</router-link
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="mt-5 container">
      <h1 class="text-center font-weight-bold">READ ME</h1>
      <h4 class="font-weight-light mt-0 text-center">
        Sometimes i write and sharing
      </h4>
      <div class="row mt-5 mb-3">
        <div class="col-lg-4 col-md-6" v-for="(medium,index) in medium.items" :key="medium.index">
           <div class="card mb-4 border-0 animate__animated animate__fadeIn" v-if="index < 3 ">
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
  </main>
</template>
<script>
import { mapState } from "vuex";
import { ImageBlur } from "@djanoskova/vue-image-blur";
import "@djanoskova/vue-image-blur/public/css/imageBlur.css";
import moment from "moment";
export default {
  computed: mapState(["home","medium"]),
  data() {
    return {
      myImage: {
        large: "me/home.jpg",
        thumb: "me/home.jpg",
      },
    };
  },
  mounted(){
    this.$store.dispatch("getMedium");
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

<style>
.work .category,
.option-work button,
.font-14 {
  font-size: 14px !important;
}
.work .info-porfolio {
  position: absolute;
  top: 0;
  bottom: 50px;
  align-items: center;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
}
.work:hover .info-porfolio {
  opacity: 1;
}
.work:hover img {
  opacity: 0.3;
}
</style>

<style scoped>
@media only screen and (min-width: 700px) {
  .image-blur {
    width: 390px;
    height: 500px;
  }
}

@media only screen and(max-width: 700px) {
  .image-blur {
    width: 100%;
    height: 300px;
  }
}
</style>
