<template>
  <main id="app">
    <div class="container border-bottom py-5 mb-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-redhat">
            <h2 class="text-muted font-weight-light">Hello, I'm</h2>
            <h1 class="font-weight-bolder">Rafli Ramadhan</h1>
            <h5 class="text-muted">Fullstack Web Developer</h5>
            <div class="media-sosial mt-4 pb-2">
              <a href="https://instagram.com/raflidev" target="_blank" class="pr-4">
                <img src="@/assets/social-media/instagram.svg" class="pb-2" width="40" />
              </a>
              <a href="https://twitter.com/raflidev" target="_blank" class="pr-4">
                <img src="@/assets/social-media/twitter.svg" class="pb-2" width="40" />
              </a>
              <!-- <a href="https://" target="_blank" class="pr-4">
                <img src="@/assets/social-media/dribbble.svg" class="pb-2" width="40" />
              </a>-->
              <a href="https://" target="_blank" class="pr-4">
                <img src="@/assets/social-media/youtube.svg" class="pb-2" width="40" />
              </a>
              <a
                href="https://open.spotify.com/show/5TcR4q4Gy3rplg026XGo5Q?si=xSj1CgCqShK7BtDT1gb4WA"
                target="_blank"
                class="pr-4"
              >
                <img src="@/assets/social-media/spotify.svg" class="pb-2" width="40" />
              </a>
              <a href="https://github.com/raflidev" target="_blank" class="pr-4">
                <img src="@/assets/social-media/github.svg" class="pb-2" width="40" />
              </a>
              <a href="https://t.me/raflidev" target="_blank" class="pr-4">
                <img src="@/assets/social-media/telegram.svg" class="pb-2" width="40" />
              </a>
            </div>
            <div class="action-link pt-3 mb-3">
              <router-link
                to="/contact"
                class="btn btn-dark rounded-pill py-2 mb-3 px-4 mr-3 font-weight-bolder"
              >HIRE ME</router-link>
              <router-link
                to="/"
                class="btn btn-outline-dark rounded-pill py-2 mb-3 px-4 font-weight-bolder"
              >SEE MY RESUME</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-none d-sm-block">
          <img src="me/home.jpg" class="img-fluid" width="500" />
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <!-- <div class="py-4 text-center option-work">
          <button
            @click="$store.state.selectedCategory = 'All'"
            class="btn btn-outline-dark text-uppercase font-weight-bold mr-3 rounded-pill"
          >All</button>
          <button
            @click="$store.state.selectedCategory = 'web'"
            class="btn btn-outline-dark text-uppercase font-weight-bold mr-3 rounded-pill"
          >Web</button>
          <button
            @click="$store.state.selectedCategory = 'ui'"
            class="btn btn-outline-dark text-uppercase font-weight-bold mr-3 rounded-pill"
          >UI</button>
          <button
            @click="selectedCategory = 'desktop'"
            class="btn btn-outline-dark text-uppercase font-weight-bold mr-3 rounded-pill"
          >Desktop</button>
        </div>-->
        <div class="row">
          <div class="col-lg-4 col-md-6 py-4" v-for="work in home" :key="work.index">
            <div class="card work">
              <img v-bind:src="work.image" class="card-img-top" width="325" srcset />
              <div class="card-body py-0 pt-2">
                <div class="info-porfolio">
                  <router-link v-bind:to="'project/' + work.slug" class="stretched-link text-dark">
                    <span class="material-icons rounded-circle">visibility</span>
                  </router-link>
                </div>
                <h6
                  class="font-weight-bold mb-0 text-muted text-uppercase category"
                >{{ work.platform }}</h6>
                <p class="font-weight-bold float-left text-uppercase">{{ work.name }}</p>
                <p class="font-weight-bold float-right">{{ work.year }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <!-- <button
            @click="showWork += 5"
            class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
          >Load more work</button>-->

          <router-link
            to="/project"
            class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
          >Load more work</router-link>
        </div>
      </div>
    </div>
    <div class="mt-5 container">
      <h1 class="text-center font-weight-bold">READ ME</h1>
      <h4 class="font-weight-light mt-0 text-center">Sometimes i write and sharing</h4>
      <div class="row mt-5 mb-3">
        <div class="col-lg-4 col-md-6" v-for="blog in blog" :key="blog.index">
          <div class="card mb-4 border-0">
            <p class="position-absolute text-center bg-dark text-white p-3 font-weight-bold">
              10
              <br />June
            </p>
            <img class="card-img-top" src="http://placehold.it/300x200" alt="Card image cap" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">{{blog.title}}</h3>
              <p class="card-text font-weight-light mb-0">{{blog.decs.substring(0,100)}}...</p>
              <router-link
                :to="'/blog' + blog.slug"
                class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
              >Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["home", "blog"])
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
