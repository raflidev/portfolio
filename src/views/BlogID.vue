<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-lg-10">
        <h1 class="mt-5 font-weight-bold">{{blog[0].title}}</h1>
        <h4 class="font-weight-light">sometimes i write and sharing</h4>
        <img src="http://placehold.it/900x300" class="mt-4 img-fluid" alt srcset />
        <hr />
        <p class="text-justify">{{blog[0].decs}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blog() {
      return this.$store.state.blog.filter(post => {
        return post.slug == this.$route.params.slug;
      });
    }
  }
};
</script>

<style>
</style>