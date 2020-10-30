<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-lg-10">
        <h1 class="mt-5 font-weight-bold">{{ blog[0].title }}</h1>
        <h4 class="font-weight-light">
          {{ getTimeBlog(blog[0].date) }}
        </h4>
        <img :src="blog[0].image.large" class="mt-4 img-fluid" alt srcset />
        <hr />
        <p class="text-justify">
          <span v-html="blog[0].decs"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  computed: {
    blog() {
      return this.$store.state.blog.filter((post) => {
        return post.slug == this.$route.params.slug;
      });
    },
  },
  methods: {
    getTimeBlog(date) {
      return moment(date).format("LL");
    },
  },
};
</script>

<style></style>
