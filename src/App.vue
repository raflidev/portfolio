<template>
  <section id="app" class="bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" to="/">
          <img src="@/assets/watermark.jpg" active-class="active" width="60" height="60" alt />
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
              <router-link class="nav-link" active-class="active" to="/project">WORK</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/about">ABOUT ME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/blog">BLOG</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/contact">CONTACT</router-link>
            </li>
            <li class="nav-item">
              <span class="nav-divider"></span>
            </li>
            <li class="nav-item">
              <router-link
                class="btn btn-dark rounded-pill px-3"
                active-class="active"
                to="/login"
              >HIRE ME</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,400&family=Montserrat:wght@300;400;500;600;700&family=Red+Hat+Display:wght@400;500;700&display=swap");

.btn-dark {
  color: #fff !important;
}
.active > .nav-link,
.navbar-nav .nav-link.active {
  color: #31de31 !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #000;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #31de31 !important;
}
/* .text-purple {
  color: #9d9d9e !important;
} */
#app {
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 30px;
}
.text-redhat {
  font-family: "Red Hat Display", sans-serif;
}
.navbar {
  padding-top: 30px;
  padding-right: 1rem;
  padding-bottom: 30px;
  padding-left: 1rem;
}
.navbar-nav .nav-divider {
  width: 1px;
  height: calc(100% - 8px);
  display: inline-block;
  margin: 4px 1.25rem;
}
.navbar-dark .navbar-nav .nav-divider {
  background-color: #282646;
}
.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 1.25rem !important;
  padding-left: 1.25rem !important;
}
.font-weight-light {
  font-weight: 300;
}
.btn-outline-purple {
  color: #fff;
  border-color: #fff;
}
.btn-outline-purple:hover {
  color: #fff;
  background-color: #491d8c;
  border-color: #491d8c;
}
</style>
