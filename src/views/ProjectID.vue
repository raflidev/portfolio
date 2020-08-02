<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <img :src="workFiltered[0].image" class="img-fluid" />
      </div>
      <div class="col-lg-5">
        <div class="pt-4">
          <h2 class="text-uppercase font-weight-bolder text-redhat mb-0">{{workFiltered[0].name}}</h2>
          <h5 class="text-uppercase font-weight-bold text-secondary text-redhat">
            {{workFiltered[0].platform}}
            <span class="mx-1">|</span>
            {{workFiltered[0].year}}
          </h5>
          <div class="py-4">
            <h5 class="font-weight-bold">Tools</h5>
            <div>
              <img
                v-for="index in workFiltered[0].tools.length"
                :key="index"
                v-bind:src="'/tools/'+workFiltered[0].tools[index - 1]+'.png'"
                width="40"
                class="mr-3"
              />
            </div>
          </div>

          <p class="text-justify">{{workFiltered[0].desc}}</p>
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
    workFiltered() {
      return this.$store.state.works.filter(post => {
        return post.slug == this.$route.params.slug;
      });
    }
  }
};
</script>

<style>
</style>