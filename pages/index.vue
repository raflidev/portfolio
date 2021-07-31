<template>
  <div class="px-4 md:px-0 flex justify-center">
    <div class="w-full md:w-1/2">
      <div class="w-1/2 bg-white py-4 md:p-4 fixed top-0">
        <div class="flex justify-between items-center font-medium">
          <img src="/logo.jpg" width="50" alt="">
          <div class="space-x-4">
            <router-link to="#work" class="hover:text-green-400">Work</router-link>
            <router-link to="#" class="hover:text-green-400">Certificate</router-link>
            <router-link to="#" class="hover:text-green-400">About me</router-link>
            <router-link to="#" class="hover:text-green-400">Blog</router-link>
          </div>
        </div>
      </div>

      <section class="mt-48 flex items-center space-x-10">
        <div class="w-full lg:w-1/2 space-y-3">
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
        <div class="hidden lg:inline w-1/2">
          <img src="/me/home.jpg" alt="">
        </div>
      </section>

      <section id="work" class="mt-96">
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>