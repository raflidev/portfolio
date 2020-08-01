<template>
  <div>
    <div class="container">
      <h1 class="mt-5 font-weight-bold">Project</h1>
      <h4 class="font-weight-light">My best work and stuff</h4>
      <div class="py-4 text-center option-work">
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
        <!-- <button
            @click="selectedCategory = 'desktop'"
            class="btn btn-outline-dark text-uppercase font-weight-bold mr-3 rounded-pill"
        >Desktop</button>-->
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 py-4"
          v-for="work in filteredWork"
          :key="work.index"
        >
          <div class="card work">
            <img v-bind:src="work.image" class="card-img-top" width="325" srcset />
            <div class="card-body py-0 pt-2">
              <div class="info-porfolio">
                <a v-bind:href="'project/' + work.id" class>
                  <span class="material-icons rounded-circle">visibility</span>
                </a>
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["works"]),
    filteredWork: function() {
      var category = this.$store.state.selectedCategory;

      if (category === "All") {
        return this.works;
      } else {
        return this.works.filter(function(worka) {
          return worka.platform === category;
        });
      }
    }
  }
};
</script>

<style>
</style>