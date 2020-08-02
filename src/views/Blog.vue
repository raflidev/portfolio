<template>
  <div class="container mt-4">
    <h1 class="mt-5 font-weight-bold">Blog</h1>
    <h4 class="font-weight-light">Writing and sharing</h4>
    <div class="row mt-5 mb-3">
      <div class="col-lg-4 col-md-6" v-for="blog in 6" :key="blog.index">
        <div class="card mb-4 border-0">
          <img class="card-img-top" src="http://placehold.it/300x200" alt="Card image cap" />
          <div class="card-body">
            <h3 class="card-title font-weight-bold">Post Title</h3>
            <p
              class="card-text font-weight-light mb-0"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ducimus quam dolorem culpa placeat temporibus beatae quae voluptatem fugiat esse.</p>
            <router-link
              to="/project"
              class="my-3 font-14 btn btn-outline-dark rounded-pill text-uppercase font-weight-bold"
            >Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>