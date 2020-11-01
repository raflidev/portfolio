<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="/">
      <img
        src="@/assets/watermark.jpg"
        active-class="active"
        width="60"
        height="60"
        alt
      />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/project"
            >WORK</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/certificate"
            >CERTIFICATE</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/about"
            >ABOUT ME</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/blog"
            >BLOG</router-link
          >
        </li>
        <li class="nav-item">
          <span class="nav-divider"></span>
        </li>
        <li class="nav-item">
          <router-link
            class="btn nav-link btn-dark rounded-pill px-3"
            active-class="active"
            to="/contact"
            >HIRE ME</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>