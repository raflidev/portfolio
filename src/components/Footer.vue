<template>
  <div class="mt-3 py-2 bg-dark text-secondary footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-4 col-sm-12">
          &copy; 2020 Rafli Ramadhan
        </div>
        <div class="col-lg-5 col-md-8 col-sm-12">
          <router-link to="/project" class="text-secondary mr-3"
            >Work</router-link
          >
          <router-link to="/about" class="text-secondary mr-3"
            >About Me</router-link
          >
          <router-link to="/blog" class="text-secondary mr-3">Blog</router-link>
          <router-link to="/contact" class="text-secondary mr-3"
            >Contact</router-link
          >
          <router-link
            to="/"
            class="text-secondary btn btn-outline-secondary rounded-pill px-3"
            >Hire Me</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
