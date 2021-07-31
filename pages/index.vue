<template>
  <div class="px-4 md:px-0">
    <div>
      <section class="flex justify-center">
        <div class="w-full px-4 lg:w-1/2 bg-white py-4 md:px-0 fixed top-0 z-10">
          <div class="flex lg:px-0 justify-between items-center font-medium">
            <router-link to="/#">
              <img src="/logo.jpg" width="50" alt="">
            </router-link>
            <div class="space-x-0 lg:space-x-4 lg:inline" :class="{ 'hidden': !menu, 'absolute lg:static -ml-4 md:-ml-0 top-20 grid bg-gray-300 lg:bg-white w-full lg:w-1/2 divide-y divide-black lg:divide-none': menu }">
              <router-link to="#work" class="hover:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Work</router-link>
              <router-link to="#" class="hover:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Certificate</router-link>
              <router-link to="#" class="hover:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">About me</router-link>
              <router-link to="#" class="hover:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Blog</router-link>
            </div>
            <button @click="menu = !menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 inline lg:hidden hover:bg-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section class="flex justify-center">
        <div class="mt-48 w-full lg:w-1/2 flex items-center space-x-10">
          <div class="w-full lg:w-1/2 space-y-3 animate__animated animate__fadeInLeft">
            <h1 class="font-bold text-5xl">Muhammad Rafli Ramadhan</h1>
            <p class="font-medium text-xl">Frontend Web Developer</p>
            <div class="flex space-x-4">
              <a href="http://instagram.com/raflidev">
                <img src="/social-media/instagram.svg" width="30" alt="" srcset="">
              </a>
              <a href="http://instagram.com/raflidev">
                <img src="/social-media/github.svg" width="30" alt="" srcset="">
              </a>
              <a href="http://instagram.com/raflidev">
                <img src="/social-media/dribbble.svg" width="30" alt="" srcset="">
              </a>
            </div>
            <button class="px-8 py-2 rounded-md bg-green-400 font-medium hover:text-white hover:bg-green-600">HIRE ME</button>
          </div>
          <div class="hidden lg:inline animate__animated animate__fadeIn w-1/2">
            <img src="/me/home.jpg" class="rounded" alt="raflidev">
          </div>
        </div>
      </section>

      <section id="work" class="flex justify-center mt-40">
        <div class="w-full lg:w-1/2">
          <h1 class="font-bold text-3xl text-center">My Favourite Projects</h1>
          <div class="grid grid-cols-2 gap-4 mt-20" v-if="showless">
            <div v-for="(work, index) in work" :key="work.index">
              <div class="relative animate__animated animate__fadeIn" v-if="index < 4">
                <img class="rounded-md" :src="work.image" :alt="work.name">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:bg-opacity-50">
                  <p>{{work.name}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-20" v-else>
            <div v-for="work in work" :key="work.index">
              <div class="relative animate__animated animate__fadeIn">
                <img class="rounded-md" :src="work.image" :alt="work.name">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:bg-opacity-50">
                  <p>{{work.name}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <button v-if="showless" @click="showless = false" class="text-center bg-gray-300 py-2 px-4 rounded">Show all</button>
            <button v-else @click="showless = true" class="text-center bg-gray-300 py-2 px-4 rounded">Show less</button>
          </div>
        </div>
      </section>

      <section class="mt-40">
        footer
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      showless: true,
      menu: false
    }
  },
  computed: {
    work(){
      return this.$store.state.works
    }
  }
}
</script>

<style>

</style>