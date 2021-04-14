<template>
  <section id="app" class="bg-white">
    <div class="container">
      <Header />
    </div>
    <router-view />
  </section>
</template>
<script>
// import Footer from "@/components/Footer.vue";  
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>
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
